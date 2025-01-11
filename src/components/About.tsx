import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const About = () => {
  const bitcoinData = {
    price: 16951.82,
    volume24h: 19.14,
    change24h: 0.36,
    sevenDayHigh: 18366.66,
    sevenDayLow: 16394.75,
    circulatingSupply: 19.24,
    maxSupply: 21
  };

  return (
    <div className="bg-white rounded-lg mx-5 p-6 space-y-8 bg-white rounded-md">
      {/* About Bitcoin Section */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">About Bitcoin</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">What is Bitcoin?</h2>
            <p className="text-gray-700">
              Bitcoin's price today is US${bitcoinData.price.toLocaleString()}, with a 24-hour trading volume of ${bitcoinData.volume24h} B. 
              BTC is +{bitcoinData.change24h}% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of ${bitcoinData.sevenDayHigh.toLocaleString()}, 
              and 3.40% from its 7-day all-time low of ${bitcoinData.sevenDayLow.toLocaleString()}. BTC has a circulating supply of {bitcoinData.circulatingSupply} M BTC 
              and a max supply of {bitcoinData.maxSupply} M BTC.
            </p>
          </section>

        <div className='border border-gray-300 h-[0.5px]'></div>


          <section>
            <h2 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit amet</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus 
                urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque 
                fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. 
                Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
              </p>
              <p>
                Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. 
                Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus 
                enim dui. Turpis tristique placerat interdum sed volutpat.
              </p>
              <p>
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing 
                semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames 
                amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>
          </section>
        </div>

        <div className='border border-gray-300 h-[0.5px]'></div>

        {/* Already Holding Bitcoin Section */}
        <section className="space-y-6">
        <h2 className="text-2xl font-bold">Already Holding Bitcoin?</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Calculate Profits Card */}
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-emerald-200 via-teal-400 to-cyan-500">
          <div className="p-6 flex items-center gap-6">
            <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/About1.svg"
                alt="Investment graph"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Calculate your Profits</h3>
              <button className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors">
                Check Now <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Calculate Tax Liability Card */}
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-orange-300 via-red-400 to-rose-500">
          <div className="p-6 flex items-center gap-6">
            <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/About2.svg"
                alt="Tax calculator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Calculate your tax liability</h3>
              <button className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors">
                Check Now <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='border border-gray-300 h-[0.5px]'></div>


          <p className="text-gray-700">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing 
            semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames 
            amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;