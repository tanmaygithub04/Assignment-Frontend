"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Newspaper, TrendingUp, Info } from 'lucide-react';

// Sample data for key events
const keyEventsData = [
  {
    id: 1,
    icon: 'news',
    title: 'Market News Update',
    description: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    content: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia liber',
    type: 'news'
  },
  {
    id: 2,
    icon: 'trend',
    title: 'Market Trend Analysis',
    description: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    content: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del. sollicitudin.quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia liber',
    type: 'trend'
  },
  {
    id: 3,
    icon: 'news',
    title: 'Economic Update',
    description: 'Latest economic indicators and market impact analysis.',
    content: 'Detailed analysis of current economic indicators showing positive momentum in key sectors. Market participants are responding favorably to recent policy decisions. The latest data suggests a robust recovery in manufacturing output, while consumer confidence indices continue to exceed expectations. Analysts project sustained growth through the next quarter, supported by accommodative monetary policy.quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia liber',
    type: 'news'
  }
];

const estimates = [
  { label: 'Buy', percentage: 76, color: 'bg-green-500' },
  { label: 'Hold', percentage: 8, color: 'bg-gray-400' },
  { label: 'Sell', percentage: 16, color: 'bg-red-500' }
];

interface IconProps {
  type: string;
}

const getIcon = ({ type }: IconProps) => {
  switch (type) {
    case 'news':
      return <Newspaper className="w-8 h-8 text-blue-500" />;
    case 'trend':
      return <TrendingUp className="w-8 h-8 text-green-500" />;
    default:
      return <Info className="w-8 h-8 text-gray-500" />;
  }
};
const KeyEventCard = ({ event }: { event: typeof keyEventsData[0] }) => {
  return (
    <div className="w-full h-[180px]">
      <div className={`rounded-lg p-5 h-full ${event.type === 'news' ? 'bg-blue-50/50' : 'bg-green-50/50'
        }`}>
        <div className="flex gap-2.5 h-full">
          <div className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${event.type === 'news' ? 'bg-blue-100' : 'bg-green-100'
            }`}>
            {event.type === 'news' ? (
              <Newspaper className="w-5 h-5 text-blue-700" />
            ) : (
              <TrendingUp className="w-5 h-5 text-green-700" />
            )}
          </div>
          <div className="space-y-1 overflow-hidden">
            <h3 className="font-semibold text-base">{event.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-5">{event.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Sentiment = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % keyEventsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + keyEventsData.length) % keyEventsData.length);
  };

  return (
    <div className="bg-white rounded-lg p-6 mx-5">
      <h1 className="text-2xl font-bold mb-5">Sentiment</h1>

      {/* Key Events Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg text-gray-700">Key Events</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute -left-2 z-10 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 85}%)` }}
              >
                {keyEventsData.map((event, index) => (
                  <div
                    key={event.id}
                    className="w-[85%] flex-shrink-0 pr-4"
                  >
                    <KeyEventCard event={event} />
                  </div>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="absolute -right-2 z-10 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-4">
            {keyEventsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-xl text-gray-700 font-semibold">Analyst Estimates</h2>
          <Info className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex items-center gap-8">
          {/* Circular Percentage Display */}
          <div className="relative w-24 h-24 flex items-center justify-center bg-green-50 rounded-full">
            <span className="text-4xl font-bold text-green-500">76<span className="text-3xl">%</span></span>
          </div>

          {/* Progress Bars */}
          <div className="flex-1 space-y-4">
            {estimates.map(({ label, percentage, color }) => (
              <div key={label} className="flex items-center">
                {/* Label */}
                <span className="text-gray-600 mr-2">{label}</span>

                {/* Progress Bar */}
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${color} rounded-full transition-all duration-500 `}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {/* Percentage */}
                <span className="w-10 text-gray-600 text-right ml-2">{percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sentiment;

