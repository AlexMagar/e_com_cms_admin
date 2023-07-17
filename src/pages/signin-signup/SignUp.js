import React from 'react'
import { Header } from '../../components/layout/Header'
import {AdminSignUp} from '../../components/admin-signup/AdminSignUp'
import { Footer } from '../../components/layout/Footer'

export const SignUp = () => {

  return (
    <div>
        <Header />
        <main className="main">
          <AdminSignUp />
        </main>
        <Footer />
    </div>
  )
}
