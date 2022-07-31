import React from "react";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import HeroSection from "../HeroSection/HeroSection";

const Header = () => {
  return (
    <div className='header-main'>
      <div className='container'>
        <SubNav />
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Header;
