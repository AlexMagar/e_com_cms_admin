
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CustomInput } from "../../components/custom-input/CustomInput";
import { addNewPOAction, deletePOsAction } from '../../pages/payment-option/poAction';

const initialState = {
    status: "",
    title: "",
    description: ""
}

export const EditPaymentOption = ({po}) => {

    const dispatch = useDispatch()
    const [form, setForm] = useState(initialState)

    useEffect(() => {
        setForm(po)
    }, [po])

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

    const handleOnDelete = () => {
        if(window.confirm("Are you sure want to delete this payment option?"))

        dispatch(deletePOsAction(form._id))
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
                <CustomInput as="textarea" name="description" placeholder="say how to make payment...." required onChange={handleOnChange} value={form.title}/>
                <div className="d-grid mt-3">
                <Button variant='primary' type='submit'>Add New Pyment Option</Button>
                </div>
            </Form>
            <div className="d-grid mt-3">
                <Button variant='danger' type='submit' onClick={handleOnDelete}>Delete Payment Option</Button>
            </div>
            </Col>
        </Row>
    </div>
  )
}
