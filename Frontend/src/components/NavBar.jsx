import React, { useState } from "react";
import { data } from "../pages/restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from "react-router-dom";
import QRCodePage from "./QrCodeModal";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">PALATE PLEASERS</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          {/* Updated RouterLink to point to the login page */}
          <RouterLink to="/login" className="menuBtn">OUR MENU</RouterLink>
          <QRCodePage/>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
