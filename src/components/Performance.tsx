import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PriceRangeSlider } from "@/components/Price-range-slider"

const navigationItems = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics"
]

const fundamentals = [
  { label: "Bitcoin Price", value: "$16,815.46" },
  { label: "Market Cap", value: "$323,507,290,047" },
  { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
  { label: "Market Cap Dominance", value: "38.343%" },
  { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
  { label: "Volume / Market Cap", value: "0.0718" },
  { label: "Trading Volume", value: "$23,249,202,782" },
  { 
    label: "All-Time High", 
    value: "$69,044.77", 
    change: "-75.6%",
    date: "Nov 10, 2021 (about 1 year)" 
  },
  { label: "Market Cap Rank", value: "#1" },
  { 
    label: "All-Time Low", 
    value: "$67.81", 
    change: "24729.1%",
    date: "Jul 06, 2013 (over 9 years)" 
  }
]
const Performance = () => {
  return (
    <div>
        <div className="overflow-x-auto -mx-6 md:overflow-visible md:px-0 flex justify-start ml-5">
          <Tabs defaultValue="Overview" className="mb-8">
            <TabsList className="h-12 w-max md:w-full justify-start bg-transparent border-b rounded-none p-0">
              {navigationItems.map((item) => (
                <TabsTrigger
                  key={item}
                  value={item}
                  className="h-12 px-4 md:px-6 whitespace-nowrap data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-500 rounded-none"
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      <div className="bg-white rounded-lg p-6 mx-5">
        {/* Scrollable Tabs Container */}

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Performance</h2>
          
          <div className="space-y-8">
            <div className="flex flex-row gap-2">
              <PriceRangeSlider
                low={46930.22}
                high={49343.83}
                current={48637.83}
                lowLabel="Today's Low"
                highLabel="Today's High"
              />
            </div>

            <div className="flex flex-row gap-2">
              {/* <div className="flex justify-between">
                <span className="text-sm text-gray-500">52W Low</span>
                <span className="text-sm text-gray-500">52W High</span>
              </div> */}
              <PriceRangeSlider
                low={16930.22}
                high={49743.83}
                current={48637.83}
                lowLabel="52W Low"
                highLabel="52W High"
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              Fundamentals
              <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">i</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-x-10">
              {fundamentals.map((item) => (
                <div key={item.label} className="flex justify-between py-4 border-b border-gray-200">
                  <span className="text-gray-500">{item.label}</span>
                  <div className="text-right">
                    <div className="font-medium">
                      {item.value}
                      {item.change && (
                        <span className={`ml-2 ${item.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                          {item.change}
                        </span>
                      )}
                    </div>
                    {item.date && (
                      <div className="text-xs text-gray-500">{item.date}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance