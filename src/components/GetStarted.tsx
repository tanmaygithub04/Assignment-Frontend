import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const GetStarted = () => {
  return (
    <div 
      style={{ backgroundColor: "#0052FE" }} 
      className="text-white rounded-[20px] p-4 md:p-6 text-center shadow-lg w-full"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
        Get Started with KoinX <br />
        <span className="text-white">for FREE</span>
      </h2>

      <p className="text-white text-sm mb-6 max-w-[280px] mx-auto">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <div className="flex justify-center mb-6">
        <img
          src="/sample.png"
          alt="Illustration of tax reports"
          className="h-28 md:h-32 lg:h-40 w-auto"
        />
      </div>

      <button
        className="bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-gray-100 flex items-center justify-center mx-auto"
        type="button"
      >
        Get Started for FREE
        <span className='ml-3'><FaArrowRight/></span>
        
      </button>
    </div>
  )
}

export default GetStarted

