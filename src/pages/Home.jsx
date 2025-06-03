import {Link} from 'react-router-dom';
import './Home.css';
import { FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';
import { FaDownload, FaWallet, FaExchangeAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { FaCoins, FaPercentage, FaLockOpen, FaChartLine } from 'react-icons/fa';
import { FaCheck, FaTimes, FaShieldAlt, FaLock, FaUsers, FaFire ,FaChevronRight,FaExclamationTriangle} from 'react-icons/fa';
import {  FaBurn } from 'react-icons/fa';
import stakingImage from '../assets/staking-booster.jpeg';
import socialImage from '../assets/social-network.jpeg';
import heroImg from '../assets/home-banner.jpg';
import aboutImage from '../assets/about-bullrun.jpeg';
import missionImage from '../assets/mission-image.jpeg';
import educationImage from '../assets/education-image.jpeg';
import securityImage from '../assets/security-image.jpeg';

const ParticlesBackground = () => {
  return (
    <div className="particles">
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const BULLRUN_TOKEN_ADDRESS = "0x6291d951c5d68f47eD346042E2f86A94c253Bec4";
  const UNISWAP_LINK = `https://app.uniswap.org/swap?outputCurrency=${BULLRUN_TOKEN_ADDRESS}`;
  const tokenAddress = "0x6291d951c5d68f47eD346042E2f86A94c253Bec4";

  return (
    <div className="home-container">
      <div className="home-hero">
        <img 
          src={heroImg} 
          alt="Bullrun Hero" 
          className="hero-img"
          onError={(e) => {
            e.target.style.display = 'none';
            console.error('Failed to load hero image');
          }}
        />
        <ParticlesBackground />
        <div className="hero-overlay">
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
          <div className="hero-content">
            <h1>Welcome to BullRun</h1>
            <h2>HOME OF THE BULLDOZERS</h2>
            <h3>BULLRUN A HYPER-DEFLATIONARY TOKEN</h3>
            <p>BULLRUN – THE KING OF LIQUIDITY</p>
            <Link to="/dashboard">
            <button className="cta-button">JOIN THE REVOLUTION</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2>ABOUT BULLRUN</h2>
          <p>
            Bullrun is a utility driven token and ecosystem that specifically focuses on addressing 
            four major challenges within the blockchain industry.
          </p>
          <p>
            We took a solution based approach as we developed the Bullrun Ecosystem.
          </p>
          <p>
            Our Four Pillars of Solutions are <span className="highlight">Liquidity</span>, <span className="highlight">Education</span>, 
            <span className="highlight">Security</span>, and <span className="highlight">Social Network</span>.
          </p>
          <p>
            There are many challenges, but also opportunities within blockchain technology. 
            Those who will come up with effective and proven solutions will benefit the most 
            and stand strong as market leaders.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="BullRun Ecosystem" />
        </div>
      </div>

      <div className="mission-section reversed">
        <div className="mission-image">
          <img src={missionImage} alt="BullRun Mission" />
        </div>
        <div className="mission-content">
          <h2>THE MISSION & PURPOSE</h2>
          <p className="mission-statement">
            ONE community with a purpose, sustainable utility from day one and a mission to accumulate the deepest liquidity pool for its holders.
          </p>
          <p className="highlighted">
            WE BRING AWARENESS TO THE IMPORTANCE OF LIQUIDITY AND SUSTAINABLE FUNDAMENTALS.
          </p>
          <p>
            This is our claim to fame that will forever change how the world views crypto again! A mission to accumulate the deepest liquidity pool for its holders.
          </p>
          <p className="liquidity-focus">
            <span className="bullrun-text">BULLRUN</span> aims to be the most <span className="highlight">LIQUID UTILITY TOKEN</span>. It has built-in mechanisms within its ecosystem to retain liquidity. It is time for <span className="bullrun-text">BULLRUN</span> to reign supreme, as the undisputed <span className="highlight">LIQUIDITY KING</span>.
          </p>
        </div>
      </div>

      <div className="liquidity-king-section">
        <div className="liquidity-content">
          <h2 className="liquidity-title">LIQUIDITY KING</h2>
          <div className="liquidity-statements">
            <p>
              Liquidity is a scarce commodity to come by these days. It is the bloodline for an ecosystem to be sustainable and for traders to enter and exit their positions.
            </p>
            <p className="highlight-box">
              The HODLers enjoy <span className="usdc">USDC distributions</span>, which come from the trade volume. A win-win for everyone!
            </p>
            <p className="strong-statement">
              BULLRUN's ecosystem is built with the community's best interest in mind. It's time that an ecosystem works for <span className="you">you</span> and not against you.
            </p>
          </div>
        </div>
      </div>

      <div className="liquidity-mechanics-section">
        <div className="liquidity-header">
          <h2 className="bullrun-logo">BULLRUN</h2>
          <h3 className="liquidity-subtitle">LIQUIDITY</h3>
        </div>
        
        <div className="liquidity-content">
          <p className="attention-grabber">
            Tired of being the Exit liquidity? <span className="good">Good!</span>
          </p>
          
          <p className="intro">
            The BULLRUN ecosystem does the work for you to accumulate and retain the exit liquidity with every trade.
          </p>
          
          <div className="mechanisms">
            <div className="mechanism">
              <span className="mechanism-number">1</span>
              <p>Burning BRL tokens removes them from the total supply.</p>
            </div>
            <div className="mechanism">
              <span className="mechanism-number">2</span>
              <p>USDC distributions to Staking participants.</p>
            </div>
            <div className="mechanism">
              <span className="mechanism-number">3</span>
              <p>Retention of liquidity with every trade</p>
            </div>
          </div>
          
          <div className="bulldozer-declaration">
            <p className="declaration-line">WE ARE THE BULLDOZERS!</p>
            <p className="declaration-line">WE TRIGGER OUR OWN BULLRUN AT WILL!</p>
          </div>
          
          <p className="liquidity-explanation">
            Liquidity is the engine behind any ecosystem and is the element that dictates boom and bust cycles or better known as bull markets or bear markets.
          </p>
          
          <p className="conclusion">
            We have developed an ecosystem that organically retains and sustains liquidity in a way that is scalable and self-sufficient.
          </p>
        </div>
      </div>

      <div className="education-section">
        <div className="education-image-wrapper">
          <img 
            src={educationImage} 
            alt="BullRun Education Community" 
            className="education-visual"
          />
        </div>
        
        <div className="education-content-wrapper">
          <div className="education-header">
            <span className="section-pre-title">BULLRUN</span>
            <h2 className="section-main-title">EDUCATION</h2>
          </div>
          
          <h3 className="education-tagline">WE INFORM, EDUCATE & INSPIRE</h3>
          
          <div className="education-body">
            <p>
              In such a dynamic industry, education is paramount. It is the best way to introduce blockchain technology to the masses.
            </p>
            
            <div className="platform-highlight">
              We host three weekly community events on Telegram, Twitter, and YouTube.
            </div>
            
            <p>
              We aim to inform, educate, and inspire our community, as we believe that knowledge is the key to success. An educated community is a strong and informed community.
            </p>
          </div>
        </div>
      </div>
      <div className="security-section">
      <div className="security-content">
        <div className="security-header">
          <span className="section-pre-title">BULLRUN</span>
          <h2 className="section-main-title">SECURITY</h2>
        </div>
        
        <div className="security-body">
          <p>
            The crypto industry is still widely unregulated and thus, littered with bad actors.
          </p>
          
          <p className="highlight-box">
            Keeping in mind the fear of the rampant scams and rug pulls experienced in the industry, our solution is to develop and launch our own in-house community tokens.
          </p>
          
          <p>
            Two ways to succeed in this industry, are to get involved with a vibrant and active community and get in early on the token launches.
          </p>
          
          <p className="success-declaration">
            SUCCESS IS ALL WE KNOW!
          </p>
        </div>
      </div>
      
      <div className="security-image">
        <img src={securityImage} alt="BullRun Security Solutions" />
      </div>
    </div>
    <div className="social-section">
      <div className="social-content">
        <div className="social-header">
          <span className="section-pre-title">BULLRUN</span>
          <h2 className="section-main-title">SOCIAL NETWORK</h2>
        </div>
        
        <div className="social-body">
          <p>
            We freely give out our personal data to large centralized institutions and social media platforms, 
            which in turn monetize that in their best interest. We are strategically targeted by customized ads 
            that are eager to relieve us of our hard earned income.
          </p>
          
          <div className="social-highlight">
            <p>
              Whether you are a content creator, a community leader, a social media influencer, 
              or a positive individual who enjoys sharing and educating on their experiences, 
              join the movement.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="social-icon youtube">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="social-icon telegram">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
          
          <p className="community-call">
            THE GLOBAL DECENTRALIZED COMMUNITY
          </p>
        </div>
      </div>
      
      <div className="social-image">
        <img src={socialImage} alt="BullRun Social Network" />
      </div>
    </div>
    <div className="utilities-section">
      <div className="utilities-header">
        <span className="section-pre-title">BULLRUN</span>
        <h2 className="section-main-title">UTILITIES</h2>
      </div>

      <div className="utility-cards">
        {/* TRUE BURN */}
        <div className="utility-card">
          <div className="utility-icon burn-icon">🔥</div>
          <h3 className="utility-title">TRUE BURN</h3>
          <p className="utility-description">
            The True Burn feature burns tokens, with every buy and sell, from the total supply. Scarcity in token supply causes hyper deflation.
          </p>
        </div>

        {/* BULLDOZER */}
        <div className="utility-card">
          <div className="utility-icon dozer-icon">🚜</div>
          <h3 className="utility-title">BULLDOZER</h3>
          <p className="utility-description">
            BULLDOZER is a unique and effective feature that tackles liquidity and volume challenges. Its sole purpose is to generate organic trading volume, provide exit-liquidity and bring sustainability into the BULLRUN ecosystem.
          </p>
        </div>

        {/* BOOSTER NFT */}
        <div className="utility-card">
          <div className="utility-icon nft-icon">🖼️</div>
          <h3 className="utility-title">BULLRUN BOOSTER NFT</h3>
          <p className="utility-description">
            The BOOSTERS NFT also serve as scalable revenue, which are used to feed into the LIQUIDITY Pool, this enables BULLRUN to build and Sustain a Healthy Liquidity. Volume dictates the USDC distribution amounts.
          </p>
        </div>

        {/* DUAL STAKING */}
        <div className="utility-card wide-card">
          <div className="utility-icon stake-icon">💰</div>
          <h3 className="utility-title">DUAL STAKING</h3>
          <div className="utility-description">
            <p>
              BRL Dual Staking Platform allows you to stake both Tokens and your Booster NFT. By Staking only your BRL Tokens without the BULLRUN BOOSTERS NFT, you are limited to only 70% USDC distributions.
            </p>
            <p>
              However, with every additional BULLRUN NFT BOOSTER you receive 6% for up to a maximum of the five BOOSTERS in total.
            </p>
            <p className="highlight-point">
              By Staking five BOOSTERS you will unlock 100% USDC distributions from the total Staking Pool.
            </p>
            <p>
              STAKE your BRL Tokens and receive USDC distributions. These are based on the volume and are dynamic, depending on the market conditions.
            </p>
            <div className="benefits-box">
              <p>No staking or unstaking fees | No timelock period</p>
              <p>BULLRUN STAKING BOOSTER NFT's boost your distributions 6% each and you can stake a maximum of five</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="buy-section">
      <div className="buy-container">
        <div className="buy-header">
          <span className="section-pre-title">BULLRUN</span>
          <h2 className="section-main-title">HOW TO BUY BULLRUN</h2>
        </div>

        <div className="buy-steps">
          {/* Step 1 */}
          <div className="buy-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <div className="step-header">
                <FaDownload className="step-icon" />
                <h3 className="step-title">Get a Wallet</h3>
              </div>
              <div className="step-description">
                Download Metamask or your wallet of choice from the app store or Google Play store for free. 
                Desktop users, download the Google Chrome extension by going to <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">metamask.io</a>.
              </div>
              <div className="step-note">
                Make sure you have ETH in your wallet to swap to. If you don't have any ETH, you can buy directly 
                on Metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="buy-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <div className="step-header">
                <FaWallet className="step-icon" />
                <h3 className="step-title">Connect to Uniswap</h3>
              </div>
              <div className="step-description">
                Go to <a href="https://app.uniswap.org" target="_blank" rel="noopener noreferrer">app.uniswap.org</a> in 
                Google Chrome or on the browser inside your Metamask app. Connect your wallet.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="buy-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <div className="step-header">
                <FaExchangeAlt className="step-icon" />
                <h3 className="step-title">Paste Token Address</h3>
              </div>
              <div className="step-description">
                Paste the BULLRUN token address into Uniswap, select BULLRUN, and confirm. 
                When Metamask prompts you for a wallet signature, sign.
                <div className="token-address">
                  <code>{BULLRUN_TOKEN_ADDRESS}</code>
                  <button 
                    className="copy-address"
                    onClick={() => {
                      navigator.clipboard.writeText(BULLRUN_TOKEN_ADDRESS);
                      alert('Token address copied to clipboard!');
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="buy-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <div className="step-header">
                <FaCheckCircle className="step-icon" />
                <h3 className="step-title">Swap ETH for BULLRUN</h3>
              </div>
              <div className="step-description">
                Swap ETH for BULLRUN. We have 6% taxes, so be sure to place your slippage to 7%.
              </div>
              <div className="tax-notice">
                <span className="tax-badge">6% Tax</span>
                <span className="slippage-badge">7% Slippage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="buy-cta">
          <a 
            href={UNISWAP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="buy-button"
          >
            Buy BullRun Now <FaArrowRight className="button-icon" />
          </a>
        </div>
      </div>
    </div>
    <div className="staking-section">
      <div className="staking-container">
        <div className="staking-content">
          <div className="staking-header">
            <span className="section-pre-title">BULLRUN</span>
            <h2 className="section-main-title">STAKING BOOSTER NFT</h2>
          </div>

          <div className="staking-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaPercentage className="icon" />
              </div>
              <div className="feature-text">
                <h3>Base Staking (70%)</h3>
                <p>Staking only BRL Tokens without NFT gives you 70% of USDC distributions</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaCoins className="icon" />
              </div>
              <div className="feature-text">
                <h3>NFT Booster (6% each)</h3>
                <p>Each additional BOOSTER NFT increases your share by 6% (max 5 NFTs)</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaLockOpen className="icon" />
              </div>
              <div className="feature-text">
                <h3>Full Potential (100%)</h3>
                <p>Staking 5 BOOSTER NFTs unlocks 100% USDC distributions</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine className="icon" />
              </div>
              <div className="feature-text">
                <h3>Volume Based</h3>
                <p>USDC distributions scale with trading volume on Uniswap</p>
              </div>
            </div>
          </div>

          <div className="staking-details">
            <p>The BOOSTERS also serve as a scalable source of revenue, which are used to feed into the liquidity pool.</p>
            <p>This enables BULLRUN to build and sustain a healthy liquidity.</p>
            <p className="highlight">Volume dictates the USDC distribution amounts.</p>
            <p className="perpetual">As long as there are ongoing trades on Uniswap, the USDC distributions will be perpetually accumulated by the Staking participants.</p>
          </div>
        </div>

        <div className="staking-image">
          <img src={stakingImage} alt="BullRun Staking Booster NFT" />
          <div className="nft-badge">NFT</div>
        </div>
      </div>
    </div>
    <div className="facts-section">
      <div className="facts-container">
        <div className="facts-header">
          <span className="section-pre-title">BULLRUN</span>
          <h2 className="section-main-title">FACTS CHECK</h2>
          <p className="audit-note">Audited by <span className="auditor">SourceHat</span></p>
        </div>

        <div className="facts-grid">
          {/* Positive Facts */}
          <div className="facts-column positive-facts">
            <h3 className="column-title">
              <FaShieldAlt className="title-icon" /> Token Fundamentals
            </h3>
            <ul className="facts-list">
              <li><FaCheck className="icon check" /> Launched with Utility</li>
              <li><FaCheck className="icon check" /> AUDIT completed</li>
              <li><FaCheck className="icon check" /> Mission & Purpose</li>
              <li><FaCheck className="icon check" /> Liquidity accumulation</li>
              <li><FaCheck className="icon check" /> Burns <FaFire className="fire-icon" /></li>
              <li><FaCheck className="icon check" /> Sustainable</li>
              <li><FaCheck className="icon check" /> LIQUIDITY IS FOR THE PEOPLE</li>
              <li><FaCheck className="icon check" /> No presale</li>
            </ul>
          </div>

          {/* More Positive Facts */}
          <div className="facts-column positive-facts">
            <h3 className="column-title">
              <FaLock className="title-icon" /> Security & Community
            </h3>
            <ul className="facts-list">
              <li><FaCheck className="icon check" /> Stealth launch</li>
              <li><FaCheck className="icon check" /> LP tokens LOCKED for 10 Years</li>
              <li><FaCheck className="icon check" /> Community driven <FaUsers className="users-icon" /></li>
            </ul>
          </div>

          {/* Negative Facts */}
          <div className="facts-column negative-facts">
            <h3 className="column-title">
              <FaTimes className="title-icon" /> What We Don't Have
            </h3>
            <ul className="facts-list">
              <li><FaTimes className="icon cross" /> Zero tax and zero liquidity retention</li>
              <li><FaTimes className="icon cross" /> MEV bots</li>
              <li><FaTimes className="icon cross" /> Sandwich attacks</li>
              <li><FaTimes className="icon cross" /> Liquidity drained</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="tokenomics-section">
      <div className="tokenomics-container">
        <div className="tokenomics-header">
          <span className="section-pre-title">BULLRUN</span>
          <h2 className="section-main-title">TOKENOMICS</h2>
        </div>

        <div className="tokenomics-grid">
          {/* Token Distribution */}
          <div className="tokenomics-card distribution-card">
            <h3 className="card-title">
              <FaWallet className="title-icon" /> TOKEN DISTRIBUTION
            </h3>
            <div className="supply-info">
              TOTAL TOKEN SUPPLY - <span className="highlight">1,000,000</span>
            </div>
            <div className="distribution-chart">
              <div className="distribution-item" style={{ '--percentage': '66%', '--color': 'var(--secondary-color)' }}>
                <span className="percentage">66%</span>
                <span className="label">LP</span>
              </div>
              <div className="distribution-item" style={{ '--percentage': '19%', '--color': 'var(--primary-color)' }}>
                <span className="percentage">19%</span>
                <span className="label">Air drop to V1 holders</span>
              </div>
              <div className="distribution-item" style={{ '--percentage': '10%', '--color': '#6bd5ff' }}>
                <span className="percentage">10%</span>
                <span className="label">Staking & Buybacks</span>
              </div>
              <div className="distribution-item" style={{ '--percentage': '5%', '--color': '#ff6b6b' }}>
                <span className="percentage">5%</span>
                <span className="label">Team</span>
              </div>
            </div>
          </div>

          {/* Tax Structure */}
          <div className="tokenomics-card tax-card">
            <h3 className="card-title">
              <FaPercentage className="title-icon" /> TAX STRUCTURE
            </h3>
            <div className="tax-types">
              <div className="tax-type buy-tax">
                <h4>6% BUY TAX</h4>
                <ul>
                  <li><FaBurn /> True Burn: 1%</li>
                  <li><FaWallet /> USDC DISTRIBUTIONS: 1%</li>
                  <li><FaExchangeAlt /> LP (swap & liquify): 3%</li>
                  <li>ECO/OPS: 1%</li>
                </ul>
              </div>
              <div className="tax-type sell-tax">
                <h4>6% SELL TAX</h4>
                <ul>
                  <li><FaBurn /> True Burn: 1%</li>
                  <li><FaWallet /> USDC DISTRIBUTIONS: 1%</li>
                  <li><FaExchangeAlt /> LP (swap & liquify): 3%</li>
                  <li>ECO/OPS: 1%</li>
                </ul>
              </div>
            </div>
            <div className="slippage-note">
              Slippage: <span className="highlight">7%</span> on buy/sell
            </div>
          </div>

          {/* Token Support */}
          <div className="tokenomics-card support-card">
            <h3 className="card-title">
              <FaShieldAlt className="title-icon" /> TOKEN VALUE SUPPORT
            </h3>
            <div className="contract-address">
              <span>Smart Contract Address:</span>
              <div className="address-box">
                <code>{tokenAddress}</code>
                <button 
                  className="copy-button"
                  onClick={() => {
                    navigator.clipboard.writeText(tokenAddress);
                    alert('Contract address copied!');
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="security-features">
              <h4>Security Features:</h4>
              <ul>
                <li><FaLock /> AntiBot Protection</li>
                <li>Max wallet: <span className="highlight">1%</span></li>
                <li>Max Tx. on buy/sell: <span className="highlight">0.5%</span></li>
                <li><FaLock /> LP locked for <span className="highlight">10 years</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <span className="section-pre-title">BULLRUN</span>
          <h2 className="section-main-title">ROADMAP</h2>
        </div>

        {/* Centered Image */}
        {/* <div className="roadmap-image-container">
          <img src={roadmapImage} alt="BullRun Roadmap" className="roadmap-image" />
        </div> */}

        <div className="roadmap-phases">
          {/* Phase One */}
          <div className="phase-card completed">
            <h3 className="phase-title">
              <FaCheckCircle className="phase-icon" /> PHASE ONE COMPLETED
            </h3>
            <ul className="phase-items">
              <li><FaChevronRight className="item-icon" /> Website & Socials</li>
              <li><FaChevronRight className="item-icon" /> Whitepaper</li>
              <li><FaChevronRight className="item-icon" /> Smart Contract Audit</li>
              <li><FaChevronRight className="item-icon" /> CMC & CG application</li>
              <li><FaChevronRight className="item-icon" /> Staking Platform</li>
              <li><FaChevronRight className="item-icon" /> Community building</li>
              <li><FaChevronRight className="item-icon" /> Dashboard Development</li>
            </ul>
          </div>

          {/* Phase Two */}
          <div className="phase-card completed">
            <h3 className="phase-title">
              <FaCheckCircle className="phase-icon" /> PHASE TWO COMPLETED
            </h3>
            <ul className="phase-items">
              <li><FaChevronRight className="item-icon" /> Limited MADZ NFT Collection</li>
              <li><FaChevronRight className="item-icon" /> Unlimited BRL BOOSTER</li>
              <li><FaChevronRight className="item-icon" /> DUAL Staking Platform</li>
              <li><FaChevronRight className="item-icon" /> NFT LaunchPad</li>
              <li><FaChevronRight className="item-icon" /> BRL BOOSTER NFT MINT</li>
              <li><FaChevronRight className="item-icon" /> BRL Burn Calculator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="disclaimer-section">
      <div className="disclaimer-card">
        <div className="disclaimer-icon">
          <FaExclamationTriangle size={32} />
        </div>
        <div className="disclaimer-content">
          <h3 className="disclaimer-title">DISCLAIMER</h3>
          <p className="disclaimer-text">
            The only function of the BULLRUN token, or BULLRUN NFTs, is to grant holders access to all future tokens and NFT collections. Holding BRL should not be considered an investment. No statements made in this document, nor any BULLRUN communication channels, nor by any BULLRUN "community members" or holders, should be considered financial advice. BRL holders should not expect any "return on investment", nor that the "BULLRUN team" will work to provide value to their holdings.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;