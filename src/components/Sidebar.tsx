import React from 'react'
import GetStarted from './GetStarted'
import TrendingCoins from './TrendingCoins'

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full max-w-[380px] mx-auto lg:max-w-none">
      <GetStarted/>
      <TrendingCoins/>
    </div>
  )
}

export default Sidebar

