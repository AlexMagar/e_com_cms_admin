import React, { useEffect, useState } from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Alert, Container } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Spinner from "react-bootstrap/Spinner";
import { postNewAdminVerificationInfo } from '../../helper/axios'
import { toast } from 'react-toastify'

export const VerifyAdmin = () => {

    const navigate = useNavigate()

    let [queryStrings] = useSearchParams();
    const [showSpinner, setShowSpinner] = useState(true)
    const [resp, setResp] = useState({});

    const code = queryStrings.get("c")
    const email = queryStrings.get("e")

    //1. call api to verify from the server
    // 2. based on the respon show it and if success redirect to login page
    useEffect(() =>{
      // callAPI &&

      postNewAdminVerificationInfo({code, email}).then((resp) =>{
        setResp(resp);
        setShowSpinner(false)
        toast[resp.status](resp.message);
        if(resp.status === "success"){
          navigate("/login")
        }
      })
      //callAPI.current = false
    }, [code, email, navigate])

  return (
    <div>
        <Header />
        <main className="main mt-5">
          <Container>
            {
              showSpinner ? (
                <div className='mt-5 text-center'>
                  <Spinner animation='border' variant='primary' className='fs-1' />
                  <br/>
                  Please wait while account being verified......
                </div>
              ) :(
                <Alert variant={resp.status === "success" ? "Success" : "danger"}>
                  {resp.message}
                </Alert>
              )
            }
          </Container>
        </main>
        <Footer />
    </div>
  )
}
