import React, { useState, useEffect } from "react";
import "./ParallexAppControl.css";
import medium from "../../assets/videos/medium.mp4";

const ParallexAppControl = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h2>Apps</h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          Let your apps be as free as
          <br /> your ideas.
        </p>
      </div>
    </>
  );

  return (
    <section className="Parallax">
      <div
        className="Parallax__background_video"
        >

        <video autoPlay muted loop id="Control__app__video" style={{transform:`translateY(${-offsetY * 0.5}px)`} }>
          <source src={medium} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      <div className="Parallax__content" style={{transform:`translateY(${offsetY * 0.005}px)`} }>{renderContent()}</div>
    </section>
  );
};

export default ParallexAppControl;
