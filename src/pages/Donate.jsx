import React, { useState } from "react";

import Navbar from "../components/Navbar";
import "../styles/donate.css";
function Donate() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
     <Navbar />
   

      {/* Donation Form */}
      <div className="donate-container">
        <div className="header">Al khair Trust - Donate</div>
        <h2>Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <label htmlFor="amount">Donation Amount (PKR)</label>
          <div className="input-group">
            <i className="fas fa-hand-holding-usd"></i>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              required
            />
          </div>

          <label htmlFor="payment">Select Payment Method</label>
          <div className="input-group">
            <i className="fas fa-credit-card"></i>
            <select
              id="payment"
              value={paymentMethod}
              onChange={handlePaymentChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="jazzcash">JazzCash</option>
              <option value="easypaisa">Easypaisa</option>
              <option value="bank">Bank Account</option>
            </select>
          </div>

          {/* JazzCash Section */}
          {paymentMethod === "jazzcash" && (
            <div id="jazzcash" className="payment-section">
              <label htmlFor="jazz-num">JazzCash Number</label>
              <div className="input-group">
                <i className="fas fa-mobile-alt"></i>
                <input type="text" id="jazz-num" placeholder="03XXXXXXXXX" />
              </div>
            </div>
          )}

          {/* Easypaisa Section */}
          {paymentMethod === "easypaisa" && (
            <div id="easypaisa" className="payment-section">
              <label htmlFor="easy-num">Easypaisa Number</label>
              <div className="input-group">
                <i className="fas fa-mobile"></i>
                <input type="text" id="easy-num" placeholder="03XXXXXXXXX" />
              </div>
            </div>
          )}

          {/* Bank Section */}
          {paymentMethod === "bank" && (
            <div id="bank" className="payment-section">
              <label htmlFor="account-num">Bank Account Number</label>
              <div className="input-group">
                <i className="fas fa-university"></i>
                <input
                  type="text"
                  id="account-num"
                  placeholder="Enter bank account number"
                />
              </div>
              <label htmlFor="iban">IBAN</label>
              <div className="input-group">
                <i className="fas fa-hashtag"></i>
                <input type="text" id="iban" placeholder="Enter IBAN" />
              </div>
            </div>
          )}

          <button type="submit" className="btn">
            Donate Now
          </button>
        </form>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="popup" id="popup">
          <div className="popup-content">
            <h3>Thank You for Your Donation!</h3>
            <p>May your generosity be rewarded.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Donate;
