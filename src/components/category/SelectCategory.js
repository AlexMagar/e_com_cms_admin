import React from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const SelectCategory = (props) => {

const {categoryList} = useSelector((state) => state.categoryInfo)

    console.log("From the set Category: ", categoryList)

  return (

    <Form.Group className='mb-3'>
        <Form.Select {...props} >
            <option value=" ">---Select One ----</option>
            {
                categoryList.map(({_id, title}) => (
                    <option key={_id} value={_id} selected={_id === props._id}>
                        {title}
                    </option>
                ))
            }
        </Form.Select>
    </Form.Group>
  )
}
