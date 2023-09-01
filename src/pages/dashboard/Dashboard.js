
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area } from "recharts";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { useSelector } from "react-redux";
import { RenderActiveShape } from "../../components/DashboardComponent/RenderActiveShape";

const data = [
  { name: "Darwin", value: 400 },
  { name: "Brisbane", value: 100 },
  { name: "Sydney", value: 200 },
  { name: "Melbroune", value: 300 },
  { name: "Tasmania", value: 250 },
  { name: "Parth", value: 600 },
  { name: "Adelaide", value: 150 },
];

export const Dashboard = () => {

  const {adminList} = useSelector((state) => state.adminInfo)
  const {categoryList} = useSelector((state) => state.categoryInfo)
  const {products} = useSelector((state) => state.productInfo)
  console.log("From Dashboard: ",adminList, categoryList)

  const [ activeIndex, setActiveIndex] = useState(0)
  const onPieEnter = useCallback(
    (_, index) =>{
      setActiveIndex(index)
    }, [setActiveIndex]
  )

  return (
    <AdminLayout title="Dashboard">
      <main className="gap-2 d-grid">
        <div className="topGraphInfo d-flex gap-3">
          <div className="border shadow-lg p-3 rounded">
            <p>{adminList.length} Admin found</p>
          </div>
          <div className="border shadow-lg p-3 rounded">
            <p>{products.length} Product found</p>
          </div>
          <div className="border shadow-lg p-3 rounded">
            <p>{categoryList.length} Category found</p>
          </div>
        </div>
        <div className="mainGraphInfo">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={ <RenderActiveShape />}
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
          </Pie>
        </PieChart>
        </div>
      </main>
    </AdminLayout>
  );
}
