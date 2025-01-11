"use client"

import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CoinCard } from "@/components/Coin-card"

interface Coin {
  name: string
  symbol: string
  price: number
  change: number
  icon: string
  chartData: { value: number }[]
}

export default function YouMayAlsoLike() {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending")
        if (!response.ok) {
          throw new Error("Failed to fetch trending coins.")
        }

        const data = await response.json()

        const coins = data.coins.map((coin: any) => ({
          name: coin.item.name,
          symbol: coin.item.symbol,
          price: Number(coin.item.data?.price?.replace('$', '') || '0'),
          change: coin.item.data?.price_change_percentage_24h?.usd || 0,
          icon: coin.item.thumb,
          chartData: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 })),
        }))

        setTrendingCoins(coins)
        setLoading(false)
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    }

    fetchTrendingCoins()
  }, [])

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">{error}</div>
  }

  return (
    <div className="w-[100vw] px-4 md:px-6 lg:px-12 py-8 bg-white md:ml-[-40px]">
      <section className="max-w-[1440px] mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">You May Also Like</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {trendingCoins.map((coin) => (
              <CarouselItem key={coin.symbol} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <CoinCard {...coin} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-4 lg:-left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14" />
            <CarouselNext className="absolute -right-4 lg:-right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14" />
          </div>
        </Carousel>
      </section>
      <section className="max-w-[1440px] mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Trending Coins</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {trendingCoins.map((coin) => (
              <CarouselItem key={coin.symbol} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <CoinCard {...coin} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-4 lg:-left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14" />
            <CarouselNext className="absolute -right-4 lg:-right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14" />
          </div>
        </Carousel>
      </section>
    </div>
  )
}