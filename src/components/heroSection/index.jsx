import React, { useRef, useState } from "react";
import "./HeroSection.css";
import hero_logo from "../../assets/images/hero_logo.png";
import visionpro from "../../assets/videos/visionpro.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
 
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
 
  return (
    <div className="hero_section main-responsive ">
      <video ref={videoRef} autoPlay muted loop id="myVideo">
        <source src={visionpro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="play-pause-button" onClick={handlePlayPause}>
        {isPlaying ? (
          <PauseSvg fill="#6e6e73"/>
        ) : (
          <PlaySvg fill="#6e6e73" />
        )}
      </div>

      <div className="hero_text">
        <div className="hero_logo">
          <img src={hero_logo} alt="" />
        </div>
        <h2>Available from July 12th.</h2>
        <a href="#">Preview visionOS 2 &gt;</a>
      </div>
    </div>
  );
};

export default HeroSection;
