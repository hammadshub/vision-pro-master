import React from "react";
import "./ControlThroughApp.css";
import medium from "../../assets/videos/medium.mp4";
import HeadSet from "../headSet";

const ControlThroughApp = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <video autoPlay muted loop id="Controlapp_video">
          <source src={medium} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="title">APP !!!!!</h1>
      </div>

       
    </div>
  );
};

export default ControlThroughApp;
