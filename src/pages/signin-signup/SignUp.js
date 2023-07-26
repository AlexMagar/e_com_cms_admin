import React from 'react'
import {AdminSignUp} from '../../components/admin-signup/AdminSignUp'
import { AdminLayout } from '../../components/layout/AdminLayout'

export const SignUp = () => {

  return (
    <AdminLayout title="Add New Admin">
      <AdminSignUp />
    </AdminLayout>
  )
}
