
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteCategoryAction, updateCategoryAction } from '../../pages/category/categoryAction'

export const EditCategoryForm = ({category}) => {

    const dispatch = useDispatch()

    const [form, setForm] = useState({})

    useEffect(() => {
        setForm(category);
    }, [dispatch, category])

    const handleOnSubmit = (e) =>{
        e.preventDefault()

        const { _id, title, status} = form

        dispatch(updateCategoryAction({_id, title, status}))
    }

    const handleOnChange = (e) =>{
        let {name, value, checked} = e.target;
        console.log("handleOnChnage from editcatForm",name, value, checked)
        if(name === "status"){
            value = checked ? "active" : "inactive"
        }
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnDelete = () =>{
        if(window.confirm("Are you sure want to delete this category"))
        dispatch(deleteCategoryAction(category._id));
        
    }

  return (
    <Form onSubmit={handleOnSubmit} className='border p-4 rounded shadpw-lg'>
        <Form.Group className='mt-3'>
            <Form.Check type='switch' name='status' label='Status' checked={form.status === 'active'} onChange={handleOnChange} />
        </Form.Group>
        <Form.Group className='mt-3'>
            <Form.Control placeholder="First Name" name='title' value={form.title} onChange={handleOnChange} />
        </Form.Group>
        <Form.Group className='mt-3 d-grid'>
            <Button variant='primary' type="submit">Update Category</Button>
        </Form.Group>
        <Form.Group className='mt-3 d-grid'>
            <Button variant='danger' onClick={handleOnDelete}>Delete Category</Button>
        </Form.Group>
    </Form>
  )
}
