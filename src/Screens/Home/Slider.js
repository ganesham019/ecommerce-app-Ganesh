import React from "react";
import Carouse from "../../Images/Carouse.png";
function Slider() {
  return (
    <div>
      <div className="container-fluid m-0 p-0">
        <img src={Carouse} class="img-fluid " style={{width: '100%', height: '500px'}} alt="" />
        <div className="Slider-Text">
          <p style={{fontSize:"4rem",fontweight:"",position:"absolute",top:"30%",left:"6%",width:"540px" ,color:"white"}}>Super Flash Sale 50% Off</p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
