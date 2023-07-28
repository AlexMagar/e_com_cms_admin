import React, { useState } from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { useDispatch } from 'react-redux'
import { createNewCategory } from "./categoryAction";
import { useNavigate } from 'react-router-dom'

export const Category = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputs = [
    {
      label: "Category",
      name: "category",
      title: "title",
      required: true,
      type: "text",
      placeholder: "Mobile Devices"
    }
  ]

  const [form, setForm] = useState({})

  const handleOnChange = (e) =>{
    const {title, value} = e.target;
    console.log(title, value)
    setForm({
      ...form,
      [title]: value
    })
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();

    const isAdded = dispatch(createNewCategory(form))

    isAdded && navigate("/category")
  }

  return (
    <div>
        <AdminLayout title="Category">
        <Form onSubmit={handleOnSubmit}>
          {
            inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange}/>
            ))
          }
          <div className='d-grid '>
            <Button variant='primary' type='submit'>Add New Category</Button>
          </div>
        </Form>
        </AdminLayout>
        
    </div>
  )
}
