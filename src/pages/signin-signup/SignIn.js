import React, { useState } from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { Button, Form } from 'react-bootstrap'
import { fetchAdminAction } from "../cms/adminAction";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({})

  const inputs = [
    {
      label: "Email",
      name: "email",
      required: true,
      type: 'email',
      placeholder: "email"
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      placeholder: "Password"
    }
  ]

  const handleOnChange = (e) =>{
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]:  value,
    })
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    const isAdded = dispatch(fetchAdminAction(form));
    isAdded && navigate("/")
    console.log("From SignIn ",form);
  }

  return (
    <div>
        <Header />
        <main className='main'>
          <Form onSubmit={handleOnSubmit} style={{width: "450px"}} className='m-auto border p-3 mt-5 shadow-lg rounded'>
            <h3 className='App'>Login</h3>
            {
              inputs.map((item, i) => (
                <CustomInput 
                  onChange={handleOnChange}
                  key={i} {...item}
                />
              ))
            }
            <div className='d-grid'>
              <Button variant="primary" type='submit'>Login</Button>
            </div>
          </Form>
          </main>
        <Footer />
    </div>
  )
}
