import React, { useEffect, useRef, useState } from "react";
import "./MediaParallax.css";
import media from "../../assets/videos/media.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";

const MediaParallax = () => {
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

  const handleScroll = () => {
    const mq = window.matchMedia("(min-width: 392px)");
    const rightChild = document.querySelector(".media-right-child");

    if (mq.matches) {
      const scrollY = window.scrollY;
      const topContent = document.querySelector(".media-one").offsetTop - 25;
      const sectionHeight = document.querySelector(".media-videoContent").offsetHeight;
      const rightHeight = rightChild.offsetHeight;
      const bottomContent = topContent + sectionHeight - rightHeight - 45;

      if (scrollY > topContent && scrollY < bottomContent) {
        rightChild.classList.remove("posAbs");
        rightChild.classList.add("posFix");
      } else if (scrollY > bottomContent) {
        rightChild.classList.remove("posFix");
        rightChild.classList.add("posAbs");
      } else if (scrollY < topContent) {
        rightChild.classList.remove("posFix");
      }
    } else {
      rightChild.classList.remove("posFix", "posAbs");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Initial call to set the right state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="media-container">
      <div className="media-videoSection media-one clearfix">
        <video autoPlay loop muted ref={videoRef}>
          <source src={media} type="video/mp4" />
        </video>
        <div className="play__pause___button" onClick={handlePlayPause}>
          {isPlaying ? (
            <PauseSvg fill="#6e6e73" />
          ) : (
            <PlaySvg fill="#6e6e73" />
          )}
        </div>
        <div className="media-videoContent">
          <div className="media-right-child">
            <h2>Photos and videos</h2>
            <p>Experience the moment.<br /> Again and again.</p>
          </div>
        </div>
      </div>
      <div className="media-bottom"></div>
    </div>
  );
};

export default MediaParallax;
