import React from "react";
import Chevron from "./Chevron";
import pussycat from "../images/pussycat.jpg";
import "./About.css";

const About = () => (
  <div className="about">
    <img className="about-image" src={pussycat} />
    <div className="about-text">
      <h3 className="about-text-title">Sasha Kirilova</h3>
      <p>I am a self made designer and developer og digital products</p>
      <div className="about-more">
        <Chevron className="about-more-chevron" />
        <span>More</span>
      </div>
    </div>
  </div>
);

export default About;
