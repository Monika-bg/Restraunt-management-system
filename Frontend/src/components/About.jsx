import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            "Palate Pleasers" is a restaurant focused on delivering a delightful culinary experience, 
            tantalizing the taste buds of its patrons with a diverse menu that caters to various palates
             and preferences.From savory dishes to delectable desserts, Palate Pleasers aims to satisfy 
             every craving and create memorable dining moments for its customers.
            </p>
            <Link to={"/"}>
              {" "}
              <span>Your smile is the flavour my palate craves!
               
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
