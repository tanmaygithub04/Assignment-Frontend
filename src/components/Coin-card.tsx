"use client"

import { LineChart, Line, ResponsiveContainer } from "recharts"

interface CoinCardProps {
  name: string
  symbol: string
  price: number
  change: number
  chartData: { value: number }[]
  icon: string
}

export function CoinCard({ name, symbol, price, change, chartData, icon }: CoinCardProps) {
  const isPositive = change >= 0
  const changeColor = isPositive ? "text-green-500" : "text-red-500"
  const changeSign = isPositive ? "+" : ""

  // Conditional background color based on change
  const backgroundColor = isPositive ? "#0AB27D0F" : "#EE68551A"

  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm border w-full">
      <div className="flex items-center gap-2 mb-2">
        <img src={icon} alt={name} className="w-6 h-6" />
        <span className="font-medium">{symbol}</span>
        <span className={`text-sm ${changeColor} p-1 rounded-md`} style={{ backgroundColor }}>
          {changeSign}{change.toFixed(2)}%
        </span>
      </div>
      <div className="text-xl font-semibold mb-2">
        ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
      </div>
      <div className="h-[60px] w-full">
        <ResponsiveContainer width="100%" height={60}>
          <LineChart data={chartData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={isPositive ? "#22C55E" : "#EF4444"} 
              strokeWidth={1.5} 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}