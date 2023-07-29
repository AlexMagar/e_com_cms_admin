import React from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { NewCatForm } from '../../components/category/NewCatForm'
import { CategoryTable } from "../../components/category/CategoryTable";

export const Category = () => {

  return (
      <AdminLayout title="Category">
        <NewCatForm />
        <CategoryTable />
      </AdminLayout>
  )
}
