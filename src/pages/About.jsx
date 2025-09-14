

import "../styles/about.css";
function About() {


  return (
    <>


      {/* About Section */}
      <section className="about-section">
        <h1>About Al Khair Trust</h1>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h2>Who We Are</h2>
            <p>
              We are a non-profit organization dedicated to empowering
              underprivileged communities across Pakistan through Zakat,
              donations, and community support programs.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Our Mission</h2>
            <p>
              To alleviate poverty and uplift lives by ensuring transparent and
              impactful distribution of Zakat and charitable funds.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h2>Our Vision</h2>
            <p>
              To create a society where no one sleeps hungry, and every
              individual has access to education, healthcare, and basic human
              rights.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="extra-section">
        <h1>Why Choose Us?</h1>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Transparency</h2>
            <p>
              Every donation is used responsibly with clear reporting to ensure
              your contributions make the maximum impact.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <h2>Community Driven</h2>
            <p>
              Our projects are designed with the involvement of local
              communities, ensuring long-term sustainability.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fas fa-award"></i>
            </div>
            <h2>Trusted Organization</h2>
            <p>
              With years of service, Zakat Foundation is recognized for its
              credibility, trust, and commitment to helping people.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h1>Our Impact</h1>
        <div className="stats">
          <div className="stat">
            <h2>10,000+</h2>
            <p>Families Supported</p>
          </div>
          <div className="stat">
            <h2>500+</h2>
            <p>Educational Scholarships</p>
          </div>
          <div className="stat">
            <h2>50+</h2>
            <p>Healthcare Camps</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
