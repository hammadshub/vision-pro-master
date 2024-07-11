
import React,{useState,useRef} from "react";
import "./Photos_videos.css";

import large from "../../assets/videos/large.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";

const Photos_videos = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
 
  const handlePlayPausess = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play(); 
    }
    setIsPlaying(!isPlaying);
  };
 

  return (

    <div className="videos_container">
      <div className="bg__video">
        <video ref={videoRef} autoPlay muted loop id="my5Video">
          <source src={large} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>

      <div className="scroll__Over" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
          <h3>Photos and videos</h3>
          <h1>Experiencing the moment.<br/>Again and again.</h1>
          <div className="playpausebutton" onClick={handlePlayPausess}>
          {isPlaying ? <PauseSvg fill="#bcbcc4" /> : <PlaySvg fill="#bcbcc4" />}
        </div>
        </div>
      </div>
    
  );
};

export default Photos_videos;
