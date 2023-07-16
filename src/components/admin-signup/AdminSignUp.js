import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CustomInput } from '../custom-input/CustomInput'

export const AdminSignUp = () => {
    const inputs =[ 
    {
        label:'First Name',
        name: 'fName',
        required: true,
        placeholder: 'Sam',
        type: 'text',
    },
    {
        label:'last Name',
        name: 'lName',
        required: true,
        placeholder: 'Sam',
        type: 'text',
    },
    {
        label:'Phone',
        name: 'phone',
        placeholder: '0987654',
        type: 'number',
    },
    {
        label:'Address',
        name: 'address',
        placeholder: 'Sydney',
        type: 'text',
    },
    {
        label:'Email',
        name: 'email',
        required: true,
        placeholder: 'Sam@email',
        type: 'email',
    },
    {
        label:'Password',
        name: 'password',
        required: true,
        placeholder: '***********',
        type: 'password',
        minLength: '6'
    },
    {
        label:'Confirm Password',
        name: 'confirmPassword',
        required: true,
        placeholder: '***********',
        type: 'password',
        minLength: '6'
    },
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
        e.prevenDefault();
      }
  return (
    <div>
        <h3>Add New Admin</h3>
        <hr />
        <Form style={{width: "450px"}} className='m-auto border p-3 shadow-lg mt-5 rounded' onSubmit={handleOnSubmit}>
        {
            inputs.map((item, i) =>(
                <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))
        }
         <Button variant="primary" type="Submit" >Submit</Button>   
        </Form>
    </div>
  )
}
