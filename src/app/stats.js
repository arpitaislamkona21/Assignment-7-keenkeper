"use client";
import { PieChart, Pie, Cell } from "recharts";
import Navbar from "../components/Navbar";

const data = [
  { name: "Call", value: 4 },
  { name: "Text", value: 3 },
  { name: "Video", value: 2 }
];

export default function Stats() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl p-4">Friendship Analytics</h1>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          {data.map((_, i) => (
            <Cell key={i} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}