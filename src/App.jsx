
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Footer from "./components/Footer";
import ThankYouContact from "./pages/ThankYouContact";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import OurWork from "./pages/OurWork";
import ThankYou from "./pages/ThankYou"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />

      
        <Route path="/about" element={<About />} />

       <Route path="/thankyoucontact" element={<ThankYouContact />} />
        <Route path="/contact" element={<Contact />} />

           <Route path="/ourwork" element={<OurWork />} />

        
        <Route path="/donate" element={<Donate />} />

      
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
