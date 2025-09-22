

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import ThankYou from "./pages/ThankYou";
function App() {
  return (
    <Router>
      {/* Navbar hamesha har page par dikhana hai */}
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"element={ <> <Home /></>}/>

        {/* Dusre pages */}
   <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourwork" element={<OurWork />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
