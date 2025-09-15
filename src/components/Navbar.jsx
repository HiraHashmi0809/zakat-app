
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./../styles/navbar.css"; // CSS import

// // function Navbar() {
// //   const toggleMenu = () => {
// //     document.querySelector(".navbar ul").classList.toggle("show");
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="brand">
// //         <img
// //           src="/assests/a-logo-design-for-a-website-featuring-th_3-L2iYMNQzCDZI3Pd9inpg_nbncSAe7TTWhcRllxDiPjg.jpeg"
// //           alt="Al Khair Trust Logo"
// //         />
// //         <div className="logo">Al Khair Trust</div>
// //       </div>

// //          <div className="menu-toggle" onClick={toggleMenu}>
// //         <span></span>
// //         <span></span>
// //         <span></span>
// //       </div>

// //    <ul>
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/OurWork">Our Work</Link></li>
// //         <li><Link to="/About">About Us</Link></li>
// //         <li><Link to="/Contact">Contacts</Link></li>
// //         <li><Link to="/donate">Donate Now</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./../styles/navbar.css"; // CSS import

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="brand">
//         <img
//           src="/assests/a-logo-design-for-a-website-featuring-th_3-L2iYMNQzCDZI3Pd9inpg_nbncSAe7TTWhcRllxDiPjg.jpeg"
//           alt="Al Khair Trust Logo"
//         />
//         <div className="logo">Al Khair Trust</div>
//       </div>

//       <div
//         className={`menu-toggle ${menuOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ul className={menuOpen ? "show" : ""} ref={dropdownRef}>
//         <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//         <li><Link to="/OurWork" onClick={() => setMenuOpen(false)}>Our Work</Link></li>
//         <li><Link to="/About" onClick={() => setMenuOpen(false)}>About Us</Link></li>
//         <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
//         <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate Now</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css"; // CSS import

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img
          src="src/assets/logo app.jpeg"   // ✅ Fixed path (keep logo in public/assets/logo.jpeg)
          alt="Al Khair Trust Logo"
        />
        <div className="logo">Al Khair Trust</div>
      </div>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "show" : ""} ref={dropdownRef}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/OurWork" onClick={() => setMenuOpen(false)}>Our Work</Link></li>
        <li><Link to="/About" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
        <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate Now</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
