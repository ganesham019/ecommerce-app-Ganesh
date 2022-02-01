import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, totalValue } from "../../reduxToolkit/reducer/cart";

function Checkout() {
  useEffect(() => {
    dispatch(totalValue());
  }, []);

  const dispatch = useDispatch();

  const cartStore = useSelector((state) => state.cart);
  const { cart, cartsummary } = cartStore;

  const removeProduct = (count, index) => {
    dispatch(deleteProduct({ count: count, index: index }));
  };

  return (
    <>
    {cart.length === 0 && <div className="text-danger mx-auto text-center">Check Out Page is Empty</div>}
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
                        <p
                          className=" ml-5 btn btn-primary"
                          onClick={() => {
                            removeProduct(data.count, index);
                          }}
                        >
                          Remove
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="text-center mx-auto">
        <h5>
          Total price is :{" "}
          <span class="text-danger">{cartsummary.totalAmount}</span>
        </h5>
      </div>
    </>
  );
}

export default Checkout;
