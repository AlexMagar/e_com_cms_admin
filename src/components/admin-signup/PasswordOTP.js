import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../custom-input/CustomInput'

export const PasswordOTP = () => {
  return (
    <Form>
        <h3>Request OTP</h3>
        <hr />
        <CustomInput label="email" />
        <div className="d-grid mt-3">
            <Button variant='dark'>Request OTP</Button>
        </div>
    </Form>
  )
}
