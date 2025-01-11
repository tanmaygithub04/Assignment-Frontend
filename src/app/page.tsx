"use client"
import About from '../components/About'
import Breadcrums from '../components/Breadcrums'
import Graph from '../components/Graph'
import Navbar from '../components/Navbar'
import Performance from '../components/Performance'
import Sentiment from '../components/Sentiment'
import Sidebar from '../components/Sidebar'
import Takenomics from '../components/Takenomics'
import Team from '../components/Team'
import YouMayAlsoLike from '../components/YouMayAlsoLike'

import React, { useEffect, useState } from 'react'

const Page = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrums/>
      <div className="bg-gray-200 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 flex flex-col gap-5">
                <Graph />
                <Performance />
                <Sentiment />
                <About />
                {!isMobile && <Takenomics />}
                <Team />
              </div>
              <div className="lg:w-[380px] order-2 lg:order-none lg:sticky lg:top-6 h-fit hidden lg:block mt-3">
                <Sidebar />
              </div>
            </div>
            <YouMayAlsoLike />
            {/* Mobile Sidebar */}
            <div className="lg:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page