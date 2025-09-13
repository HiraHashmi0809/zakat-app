
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css"; // CSS import

function Navbar() {
  const toggleMenu = () => {
    document.querySelector(".navbar ul").classList.toggle("show");
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img
          src="/assests/a-logo-design-for-a-website-featuring-th_3-L2iYMNQzCDZI3Pd9inpg_nbncSAe7TTWhcRllxDiPjg.jpeg"
          alt="Al Khair Trust Logo"
        />
        <div className="logo">Al Khair Trust</div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/OurWork">Our Work</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Contact">Contacts</Link></li>
        <li><Link to="/donate">Donate Now</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
