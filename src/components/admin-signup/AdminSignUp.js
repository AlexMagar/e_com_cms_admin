import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CustomInput } from '../custom-input/CustomInput'
import { createNewAdminAction } from '../../pages/cms/adminAction'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const AdminSignUp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const inputs =[
        {
            label: "First Name",
            name: "fName",
            required: true,
            type: "text",
            placeholder: "John"
        },
        {
            label: "Last Name",
            name: "lName",
            required: true,
            type: "text",
            placeholder: "Smith"
        },
        {
            label: "Phone",
            name: "phone",
            required: true,
            type: "tel",
            placeholder: "987654321"
        },
        {
            label: "Address",
            name: "address",
            required: true,
            type: "text",
            placeholder: "Sydney"
        },
        {
            label: "Email",
            name: "email",
            required: true,
            type: "email",
            placeholder: "email@mail.com",
        },
        {
            label: "Password",
            name: "password",
            required: true,
            type: "password",
            minLength: "6"
        },
        {
            label: "Confirm Password",
            name: "confirmPassword",
            required: true,
            type: "password"
        }
      ]
      
      const [form, setForm] = useState({})

      const handleOnChange = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        })

      }

      const handleOnSubmit = (e) => {
        e.preventDefault();

        const {confirmPassword, ...rest} = form;
        console.log(form)
        if( confirmPassword !== rest.password){
            return toast.error("password do not match")
        }
        const isAdded = createNewAdminAction(rest);
        isAdded && navigate("/dashboard")

        // if(window.confirm(`Do you want to add ${form.email} to the Database`)){
        //     const isAdded = dispatch(postCmsAction(form))
        //     isAdded && navigate("/");
           
        // }
      }


  return (
    <div>
        <Form style={{width: "450px"}} className='m-auto border p-3 shadow-lg mt-5 rounded' onSubmit={handleOnSubmit}>
        <h3 className="App">Add New Admin</h3>
        <hr />
        {
            inputs.map((item, i) =>(
                <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))
        }
        <div className="d-grid mt-5">
            <Button variant="primary" type="submit" >Submit</Button>
        </div>   
        </Form>
    </div>
  )
}
