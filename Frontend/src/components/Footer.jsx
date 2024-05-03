import React from "react";
import { FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">PALATE PLEASURES</div>
          <div className="right">
            <p>Basavangudi, Bengaluru 560004</p>
            <p>Open: 09:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <div>
              <a href="https://www.instagram.com/palate_plesears/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />: @palate_plesears
              </a>
              <br />
              <a href="https://www.palateplesears.com" target="_blank" rel="noopener noreferrer">
                <FaGoogle />: www.palateplesears.com
              </a>
            </div>
           
          </div>
          <div className="right">
            <p>
              For further details contact +91-6746442637
              <br />
              Email: palateplesears@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
