
import React from "react";
import "./../styles/home.css";

function Home() {
  return (
    <>
      <section className="hero">
        {/* Hero Section */}

<img src="/home-hero.jpg" alt="Home Hero" />
        <div className="hero-content">
          <h1 className="hero-heading">Empowering Lives Through Zakat</h1>
          <p className="hero-subtext">
            Your Zakat can transform lives and build a brighter future for those in need across Pakistan.
          </p>
          <a href="/donate" className="donate-btn">Donate Now</a>
        </div>
      </section>

      {/* About Image */}
      <div className="content-img">
     
<img src="/home-img.jpg" alt="Home" />

      </div>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Zakat Foundation, our mission is to uplift underprivileged communities 
            by providing food, education, healthcare, and financial assistance. 
            Through your generous Zakat and donations, we bring hope and dignity 
            to those in need.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
