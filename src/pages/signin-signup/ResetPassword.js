import React, { useState } from 'react'
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useSelector } from 'react-redux';
import { requestPassOTP } from '../../helper/axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {

    const [form, setForm] = useState('otp')
    const[resp, setResp] = useState({})

    const handleOnOtpRequest = async (email) =>{

        if(!email.includes('@') && !email.includes('.')){
            return toast.error("Invalid email")
        }

        const pending = requestPassOTP(email)
        toast.promise(pending, {
            pending: "Please wait....."
        })

        const result = await pending;
        setResp(result)
        setForm(result)
    }

  return (
     <>
       <Header />
            <main className='main pt-5'>
                <div className="d-flex reset-pass">
                </div>
            </main>
       <Footer />
     </>
    )
}

export default ResetPassword