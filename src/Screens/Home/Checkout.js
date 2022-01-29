import React from "react";
import { useSelector } from "react-redux";


function Checkout() {

  const cartStore = useSelector((state) => state.cart);
  const { cart } = cartStore;

  

  return (
    <>
      {cart.map((data, index) => {
        return (
          <>
            <div>
              <div class="container">
                
                <div class="col-sm-8 mx-auto text-center ">
                  <div className="row text-center">
                    <div className="col ">
                      <img
                        src={data.image}
                        className="img-responsive img-fluid"
                        style={{ width: "180px", height: "200px" }}
                      />
                    </div>
                    <div className="col d-flex justify-content-evenly">
                      <span>
                        <h4>Quantity</h4>
                        {data.count}{" "}
                      </span>

                      <span>
                        <h4>Categories</h4>
                        {data.category}{" "}
                      </span>

                      <span>
                        <h4>Price</h4>
                        {data.price}{" "}
                      </span>
                      <span>
                        <h4 >Total Price</h4>
                       
                      </span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      console.log('')
    </>
  );
}

export default Checkout;
