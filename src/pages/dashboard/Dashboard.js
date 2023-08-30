
import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area } from "recharts";
import { AdminLayout } from "../../components/layout/AdminLayout";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 }
];

export const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <main className="d-flex gap-2">
        <div className="border p-3 shadow-lg rounded ">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="border p-3 shadow-lg rounded " width={400} height={400}>
          <ResponsiveContainer >
            <AreaChart 
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="border p-3 shadow-lg rounded ">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </main>
    </AdminLayout>
  );
}
