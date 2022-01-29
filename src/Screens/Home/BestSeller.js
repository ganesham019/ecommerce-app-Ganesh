import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Star from "../../Images/Star.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
function BestSeller() {
  const [Seller, setBestSeller] = useState();
  const [Visible, setVisible] = useState(8);

  const ShowMoreItem = () => {
    setVisible((prevValue) => Visible + 8);
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setBestSeller(data);
    }
    getData();
  }, []);
  return (
    <div>
      <div className="container-fluid p-5 ">
        <p className="LNText text-center mx-auto">Best Sellers</p>
        <div className="row">
          {Seller && (
            <>
              {Seller.slice(0, Visible).map((Sell, idx) => (
                <>
                  <div
                    className="col-md-3   mt-3 CardProduct" key={idx}
                    style={{ Height: "280px" }}
                  >
                   
                      <div class="profile-pic m-0 p-3 text-center">
                      <Link 
                        to={`/products/${Sell.id}`}>
                        <img
                          src={Sell.image}
                          class="im img-fluid "
                          style={{ width: "auto", height: "200px" }}
                          alt=""
                        />
                        </Link>
                        {/* <div className="middle">
                            <div className="d-flex flex-direction-column">
                            <AiOutlineShoppingCart className="mr-auto"/>

                         
                            </div>
                     
                        
                      </div> */}
                        <div className=" BSDetails mt-2 text-decoration-none">
                          <p className="BSText1 text-decoration-none mb-0">Nike Air Max 270 React</p>
                          <img
                            src={Star}
                            class="img-fluid m-0 p-0"
                            style={{ width: "100px" }}
                            alt=""
                          />
                          <p className="BSText2 mt-2">${Sell.price} &nbsp;&nbsp; <span class="BSText3"><del>$534.33</del> &nbsp;&nbsp;<span className="text-danger BSText4">20% off</span></span></p>
                        </div>
                      </div>
                    
                  </div>
                </>
              ))}
            </>
          )}
        </div>
        <div className="text-center mx-auto mt-5">
          <button
            className="text-center mx-auto  p-2 LoadMore"
            onClick={ShowMoreItem}
            
          >
            {" "}
            Load More{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
