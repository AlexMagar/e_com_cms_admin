import React from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const Dashboard = () => {

  const data = [
    {
      name: 'January',
      uv: 1000,
      pv: 2000,
    },
    {
      name: 'February',
      uv: 2000,
      pv: 3000,
    },
    {
      name: 'March',
      uv: 3000,
      pv: 4000,
    },
    {
      name: 'April',
      uv: 4000,
      pv: 5000,
    },
    {
      name: 'May',
      uv: 5000,
      pv: 6000,
    },
  ];

  return (
    <div>
        <AdminLayout title="Dashboard">
        <div className='App p-5 b-solid'>
        <LineChart width={500} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey="name" />
          <YAxis / >
        </LineChart>
        </div>
        </AdminLayout>
    </div>
  )
}
