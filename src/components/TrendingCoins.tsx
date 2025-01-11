"use client"

import React, { useEffect, useState } from "react";

interface Coin {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
}

const TrendingCoins: React.FC = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
                if (!response.ok) {
                    throw new Error("Failed to fetch trending coins.");
                }
                const data = await response.json();
                const topCoins = data.coins.slice(0, 3).map((coin: any) => ({
                    id: coin.item.id,
                    name: coin.item.name,
                    symbol: coin.item.symbol,
                    market_cap_rank: coin.item.market_cap_rank,
                    thumb: coin.item.thumb,
                }));
                setCoins(topCoins);
                setLoading(false);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setLoading(false);
            }
        };

        fetchTrendingCoins();
    }, []);

    if (loading) {
        return <div className="p-6 text-center">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 text-center text-red-600">{error}</div>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
            <h2 className="text-lg font-semibold mb-4">Trending Coins (24h)</h2>
            <ul>
                {coins.map((coin) => (
                    <li
                        key={coin.id}
                        className="flex items-center justify-between mb-3 last:mb-0"
                    >
                        <div className="flex items-center">
                            <img
                                src={coin.thumb}
                                alt={coin.name}
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="ml-3 font-medium">
                                {coin.name} ({coin.symbol.toUpperCase()})
                            </span>
                        </div>
                        <div
                            style={{ backgroundColor: "#EBF9F4" }}
                            className="rounded-lg p-1 px-2"
                        >
                            <span className="text-green-600 font-semibold">
                                #{coin.market_cap_rank}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingCoins;