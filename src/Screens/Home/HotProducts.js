import React from "react";
import ST1 from "../../Images/ST1.png";
import ST2 from "../../Images/ST2.png";
import ST3 from "../../Images/ST3.png";

function HotProducts() {
  return (
    <div className="HotProducts">
      <div className="container-fluid">
        <div className="container pl-5 pr-5">
          <div className="row">
            <div className="col m-0 p-0">
              <div class="card border-0 ">
                <img className="card-img-top img-fluid" src={ST1} alt="" />
                <div className="card-body">
                  <p className="Text1" >FS - QUILTED MAXI CROSS BAG</p>
                  <p className="Text2">
                    <del>$534,33</del>
                    <span className="text-danger">24% Off</span>
                  </p>
                  <p class="Text3 card-text">$299,43</p>
                </div>
              </div>
            </div>
            <div className="col m-0 p-0">
            <div class="card border-0 ">
                <img className="card-img-top img-fluid" src={ST2} alt="" />
                <div className="card-body">
                  <p className="Text1" >FS - QUILTED MAXI CROSS BAG</p>
                  <p className="Text2">
                    <del>$534,33</del>
                    <span className="text-danger">24% Off</span>
                  </p>
                  <p class="Text3 card-text">$299,43</p>
                </div>
              </div>
            </div>
            <div className="col m-0 p-0">
            <div class="card border-0">
                <img className="card-img-top img-fluid" src={ST3} alt=""  />
                <div className="card-body">
                  <p className="Text1" >FS - QUILTED MAXI CROSS BAG</p>
                  <p className="Text2">
                    <del>$534,33</del>
                    <span className="text-danger">24% Off</span>
                  </p>
                  <p class="Text3 card-text">$299,43</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotProducts;
