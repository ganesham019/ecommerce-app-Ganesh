import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTotalPrice } from "../../reduxToolkit/reducer/cart";

function Checkout() {
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.cart);
  const { cart } = cartStore;

  let totalPrice = 0;
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

                      <span
                        className="btn btn-default "
                        onClick={() => dispatch(AddTotalPrice(data.count , data.price))}
                      >
                          {data.AddTotalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Checkout;
