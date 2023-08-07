import React from 'react'
import { AdminLayout } from "../../components/layout/AdminLayout";
import { NewCatForm } from "../../components/payment-option/NewPaymentOption";

const PaymentOption = () => {
  return (
    <AdminLayout title="Payment Option">
        <NewCatForm />
    </AdminLayout>
  )
}

export default PaymentOption