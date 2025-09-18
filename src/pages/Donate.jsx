
import React, { useState } from "react";
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
      {/* Donation Form */}
      <div className="donate-container">
        <div className="header">Al Khair Trust - Donate</div>
        <h2>Donation Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
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

          {/* Donation Amount */}
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

          {/* Payment Method */}
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

          {/* Dynamic Input Boxes */}
          {paymentMethod === "jazzcash" && (
            <div className="dynamic-input">
              <label htmlFor="jazz-num">JazzCash Number</label>
              <input
                type="text"
                id="jazz-num"
                placeholder="03XXXXXXXXX"
                required
              />
            </div>
          )}

          {paymentMethod === "easypaisa" && (
            <div className="dynamic-input">
              <label htmlFor="easy-num">Easypaisa Number</label>
              <input
                type="text"
                id="easy-num"
                placeholder="03XXXXXXXXX"
                required
              />
            </div>
          )}

          {paymentMethod === "bank" && (
            <div className="dynamic-input">
              <label htmlFor="account-num">Bank Account Number</label>
              <input
                type="text"
                id="account-num"
                placeholder="Enter bank account number"
                required
              />
              <label htmlFor="iban">IBAN</label>
              <input
                type="text"
                id="iban"
                placeholder="Enter IBAN"
                required
              />
            </div>
          )}

          {/* Submit Button */}
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
