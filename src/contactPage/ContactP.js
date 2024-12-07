import React from "react";
import Navbar from "../component/Navbar";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const ContactP = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen">
        <Contact />
      </div>
      
      <Footer />
    </>
  );
};

export default ContactP;
