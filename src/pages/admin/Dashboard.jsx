// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import TableDash from "../../components/admin/TableDash";
import useEcomStore from "../../store/ecom-store";
import { getOrdersAdmin } from "../../api/admin";

// const barData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
// ];

const pieData = [
  { name: "Product A", value: 40 },
  { name: "Product B", value: 30 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 10 },
  { name: "Product D", value: 10 },
  { name: "Product D", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const token = useEcomStore((state) => state.token);
  const [barData, setBarData] = useState([{}]);

  useEffect(() => {
    // code body
    handleGetOrder(token);
  }, []);

  // แยกเดือนและรวมยอดขายแต่ละเดือน
  const processOrdersByMonth = (orders) => {
    const monthlySales = orders.reduce((acc, order) => {
      const month = new Date(order.createdAt).toLocaleString("en-US", {
        month: "short",
      });

      if (!acc[month]) {
        acc[month] = 0;
      }

      acc[month] += order.cartTotal;
      return acc;
    }, {});

    return Object.keys(monthlySales).map((month) => ({
      name: month,
      sales: monthlySales[month],
    }));
  };

  const handleGetOrder = (token) => {
    getOrdersAdmin(token)
      .then((res) => {
        const updatedBarData = processOrdersByMonth(res.data);
        // console.log(updatedBarData);
        setBarData(updatedBarData); // แสดงข้อมูลที่จัดกลุ่มแล้ว
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex mt-10">
        {/* Pie Chart */}
        <div style={{ width: "100%", height: 300 }}>
          <h2>Product Sales Distribution</h2>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={{ width: "100%", height: 300 }}>
          <h2>ข้อมูลการขาย</h2>
          <ResponsiveContainer width="80%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-20">
        <TableDash />
      </div>
    </>
  );
};

export default Dashboard;
