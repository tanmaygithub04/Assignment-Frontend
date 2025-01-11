"use client"

import { useEffect, useState } from 'react';
import TradingViewWidget from './TradingViewWidget'; 

const Graph = () => {
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the Bitcoin price data from Coingecko API using fetch
  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true');
        const data = await response.json();
        setPriceData(data.bitcoin);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching price data:', error);
        setLoading(false);
      }
    };

    fetchPriceData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg  mx-5 p-6 mt-3">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center">
          <span className="text-white text-2xl">₿</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Bitcoin</h1>
          <span className="text-gray-500">BTC</span>
          <span className="ml-5 px-3 py-2 bg-gray-500 text-white rounded-lg text-bold">
            Rank #1
          </span>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-8">
        <div className="flex items-baseline gap-4">
          <h2 className="text-3xl font-bold">${Number(priceData?.usd).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
          <span className={`px-2 py-1 rounded-md text-sm ${priceData?.usd_24h_change > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {priceData?.usd_24h_change > 0 ? '▲' : '▼'} {Math.abs(priceData?.usd_24h_change).toFixed(2)}% 
          </span> <span className='text-gray-500'>(24H)</span> 
        </div>
        <p className="text-gray-600 mt-1">
          ₹ {Number(priceData?.inr).toLocaleString('en-IN')}
        </p>
      </div>

      {/* TradingView Widget */}
      <div className="mt-8 bg-white">
        <h2 className='text-bold'>Bitcoin Price Chart (USD)</h2>
        <TradingViewWidget /> {/* Use TradingViewWidget here */}
      </div>
    </div>
  );
};

export default Graph;