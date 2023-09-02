
import React, { Fragment, useCallback, useState } from "react";
import { PieChart, Pie, Bar, BarChart, Legend, Tooltip, ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area, LineChart, Line } from "recharts";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { useSelector } from "react-redux";
import { RenderActiveShape } from "../../components/DashboardComponent/RenderActiveShape";
import { RiAdminFill} from 'react-icons/ri'
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Card } from "react-bootstrap";

const data = [
  { name: "Darwin", value: 400 },
  { name: "Brisbane", value: 100 },
  { name: "Sydney", value: 200 },
  { name: "Melbroune", value: 300 },
  { name: "Tasmania", value: 250 },
  { name: "Parth", value: 600 },
  { name: "Adelaide", value: 150 },
];

const data01 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export const Dashboard = () => {

  const {adminList} = useSelector((state) => state.adminListInfo)
  const {categoryList} = useSelector((state) => state.categoryInfo)
  const {products} = useSelector((state) => state.productInfo)
  console.log("From Dashboard: ",adminList, categoryList)

  const [state, setState] = useState(0)

 const index = 0;
  const onPieEnter = (e) =>{
    const {name, value} = e.payload
    console.log("Dashboard ",value, name)
    setState({
      state: value,
    })
  }

  return (
    <AdminLayout title="Dashboard">
      <main className="gap-2 d-grid">
        <div className="topGraphInfo">
          <Card className="card" style={{ width: '18rem' }}>
              <Card.Title>Admin</Card.Title>
              <RiAdminFill className="fs-3"/>
              <Card.Subtitle className="mb-2 text-muted">{adminList.length}</Card.Subtitle>
          </Card>
          <Card  className="card" style={{ width: '18rem' }}>
              <Card.Title>Category</Card.Title>
              <BiCategory className="fs-3"/>
              <Card.Subtitle className="mb-2 text-muted">{categoryList.length}</Card.Subtitle>
          </Card>
          <Card className="card" style={{ width: '18rem' }}>
              <Card.Title>Product</Card.Title>
              <MdProductionQuantityLimits className="fs-3"/>
              <Card.Subtitle className="mb-2 text-muted">{products.length}</Card.Subtitle>
          </Card>
        </div>
        <div className="mainGraphInfo">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>s
              <Pie
                activeIndex={state}
                activeShape={ <RenderActiveShape />}
                data={data}
                cx={200}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={250}
            data={data01}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </AdminLayout>
  );
}
