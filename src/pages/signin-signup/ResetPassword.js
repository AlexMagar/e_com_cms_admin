import React, { useState } from 'react'
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useSelector } from 'react-redux';
import { requestPassOTP } from '../../helper/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const [form, setForm] = useState('otp')
    const[resp, setResp] = useState({})
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

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

    const processResetPassAPI = async (obj) => {
        const pending = resetPass({ ...obj, email });
        toast.promise(pending, {
          pending: "Please wait...",
        });
    
        const { status, message } = await pending;
        toast[status](message);
    
        status === "success" && navigate("/");
      };
    
      const forms = {
        otp: <PasswordOTP handleOnOtpRequest={handleOnOtpRequest} />,
        reset: (
          <PasswordReset
            setForm={setForm}
            processResetPassAPI={processResetPassAPI}
          />
        ),
      };

  return (
    <>
    <Header />
    <main className="main pt-5">
      {resp.message && (
        <Container>
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
          </Alert>
        </Container>
      )}
      <div className="d-flex reset-pass">
        {/* requeset opt form */}
        {forms[form]}

        {/* rest password form  */}
      </div>
    </main>
    <Footer />;
  </>
    )
}

export default ResetPassword