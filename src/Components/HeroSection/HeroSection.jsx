import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero-left'>
        <h1 className='hero-heading'>পূর্ব রামপুরা স্কুল এন্ড কলেজ</h1>
        <p className='hero-paragraph'>
          যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো,
          তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা তুমি যদি নিশ্চিত হও যে,
          তুমি কোনো মোহাচ্ছাদিত আবহে
        </p>
        <button className='hero-btn'>Log in</button>
        <a href='/' className='learn-more'>
          Learn more
        </a>
      </div>
      <div className='hero-right'>
        <img
          src={require("../../images/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background 2.png")}
          alt=''
          className='hero-image'
        />
      </div>
    </div>
  );
};

export default HeroSection;
