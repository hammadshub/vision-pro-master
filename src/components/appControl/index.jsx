import React, { useState, useRef } from "react";
import "./AppControls.css";

import medium from "../../assets/videos/medium.mp4";

import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";

const AppControls = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPauses = () => {
    console.log("Button clicked");
    if (isPlaying) {
      console.log("Pausing video");
      videoRef.current.pause();
    } else {
      console.log("Playing video");
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app-container">
      <div className="app_video">
        
        <video ref={videoRef} autoPlay muted loop id="my3Video">
          <source src={medium} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
      </div>

      <div className="scroll_Over">
      <div className="playpause-button" onClick={handlePlayPauses}>
          {isPlaying ? <PauseSvg fill="#bcbcc4" /> : <PlaySvg fill="#bcbcc4" />}
        </div>
        <h3>Apps</h3>
        <h1>
          Let your apps be free as free as
          <br />
          your ideas.
        </h1>
      </div>
    </div>
  );
};

export default AppControls;
