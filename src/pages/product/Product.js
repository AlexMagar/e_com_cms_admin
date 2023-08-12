import React from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { Button } from 'react-bootstrap'
import { ProductTable } from '../../components/product/ProductTable'
import { Link } from 'react-router-dom'

export const Product = () => {
  return (
    <div>
        <AdminLayout title="Product">
          <div className="text-end">
            <Link to='/new-product' >
            <Button variant='primary'>Add new Product</Button>
            </Link>
              <ProductTable />
          </div>
        </AdminLayout>
    </div>
  )
}
