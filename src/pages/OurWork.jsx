
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/ourwork.css";

function OurWork() {
  return (
    <>
     <Navbar />
     
      {/* Hero Section */}
      <section className="hero">
        <h1>Our Work</h1>
        <p>
          See how your donations are making a difference in the lives of people
          across Pakistan.
        </p>
      </section>

      {/* Work Section */}
      <section className="work">
        <div className="card">
          <img
            src="/assests/Lucid_Origin_A_realistic_photo_showing_volunteers_from_Al_Khai_1.jpg"
            alt="Food Distribution"
          />
          <h3>Food Distribution</h3>
          <p>
            Providing essential food supplies to underprivileged families across
            the country.
          </p>
        </div>

        <div className="card">
          <img
            src="/assests/openart-image_qm7hYKt5_1757140303677_raw.jpg"
            alt="Education Support"
          />
          <h3>Education Support</h3>
          <p>
            Supporting education by providing books, uniforms, and scholarships
            to needy students.
          </p>
        </div>

        <div className="card">
          <img
            src="/assests/Gemini_Generated_Image_ufmbrwufmbrwufmb.png"
            alt="Healthcare Aid"
          />
          <h3>Healthcare Aid</h3>
          <p>
            Arranging free medical camps and providing healthcare facilities to
            poor communities.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Watch Our Impact</h2>
        <div className="video-container">
          <video controls>
            <source
              src="/assests/PixVerse_V5_Image_Text_360P_A_cinematic_closin.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="col">
          <h4>About Us</h4>
          <p>
            We are dedicated to supporting underprivileged communities by using
            Zakat donations effectively.
          </p>
        </div>
        <div className="col">
          <h4>Quick Links</h4>
         <li><Link to="/">Home</Link></li>
<li><Link to="/ourwork">Our Work</Link></li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/contact">Contacts</Link></li>
<li><Link to="/donate">Donate Now</Link></li>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <ul>
            <li>Email: info@zakatfoundation.org</li>
            <li>Phone: +92 300 1234567</li>
            <li>Address: Karachi, Pakistan</li>
          </ul>
        </div>
        <p>© 2025 Zakat Foundation | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default OurWork;
