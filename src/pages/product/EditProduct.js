import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { useDispatch } from 'react-redux'
import { postNewProductAction } from './productAction'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SelectCategory } from '../../components/category/SelectCategory'
import { getProduct } from '../../helper/axios'


export const EditProduct = () => {

    const dispatch = useDispatch()
    const { _id } = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState({});
    const [img, setImgs] = useState([])
    const [imgToDelete, setImgToDelete] = useState([])


    useEffect(() =>{
        getSelectedProduct()
    }, [])

    const getSelectedProduct = async () =>{
        const {products} = await getProduct(_id)

        products?._id && setForm(products)
    }

    const inputs = [
        {
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Samsung T.V.",
          required: true,
          value: form.name,
        },
        {
          name: "slug",
          label: "Slug",
          type: "text",
    
          value: form.slug,
          disabled: true,
        },
        {
          name: "sku",
          label: "SKU",
          type: "text",
          placeholder: "SAM-TV-8",
          required: true,
          value: form.sku,
          disabled: true,
        },
        {
          name: "qty",
          label: "QTY",
          type: "number",
          placeholder: "50",
          required: true,
          value: form.qty,
        },
        {
          name: "price",
          label: "PRICE",
          type: "number",
          placeholder: "1000",
          required: true,
          value: form.price,
        },
        {
          name: "salesPrice",
          label: "Sales Price",
          type: "number",
          placeholder: "800",
          value: form.salesPrice,
        },
        {
          name: "salesStartDate",
          label: "Sales Start Date",
          type: "Date",
          value: form?.salesStartDate?.slice(0, 10),
        },
        {
          name: "salesEndDate",
          label: "Sales End Date",
          type: "Date",
          value: form?.salesEndDate?.slice(0, 10),
        },
        {
          name: "description",
          label: "Description",
          type: "text",
          as: "textarea",
          placeholder: "product description ...",
          rows: "10",
          required: true,
          value: form.description,
        },
      ];

      const handleOnChange = (e) =>{
        let { checked, name, value } = e.target

        if(name === 'thumbnail' && imgToDelete.includes(value)) {
            return alert("Deleting image can't be set as thumbnail")
        }

        if(name === 'status'){
            value = checked ? "active" : "inactive";
        }

        setForm({
            ...form,
            [name]:value
        })
    }

    const handleOnImageAttached = (e) =>{
        const { files} = e.target
        setImgs(files)
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()

        if(!window.confirm("Are you sure want to update this product")){
            return
        }

        const formDT = new FormData();

        //set all from data in FormData

        //set all 
        dispatch(postNewProductAction(form));
    }


    const handleOnDeleteSelect = (e) =>{
        const {value, checked} = e.target;

        if(checked){ 
            setImgToDelete([
            ...imgToDelete, value
            ])
        }else{
            const temp = imgToDelete.filter(url => url !== value)

            setImgToDelete(temp)
        }
       
    }


   
  return (
    <AdminLayout title="New Product">
        <Link to="/product"> 
        <Button variant='secondary'> &lt; Back</Button>
        </Link>
        <div className='mt-4'>
            <Form onSubmit={handleOnSubmit}>

                <Form.Group className='mb-3'>
                    <Form.Check name='status' type='switch' label="Status" onChange={handleOnChange} checked={form.status === 'active'}/>
                </Form.Group>
                <SelectCategory onChange={handleOnChange} name="parentCat" required={true}/>

                {
                    inputs.map((item, i) => (
                        <CustomInput key={i} {...item} onChange={handleOnChange}/>
                    ))
                }

                <Form.Group className='mb-3 mt-3'>
                    <Form.Control type='file' name='img' multiple onChange={handleOnSubmit}/>
                </Form.Group>

                <div className="d-grid mt-3 mb-3">
                    <Button variant='success' type='submit'>Add Product</Button>
                </div>
            </Form>
        </div>
    </AdminLayout>
  )
}
