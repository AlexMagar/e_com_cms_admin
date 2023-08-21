
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CustomInput } from "../../components/custom-input/CustomInput";
import { addNewPOAction } from '../../pages/payment-option/poAction';

const initialState = {
    status: "",
    title: "",
    description: ""
}

export const NewPaymentOption = () => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    const handleOnChange = (e) =>{
        let {name, value} = e.target;
        
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        dispatch(addNewPOAction(form))

        setForm(initialState) //reset the form
    }


  return (
    <div className="border p-4 rounded shadow-lg">
        <Row>
            <Col>
            <Form onSubmit={handleOnSubmit}>
                <label htmlFor=''>Status</label>
                <Form.Select name='status' onChange={handleOnChange} required>
                    <option value="">----Select One----</option>
                    <option value="active" selected={form.status === "active"}>Active</option>
                    <option value="inactive" selected={form.status === "inactive"}>Inactive</option>
                </Form.Select>
                <CustomInput label="Title" name="Title" placeholder="Pay by credit card" required onChange={handleOnChange} value={form.title}/>
                <CustomInput as="textarea" rows={5} name="description" placeholder="say how to make payment...." required onChange={handleOnChange} value={form.title}/>
                <div className="d-grid mt-3">
                <Button variant='dark' type='submit'>Add New Category</Button>
                </div>
            </Form>
            </Col>
        </Row>
    </div>
  )
}
