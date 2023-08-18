import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../custom-input/CustomInput'

export const PasswordOTP = () => {

  const emailRef = useRef("")

  const handleOnOTPRequest = () =>{
    const {value} = emailRef.current;
    if(value){
      handleOnOTPRequest(value)
    }
  }


  return (
    <Form>
        <h3>Request OTP</h3>
        <hr />
        <CustomInput label="email" someRef={emailRef} placeholder="sam@email.com"/>
        <div className="d-grid mt-3">
            <Button variant='dark' onClick={handleOnOTPRequest}>Request OTP</Button>
        </div>
    </Form>
  )
}
