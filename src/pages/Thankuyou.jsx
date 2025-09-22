import React from "react";
import { Link } from "react-router-dom";
import "../styles/thankyou.css";

function ThankYou() {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h2>🎉 Thank You for Your Donation! 🎉</h2>
        <p>Your generosity will make a real difference.</p>
        <p>🌟 May your kindness be rewarded abundantly. 🌟</p>
        <Link to="/" className="home-btn">Go Back to Home Page</Link>
      </div>
    </div>
  );
}

export default ThankYou;
