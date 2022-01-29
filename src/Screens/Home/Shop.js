import React from "react";
import BigS from "../../Images/BigS.png";
function Shop() {
  return (
    <div>
      <div className="container-fluid ShopNow mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 pb-5">
              <div className="ShopText">
                <p className="ShopText1">Adidas Men Running Sneakers</p>
                <p className="ShopText2">
                  Performance and design. Taken right to the edge.
                </p>
                <p className="ShopText3">SHOP NOW</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 pb-5 m-0">
              <img
                src={BigS}
                class="img-fluid "
                style={{ marginTop: "-15%"}}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
