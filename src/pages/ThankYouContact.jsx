import React from "react";
import { Link } from "react-router-dom";
import "../styles/thankyoucontact.css";

function ThankYouContact() {
  return (
    <div className="thankyoucontact-container">
      <div className="thankyoucontact-card">
        <h2>✅ Message Sent Successfully!</h2>
        <p>
          Thank you for reaching out to us. <br />
          Aap ka paigham receive ho gaya hai aur jald hi aap se rabta kiya
          jaye ga.
        </p>
        <p>🌟 We appreciate your trust in Zakat Foundation. 🌟</p>
        <Link to="/" className="home-btn">
          ⬅ Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYouContact;
