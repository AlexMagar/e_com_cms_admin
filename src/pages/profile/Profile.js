import React, { useState } from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { updateProfileAction } from './profileAction'

export const Profile = () => {

  const pass = [
    {
      label: "Previous Password",
      name: "oldPassword",
      required: true,
      type: "password"
    },
    {
      label: "New Password",
      name: "newPassword",
      required: true,
      type: "password"
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password"
    }
  ]


  const {admin} = useSelector((state) => state.adminInfo)

  const [form, setForm] = useState({})

  const handleOnChange = (e) =>{
    const {value, name} = e.target

    setForm({
      ...form,
      [name]: value
  })
  }


  const handleOnSubmit = (e) =>{
    e.preventDefault()
    updateProfileAction(form)
  }

  return (
    <div>
        <AdminLayout title="Profile">
          
        <Form onSubmit={handleOnSubmit}>
          <CustomInput label="First Name" name="fName"  value={admin.fName} onChage={handleOnChange}/>
          <CustomInput label="Last Name" name="lName"  value={admin.lName} onChage={handleOnChange}/>
          <CustomInput label="Address" name="address"  value={admin.address} onChage={handleOnChange}/>
          <CustomInput label="Email" name="email"  value={admin.email} onChage={handleOnChange}/>
          <CustomInput label="Password" name="password"  onSubmit={handleOnSubmit} onChage={handleOnChange}/>

          <div className="d-grid mt-5">
              <Button variant="primary" type="submit" >Edit</Button>
          </div>  
            <hr />
            {
              pass.map((item, i) => (

              <CustomInput key={i} {...item} onChage={handleOnChange}/>
              ))
            }
          </Form>
        </AdminLayout>
    </div>
  )
}
