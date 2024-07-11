import React from "react";
import "./VrHeadset.css";
import vr from "../../assets/images/vr.jpg";
import visionpro from "../../assets/images/vision-pro.png";



const VrHeadset = () => {
   
  return (
    <div className='main_content main-responsive'>

      <div className="vr_logo">
        <img src={visionpro} alt="" />
      </div>

      <div className="vr_img">
        <img src={vr} alt="" />
      </div>


      <div className="vr_button">
      <span className="plus-icon">+</span> Take a closer look
      </div>

    </div>
  )
}

export default VrHeadset
