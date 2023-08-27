import React from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { LineChart } from "recharts";

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
        <AdminLayout title="Dashboard">Dashboard</AdminLayout>
        <div>
        <LineChart
      data={data}
      width={500}
      height={300}
      xAxis={20}
      yAxis={20}
      className="chart-container"
      style={{
        background: "blue",
        color: "white",
      }}
    />
        </div>
    </div>
  )
}
