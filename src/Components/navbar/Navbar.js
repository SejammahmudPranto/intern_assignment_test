import React from 'react';
import './navbar.css';
import logo from "../../assets/Group4.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav_list">
          <li><a href='/'>Influencer</a></li>
          <li><a href='/'>Brands</a></li>
          <li><a href='/'>HypeSocial</a></li>
          <li><a href='/'>Success Stories</a></li>
        </ul>
        <div className="login_getstarted">
          <p><a href="./login">Login</a></p>
          <button type="button">Get Started</button>
        </div>
    </div>
  )
}

export default Navbar