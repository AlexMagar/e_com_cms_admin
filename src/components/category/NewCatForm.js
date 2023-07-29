
import React, { useRef } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createNewCategoryAction } from '../../pages/category/categoryAction'

export const NewCatForm = () => {

    const dispatch = useDispatch()
    const nameRef = useRef()

    const handleOnAddCat = () =>{
        const {value } = nameRef.current

        value && dispatch(createNewCategoryAction({title: value}))
    }

  return (
    <Form className='border p-4 rounded shadpw-lg'>
        <Row>
            <Col>
                <Form.Control placeholder='First' ref={nameRef}/>
            </Col>
            <Col className="d-grid"> 
                <Button variant='primary' onClick={handleOnAddCat}>Add New Category</Button>
            </Col>
        </Row>
    </Form>
  )
}
