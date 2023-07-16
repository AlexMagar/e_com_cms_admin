import React from 'react'
import { Header } from '../../components/layout/Header'
import {AdminSignUp} from '../../components/admin-signup/AdminSignUp'

export const SignUp = () => {

  return (
    <div>
        <Header />
        <main className="main">
          SignUp
          <AdminSignUp />
        </main>
    </div>
  )
}
