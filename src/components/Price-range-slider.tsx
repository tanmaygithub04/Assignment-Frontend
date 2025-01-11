"use client"

interface PriceRangeSliderProps {
  low: number
  high: number
  current: number
  className?: string
  lowLabel?: string
  highLabel?: string
}

export function PriceRangeSlider({ 
  low, 
  high, 
  current, 
  className,
  lowLabel = "Today's Low",
  highLabel = "Today's High"
}: PriceRangeSliderProps) {
  const percentage = ((current - low) / (high - low)) * 50

  return (
    <div className={`w-full ${className}`}>
      <div className="relative h-[68px]">
        {/* Labels */}
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-500">{lowLabel}</span>
          <span className="text-sm text-gray-500">{highLabel}</span>
        </div>

        {/* Values */}
        <div className="flex justify-between mb-2">
          <span className="text-sm">${low.toLocaleString()}</span>
          <span className="text-sm">${high.toLocaleString()}</span>
        </div>

        {/* Gradient bar */}
        <div className="relative h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
          {/* Current value pointer */}
          <div 
            className="absolute -top-3 transform -translate-x-1/2"
            style={{ left: `${percentage}%` }}
          >
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black mx-auto" />
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap mt-2">
              <span className="text-sm font-medium">${current.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}