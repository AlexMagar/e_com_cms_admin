import React from 'react'
import Form from 'react-bootstrap/Form'

export const CustomInput = ({label,someRef, ...rest}) => {
    return(
        <Form.Group className="mb-3 gap">
            <Form.Label>{label}</Form.Label>
            <Form.Control {...rest} ref={someRef}/>
        </Form.Group>
    )
}