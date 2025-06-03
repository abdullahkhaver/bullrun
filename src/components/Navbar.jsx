import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Bullrun Logo" className="logo-img" />
          <span className="logo-text">BULLRUN</span>
        </Link>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/staking">Staking</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="#">NFTs</Link>
        <Link to="#">Launchpad</Link>
        <Link to="#">More</Link>
        <button className="connect-btn mobile-connect">Connect</button>
      </div>

      <div className="navbar-right">
        <button className="connect-btn desktop-connect">Connect</button>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
