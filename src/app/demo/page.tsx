// app/trading-dashboard/page.tsx
'use client';

import TradingViewChart from '@/components/xold/TradingViewChart/TradingViewChart';
import MarketOverview from '@/components/xold/MarketOverView/MarketOverview';

export default function TradingDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Trading Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Advanced Chart Widget */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-3">AAPL Stock Chart</h2>
          <TradingViewChart
            symbol="NASDAQ:AAPL"
            height="400px"
            studies={["RSI@tv-basicstudies"]}
            container_id="apple_chart"
          />
        </div>

        {/* Another Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-3">Bitcoin Chart</h2>
          <TradingViewChart
            symbol="BINANCE:BTCUSDT"
            theme="dark"
            height="400px"
            interval="60"
            studies={["MACD@tv-basicstudies"]}
            container_id="btc_chart"
          />
        </div>
      </div>

      {/* Market Overview */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-3">Market Overview</h2>
        <MarketOverview
          height="400px"
          colorTheme="light"
          dateRange="12M"
          tabs={[
            {
              title: "Indices",
              symbols: [
                { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
                { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
                { s: "FOREXCOM:DJI", d: "Dow 30" },
                { s: "INDEX:NKY", d: "Nikkei 225" }
              ]
            },
            {
              title: "Crypto",
              symbols: [
                { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
                { s: "BINANCE:ETHUSDT", d: "Ethereum" },
                { s: "BINANCE:BNBUSDT", d: "Binance Coin" },
                { s: "BINANCE:SOLUSDT", d: "Solana" }
              ]
            }
          ]}
        />
      </div>
    </div>
  );
}