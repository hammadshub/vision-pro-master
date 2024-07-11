import React,{useState,useRef} from "react";
import Right_headset from "../../assets/images/Right_headset.jpg";
import Left_headset from "../../assets/images/Left_headset.jpg";
import lower_headset from "../../assets/videos/headset_video.mp4";
import "./HeadSet.css";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";



const HeadSet = () => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
 
  const handlePlayPausee = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="main_headset main-responsive">
      <div className="upper_headset">
        <div className="left_headset">
          <img src={Left_headset} alt="" />
        </div>

        <div className="right_headset">
          <img src={Right_headset} alt="" />
        </div>
      </div>

      <div className="lower_headset">
        <video ref={videoRef} autoPlay muted loop id="my4Video">
          <source src={lower_headset} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="play-pausebutton" onClick={handlePlayPausee}>
        {isPlaying ? (
          <PauseSvg fill="#bcbcc4"/>
        ) : (
          <PlaySvg fill="#bcbcc4" />
        )}
      </div>
      </div>
    </div>
  );
};

export default HeadSet;
