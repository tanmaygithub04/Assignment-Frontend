"use client"

import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { name: "Crowdsale investors", value: 80 },
  { name: "Foundation", value: 20 }
]

const COLORS = ["#4285F4", "#F4B400"]

export default function DonutChart() {
  return (
    <ChartContainer
      config={{
        crowdsale: {
          label: "Crowdsale investors: 80%",
          color: COLORS[0],
        },
        foundation: {
          label: "Foundation: 20%",
          color: COLORS[1],
        },
      }}
      className="w-[200px] h-[200px]" // Reduced size
    >
      <PieChart>
        <Pie
          data={data}
          innerRadius={50} // Reduced inner radius
          outerRadius={80} // Reduced outer radius
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index]} 
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}