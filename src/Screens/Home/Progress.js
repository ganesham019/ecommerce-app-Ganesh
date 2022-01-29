import React from "react";
import P1 from "../../Images/P1.png";
import P2 from "../../Images/P2.png";
import P3 from "../../Images/P3.png";
function Progress() {
  return (
    <div>
      <div className="Progress container-fluid mt-5 mb-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col  text-center">
              <img
                src={P1}
                class="img-fluid "
                style={{ width: "100px", height: "65px" }}
                alt=""
              />
              <p className="mt-5 PText1"> FREE SHIPPING</p>
              <p className="mt-4" style={{ width: "190px",margin: "auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="col text-center">
              <img
                src={P2}
                class="img-fluid "
                style={{ width: "65px", height: "78px" }}
                alt=""
              />
              <p className="mt-5 PText1">100% REFUND</p>
              <p className="mt-3" style={{ width: "190px",margin: "auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="col text-center">
              <img
                src={P3}
                class="img-fluid "
                style={{ width: "67px", height: "85px" }}
                alt=""
              />
              <p className="mt-5 PText1">SUPPORT 24/7</p>
              <p className="mt-3" style={{ width: "190px",margin: "auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
