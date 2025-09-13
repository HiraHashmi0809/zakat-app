// import React from "react";
// import { Link } from "react-router-dom";
// import "./../styles/footer.css";

// function Footer() {
//   return (
//     <footer>
//       <div className="col">
//         <h4>About Us</h4>
//         <p>
//           We are dedicated to supporting underprivileged communities by using Zakat donations effectively to provide hope and dignity.
//         </p>
//       </div>
//       <div className="col">
//         <h4>Quick Links</h4>
//      <li><Link to="/">Home</Link></li>
//     <li><Link to="/ourwork">Our Work</Link></li>
//     <li><Link to="/about">About Us</Link></li>
//     <li><Link to="/contact">Contacts</Link></li>
//     <li><Link to="/donate">Donate Now</Link></li>
//       </div>
//       <div className="col">
//         <h4>Contact</h4>
//         <ul>
//           <li>Email: info@zakatfoundation.org</li>
//           <li>Phone: +92 300 1234567</li>
//           <li>Address: Karachi, Pakistan</li>
//         </ul>
//       </div>
//       <p>© 2025 Zakat Foundation | All Rights Reserved</p>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="col">
        <h4>About Us</h4>
        <p>
          We are dedicated to supporting underprivileged communities by using
          Zakat donations effectively to provide hope and dignity.
        </p>
      </div>

      <div className="col">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ourwork">Our Work</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
          <li><Link to="/donate">Donate Now</Link></li>
        </ul>
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
  );
}

export default Footer;
