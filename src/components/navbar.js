import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Physician HR Tracker</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href='/dashboard'>My Dashboard</a></li>
        <li><a href='/onboard'>Onboard</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
