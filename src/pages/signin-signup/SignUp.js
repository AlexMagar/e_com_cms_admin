import React from 'react'
import { Header } from '../../components/layout/Header'
import {AdminSignUp} from '../../components/admin-signup/AdminSignUp'
import { Footer } from '../../components/layout/Footer'
import { AdminLayout } from '../../components/layout/AdminLayout'

export const SignUp = () => {

  return (
    <AdminLayout title="Add New Admin">
      <AdminSignUp />
    </AdminLayout>
  )
}
