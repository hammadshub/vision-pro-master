import React, { useEffect, useRef, useState  } from "react";
import "./VisionProApps.css";
import bg_video from "../../assets/videos/bg_video.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";



const VisionProApps = () => {
  const videoReff = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scroll_Position = window.scrollY;
      const background_Video = document.getElementById("medium_video");

      if (background_Video) {
        background_Video.style.transform = `translate(0%, calc(10% + ${
          scroll_Position * 0.5
        }px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const handlePlayPausebtn_ = () => {
    if (isPlaying) {
      videoReff.current.pause();
    } else {
      videoReff.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="vision_pro">
        <div className="playpause__button" onClick={handlePlayPausebtn_}>
        {isPlaying ? (
          <PauseSvg fill="#bcbcc4"/>
        ) : (
          <PlaySvg fill="#bcbcc4" />
        )}
      </div>
      <div className="applevision_video">
       
        <video ref={videoReff} autoPlay muted loop id="medium_video">
          <source src={bg_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="scrollTextOver">
        <div className="scrollTextonly">
          <h2>Apps</h2>
          <p>Let your apps be as free as<br/> your ideas.</p>
        </div>

         
      </div>
      {/* <video src={medium}></video> */}
    </div>
  );
};

export default VisionProApps;
