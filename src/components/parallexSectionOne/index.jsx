import React from "react";
import "./ParallexSectionOne.css";
import { Parallax } from "react-parallax";
import medium from "../../assets/videos/medium.mp4";

import newspaper from "../../assets/images/newspaper.jpg";
const ParallexSectionOne = () => {
  return (
    <div className="parallex___section">
      {/* <video autoPlay muted loop id="mVideo">
        <source src={medium} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Parallax strength={600} bgImage="newspaper">
        <div className="parallex_content">
          <h2>Apps</h2>
          <p>Let your apps be free as free as your ideas</p>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallexSectionOne;
