import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThankYou.css";



function ThankYou() {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1 className="thankyou-title">✨ Thank You for Your Donation ✨</h1>
        <p className="thankyou-text">
          Your generosity will create a lasting impact. 💚
        </p>
        <p className="thankyou-text">
          🌟 May your kindness be rewarded abundantly. 🌟
        </p>
        <Link to="/" className="home-btn">
          ⬅ Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;

