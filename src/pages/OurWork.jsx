
import { Link } from "react-router-dom";
import "../styles/ourwork.css";

function OurWork() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Our Work</h1>
        <div className="hero-image">
      <img src="/our-work-img.jpg" alt="Our Work" />

..

        </div>
        <p>
          See how your donations are making a difference in the lives of people
          across Pakistan.
        </p>
      </section>

      {/* Work Section */}
      <section className="work">
        <div className="card">
<img src="/food-distribution.png" alt="Food Distribution" />

          <h3>Food Distribution</h3>
          <p>
            Providing essential food supplies to underprivileged families across
            the country.
          </p>
        </div>

        <div className="card">
<img src="/education-card.png" alt="Education Card" />
          <h3>Education Support</h3>
          <p>
            Supporting education by providing books, uniforms, and scholarships
            to needy students.
          </p>
        </div>

        <div className="card">
<img src="/health-card.png" alt="Health Card" />
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
  

  <source src="/our-video.mp4" type="video/mp4" />
            
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}

export default OurWork;
