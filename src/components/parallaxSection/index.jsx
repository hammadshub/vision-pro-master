import React, { useEffect ,useRef,useState} from "react";
import "./ParallaxSection.css";
import medium from "../../assets/videos/medium.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";




const ParallaxSection = () => {

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

  const reOrder = () => {
    const mq = window.matchMedia("(min-width: 392px)");
    const rightChild = document.querySelector(".right-child");

    if (mq.matches) {
      rightChild.classList.add("customm"); 
      const scroll = window.scrollY;
      const topContent = document.querySelector(".one").offsetTop - 25;
      const sectionHeight =
        document.querySelector(".videoContent").offsetHeight;
      const rightHeight = rightChild.offsetHeight;
      const bottomContent = topContent + sectionHeight - rightHeight - 45;

      if (scroll > topContent && scroll < bottomContent) {
        rightChild.classList.remove("posAbs");
        rightChild.classList.add("posFix");
      } else if (scroll > bottomContent) {
        rightChild.classList.remove("posFix");
        rightChild.classList.add("posAbs");
      } else if (scroll < topContent) {
        rightChild.classList.remove("posFix");
      }
    } else {
      rightChild.classList.remove("customm", "posAbs", "posFix");
      // rightChild.querySelector("h2").textContent = "Apps";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reOrder);
    window.addEventListener("resize", reOrder);

    reOrder(); // Initial call to set the right state

    return () => {
      window.removeEventListener("scroll", reOrder);
      window.removeEventListener("resize", reOrder);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="videoSection one clearfix">
          <video autoPlay loop muted ref={videoRef}>
            <source src={medium} type="video/mp4" />
          </video>
          <div className="play-pause__button" onClick={handlePlayPause}>
        {isPlaying ? (
          <PauseSvg fill="#6e6e73"/>
        ) : (
          <PlaySvg fill="#6e6e73" />
        )}
      </div>
          <div className="videoContent">
            <div className="right-child">
              <h2>
               Apps
              </h2>
               
               <p>Let your apps be as free as <br/>your ideas.</p>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
};

export default ParallaxSection;