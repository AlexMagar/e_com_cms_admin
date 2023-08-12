import React, { useState } from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { useDispatch } from 'react-redux'
import { postNewProductAction } from './productAction'
import { Link } from 'react-router-dom'
import { SelectCategory } from '../../components/category/SelectCategory'


const initialState = { status: "inactive" }

export const EditProduct = () => {

    const dispatch = useDispatch()

    const inputs = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Samsung TV',
            required: true
        },
        {
            name: 'sku',
            label: 'Sku',
            type: 'text',
            placeholder: 'SAM-TV-8',
            required: true
        },
        {
            name: 'qty',
            label: 'QTY',
            type: 'text',
            placeholder: '50',
            required: true
        },
        {
            name: 'price',
            label: 'PRICE',
            type: 'number',
            placeholder: '1000',
            required: true
        },
        {
            name: 'salesPrice',
            label: 'Sales Price',
            type: 'number',
            placeholder: '800',
        },
        {
            name: 'salesStartDate',
            label: 'Sales Start Date',
            type: 'Date'
        },
        {
            name: 'salesEndDate',
            label: 'Sales End Date',
            type: 'Date'
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            as: "textarea",
            placeholder: 'Product Description',
            rows:"10",
            required: true
        }
    ]

    const [form, setForm] = useState(initialState);
    const [img, setImgs] = useState()

    const handleOnChange = (e) =>{
        let { checked, name, value } = e.target

        if(name === 'status') {
            value = checked ? 'active' : 'inactive'
        }
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        const formDT = new FormData

        //set all 
        dispatch(postNewProductAction(form));
    }

    const handleOnImageAttached = (e) =>{
        const { files} = e.target
        setImgs(files)
    }

  return (
    <AdminLayout title="New Product">
        <Link to="/product"> 
        <Button variant='secondary'> &lt; Back</Button>
        </Link>
        <div className='mt-4'>
            <Form onSubmit={handleOnSubmit}>

                <Form.Group className='mb-3'>
                    <Form.Check name='status' type='switch' label="Status" onChange={handleOnChange}/>
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