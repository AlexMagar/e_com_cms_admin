
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CustomInput } from "../../components/custom-input/CustomInput";
import { addNewPOAction } from '../../pages/payment-option/poAction';

export const EditCategoryForm = () => {

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
    }


  return (
    <div className="border p-4 rounded shadow-lg">
        <Row>
            <Col>
            <Form onSubmit={handleOnSubmit}>
                <label htmlFor=''>Status</label>
                <Form.Select name='status' onChange={handleOnChange} required>
                    <option value="">----Select One----</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </Form.Select>
                <CustomInput label="Title" name="Title" placeholder="Pay by credit card" required onChange={handleOnChange}/>
                <CustomInput as="textarea" name="description" placeholder="say how to make payment...." required onChange={handleOnChange}/>
                <div className="d-grid mt-3">
                <Button variant='primary' type='submit'>Add New Category</Button>
                </div>
            </Form>
            </Col>
        </Row>
    </div>
  )
}
