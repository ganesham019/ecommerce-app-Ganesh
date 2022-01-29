import React from "react";
import Ln1 from "../../Images/Ln1.png";
import Ln2 from "../../Images/Ln2.png";
import Ln3 from "../../Images/Ln3.png";
function LatestNews() {
  return (
    <div>
      <div className="container pt-5 mt-5 ">
        <div className=" text-center">
          <p className="LNText">LATEST NEWS</p>
          <div className="row text-center mt-5 ">
            <div className="col p-2 m-0">
              <div className="row text-center">
                <div className="col">
                  <img src={Ln1} class="mt-5 img-fluid " alt="" />
                </div>
                <div className="col">
                  <p className="LnText1 text-left">01 Jan, 2015</p>
                  <p className="LnText2 text-left">Fashion Industry</p>
                  <p className="LnText3 text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col p-2 m-0">
              <div className="row text-center">
                <div className="col">
                  <img src={Ln2} class="mt-5 img-fluid " alt="" />
                </div>
                <div className="col">
                  <p className="LnText1 text-left">01 Jan, 2015</p>
                  <p className="LnText2 text-left">Fashion Industry</p>
                  <p className="LnText3 text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col p-3 m-0">
              <div className="row text-center">
                <div className="col">
                  <img src={Ln3} class="mt-5 img-fluid " alt="" />
                </div>
                <div className="col">
                  <p className="LnText1 text-left">01 Jan, 2015</p>
                  <p className="LnText2 text-left">Fashion Industry</p>
                  <p className="LnText3 text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
