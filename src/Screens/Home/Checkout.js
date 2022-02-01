import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../reduxToolkit/reducer/cart";

function Checkout() {


  const dispatch = useDispatch();

  const cartStore = useSelector((state) => state.cart);
  const { cart } = cartStore;

  const removeProduct = (count, index) => {
    dispatch(deleteProduct({ count: count, index: index }));
  };

  const calTotal =()=>{
    let total =0;
      for(let val of cart){
        total +=(val.price*val.count)
      }
      return total;
  }

  return (
    <>
    {cart.length === 0 && <div className="text-danger mx-auto text-center mt-5 mb-5 border-2 p-3"><h5 className="text-danger mx-auto text-center">Check Out Page is Empty</h5></div>}
      {cart.map((data, index) => {
        return (
          <>
            <div>
              <div class="">
                <div class="col-sm-8 mx-auto text-center ">
                  <div className="row p-3 text-center mt-4 mb-4" style={{ border: "1px solid lightgray" }}>
                    <div className="col " >
                      <img
                        src={data.image}
                        className="img-responsive img-fluid"
                        style={{ width: "120px", height: "130px" }}
                      />
                    </div>
                    <div className="col mt-5 d-flex justify-content-evenly">
                      <span>
                        <h6 style={{borderBottom : "1px solid red"}}>Quantity</h6>
                        {data.count}{" "}
                      </span>

                      <span className="ml-5">
                        <h6 style={{borderBottom: "1px solid red"}}>Categories</h6>
                        {data.category}{" "}
                      </span>

                      <span className="ml-5">
                        <h6 style={{borderBottom: "1px solid red"}}>Price</h6>
                        {data.price}{" "}
                      </span>
                      <span>
                        <p
                          className=" ml-5 p-1 btn btn-danger"
                          onClick={() => {
                            removeProduct(data.count, index);
                          }}
                        >
                          <AiFillDelete/>
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
          <span class="text-danger">{calTotal()}</span>
        </h5>
      </div>
    </>
  );
}

export default Checkout;
