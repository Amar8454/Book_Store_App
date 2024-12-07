import React from "react";
import Navbar from "../component/Navbar";
import About from "../component/About";
import Footer from "../component/Footer";

const AboutP = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutP;
