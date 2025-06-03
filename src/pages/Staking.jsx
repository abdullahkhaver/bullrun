import React from 'react';
import './Staking.css';

const Staking = () => {
  return (
    <>
      <div className="staking-page">
        {/* Header Card - You mentioned keeping this as is */}
        <div className="staking-header-card">
          <h1>BullRun Staking</h1>
          <p>Stake your $BULL tokens and earn passive rewards. Choose from multiple lock periods and enjoy high APYs!</p>
        </div>

        {/* Updated Cards Container */}
        <div className="staking-cards-container">
          {/* Card 1 - Total Staked */}
          <div className="staking-card">
            <div className="card-header">
              <h3>Total Staked</h3>
            </div>
            <div className="card-body">
              <div className="card-row">
                <span>4545454 $BRL</span>
              </div>
              <div className="card-row">
                <span>34254 NFT</span>
              </div>
              <div className="card-row">
                <span>$12434343</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Pending Rewards */}
          <div className="staking-card featured">
            <div className="card-header">
              <h3>Pending Rewards</h3>
            </div>
            <div className="card-body">
              <div className="card-row">
                <span>345324 $USDC</span>
              </div>
              <div className="card-row">
                <span className="apy-badge">Projected APR 45.669%</span>
              </div>
            </div>
          </div>

          {/* Card 3 - BRL Staking */}
          <div className="staking-card">
            <div className="card-header">
              <h3>BRL Staking</h3>
            </div>
            <div className="card-body">
              <div className="card-row">
                <span>BRL 0.566</span>
              </div>
              <div className="card-row">
                <span>0.681$ $USDC</span>
              </div>
              <div className="card-row">
                <span>2.67 STAKED:</span>
              </div>
              <div className="card-row">
                <span>BRL 998 $45668</span>
              </div>
            </div>
          </div>
        </div>

        {/* Boost Your Staking Card */}
        <div className="staking-card boost-card">
          <div className="card-header">
            <h3>Boost Your Staking</h3>
          </div>
          <div className="card-body">
            <div className="card-row">
              <span>Wallet Balance: 0</span>
            </div>
            <div className="card-row">
              <span>NFTs Staked: 0NFTs</span>
            </div>
            <div className="progress-circle-container">
  <div className="progress-circle">
    <div className="circle-background"></div>
    <div 
      className="circle-progress"
      style={{ transform: `rotate(${0.3 * 360}deg)` }}
    ></div>
    <div className="circle-overlay">
      <span>70%</span>
    </div>
  </div>
  <div className="progress-label">USDC Distribution</div>
</div>
          </div>
        </div>

        {/* Stake/Unstake Input */}
        <div className="staking-input-card">
          <div className="input-container">
            <input type="text" placeholder="0" />
            <button className="max-button">Max</button>
          </div>
          <div className="action-buttons">
            <button className="stake-button">Stake</button>
            <button className="unstake-button">Unstake</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Staking;