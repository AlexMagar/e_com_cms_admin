import React, { useState } from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Button } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { verifyAdminEmail } from '../cms/adminAction'

export const VerifyAdmin = () => {

    let [searchParams] = useSearchParams();
    const [showSpinner, setShowSpinner] = useState(true)
    
    const code = searchParams.get("c")
    const email = searchParams.get("e")

    const handleOnClick = (e) =>{
      e.preventDefault();
      verifyAdminEmail(code, email);
    }


  return (
    <div>
        <Header />
        <div className="main App">
            <Button onClick={handleOnClick}>
              
              Verify the email
              </Button>
        </div>
        <Footer />
    </div>
  )
}
