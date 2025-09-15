
import Navbar from "../components/Navbar";

import "../styles/contact.css"; 

function Contact() {
  const toggleMenu = () => {
    document.querySelector(".navbar ul").classList.toggle("show");
  };

  return (
    <>


      <header>
        <h1>Contact Us</h1>
      </header>

      <div className="contact-container">
        <h2>We'd love to hear from you</h2>
        <form
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <footer>&copy; 2025 Zakat Foundation. All rights reserved.</footer>
    </>
  );
}

export default Contact;
