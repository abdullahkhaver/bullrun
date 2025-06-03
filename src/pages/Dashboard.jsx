import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [bullrunPrice, setBullrunPrice] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);
  const [solPrice, setSolPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using CoinGecko's free API (no API key needed)
        const [ethRes, solRes, marketRes] = await Promise.all([
          axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true'),
          axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true'),
          axios.get('https://api.coingecko.com/api/v3/global')
        ]);

        // For BullRun, we'll mock data since it's not on CoinGecko
        const mockBullrunPrice = (Math.random() * 0.01 + 0.0005).toFixed(6);
        const mockBullrunChange = (Math.random() * 20 - 5).toFixed(2);

        setBullrunPrice({
          priceUsd: mockBullrunPrice,
          priceChange: { h24: mockBullrunChange }
        });
        
        setEthPrice({
          priceUsd: ethRes.data.ethereum.usd,
          priceChange: { h24: ethRes.data.ethereum.usd_24h_change }
        });
        
        setSolPrice({
          priceUsd: solRes.data.solana.usd,
          priceChange: { h24: solRes.data.solana.usd_24h_change }
        });

        setMarketData(marketRes.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>BullRun Dashboard</h1>
        <p className="dashboard-subtitle">Live market data and analytics</p>
      </header>

      <section className="price-cards-section">
        <h2 className="section-title">Live Prices</h2>
        <div className="price-cards-grid">
          <div className="price-card bullrun-card">
            <div className="price-card-header">
              <span className="token-icon">$BULL</span>
              <span className="token-name">BullRun</span>
            </div>
            <div className="price-card-content">
              {loading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>
                  <span className="token-price">${bullrunPrice ? bullrunPrice.priceUsd : '0.000000'}</span>
                  <span className={`price-change ${bullrunPrice && bullrunPrice.priceChange.h24 >= 0 ? 'positive' : 'negative'}`}>
                    {bullrunPrice ? `${bullrunPrice.priceChange.h24}%` : '0.00%'}
                  </span>
                </>
              )}
            </div>
            <div className="price-card-footer">
              <span className="token-tag">New Listing</span>
            </div>
          </div>

          <div className="price-card">
            <div className="price-card-header">
              <span className="token-icon">$ETH</span>
              <span className="token-name">Ethereum</span>
            </div>
            <div className="price-card-content">
              {loading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>
                  <span className="token-price">${ethPrice ? ethPrice.priceUsd.toLocaleString() : '0.00'}</span>
                  <span className={`price-change ${ethPrice && ethPrice.priceChange.h24 >= 0 ? 'positive' : 'negative'}`}>
                    {ethPrice ? `${ethPrice.priceChange.h24.toFixed(2)}%` : '0.00%'}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="price-card">
            <div className="price-card-header">
              <span className="token-icon">$SOL</span>
              <span className="token-name">Solana</span>
            </div>
            <div className="price-card-content">
              {loading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>
                  <span className="token-price">${solPrice ? solPrice.priceUsd.toLocaleString() : '0.00'}</span>
                  <span className={`price-change ${solPrice && solPrice.priceChange.h24 >= 0 ? 'positive' : 'negative'}`}>
                    {solPrice ? `${solPrice.priceChange.h24.toFixed(2)}%` : '0.00%'}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section">
        <h2 className="section-title">Market Overview</h2>
        <div className="summary-cards-grid">
          <div className="summary-card">
            <h3>Total Market Cap</h3>
            <p className="summary-value">
              {loading ? '--' : `$${marketData?.total_market_cap.usd.toLocaleString()}`}
            </p>
            <p className="summary-label">Across all cryptocurrencies</p>
          </div>

          <div className="summary-card">
            <h3>24h Volume</h3>
            <p className="summary-value">
              {loading ? '--' : `$${marketData?.total_volume.usd.toLocaleString()}`}
            </p>
            <p className="summary-label">Total trading volume</p>
          </div>

          <div className="summary-card">
            <h3>Market Sentiment</h3>
            <p className="summary-value">
              {loading ? '--' : (
                <span className={marketData?.market_cap_change_percentage_24h_usd >= 0 ? 'positive' : 'negative'}>
                  {marketData?.market_cap_change_percentage_24h_usd.toFixed(2)}%
                </span>
              )}
            </p>
            <p className="summary-label">24h change</p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2 className="section-title">Latest News</h2>
        <div className="news-card">
          <h3>Bitcoin Halving Event Coming Soon</h3>
          <p className="news-excerpt">The next Bitcoin halving is expected in April 2024, which historically has led to bull markets.</p>
          <div className="news-meta">
            <span className="news-date">Today</span>
            <span className="news-source">CryptoNews</span>
          </div>
        </div>
        <div className="news-card">
          <h3>Ethereum Network Upgrades Continue</h3>
          <p className="news-excerpt">The Ethereum development team has announced further optimizations to reduce gas fees.</p>
          <div className="news-meta">
            <span className="news-date">Yesterday</span>
            <span className="news-source">Blockchain Daily</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;