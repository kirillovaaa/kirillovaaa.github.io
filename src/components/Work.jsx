import React from "react";
import mesto from "../images/mesto.jpg";
import yandex from "../images/yandex.jpg";
import russia from "../images/russia.jpg";
import "./Work.css";

const Work = () => (
  <div className="work">
    <a className="image-link" href="https://kirillovaaa.github.io/mesto/">
      <img className="image" src={mesto} />
    </a>
    <a
      className="image-link"
      href="https://kirillovaaa.github.io/russian-travel/"
    >
      <img className="image" src={russia} />
    </a>
    <a
      className="image-link"
      href="https://kirillovaaa.github.io/how-to-learn/"
    >
      <img className="image" src={yandex} />
    </a>
  </div>
);

export default Work;

// const About = () => (
//     <div className="about">
//       <img className="about-image" src={pussycat} />
//       <div className="about-text">
//         <h3 className="about-text-title">Sasha Kirilova</h3>
//         <p>I am a self made designer and developer og digital products</p>
//         <div className="about-more">
//           <Chevron className="about-more-chevron" />
//           <span>More</span>
//         </div>
//       </div>
//     </div>
//   );
