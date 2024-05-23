import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";


const HeroSection = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position
      if (window.scrollY > 100) {
        setShowArrow(false); // Hide arrow if scrolled down
      } else {
        setShowArrow(true); // Show arrow if at the top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Classic</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Comfort</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
          <h6 className="title dishes_title">Cuisine</h6>
        </div>
      </div>
      {/* Add scrolling arrow button */}
      {showArrow && (
        <div className="scroll-down-btn" onClick={handleScrollToAbout}>
          <i className="fas fa-chevron-down"></i>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
