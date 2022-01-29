import React from "react";
import Logo from "../../src/Images/Logo.png";
function Footer() {
  return (
    <div>
      <div
        className="container-fluid p-5 text-center  mt-1 text-white"
        style={{ backgroundColor: "#BCDDFE" }}
      >
        <div className="container">
          <div className="row mt-5">
            <div className="col text-left">
              <img
                src={Logo}
                class="img-fluid "
                style={{ width: "160px", margin: "auto" }}
                alt=""
              />
              <p
                className="mt-3"
                style={{ color: "black", width: "220px", fontSize: "12px" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="col text-left">
              <p className="FooterText" >Follow Us</p>
              <p className="FooterText2 mt-3">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            </div>
            <div className="col text-left">
              <p className="FooterText" >Contact Us</p>
              <p className="FooterText3">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
