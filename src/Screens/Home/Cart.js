import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  modifyCartItemCount,
  deleteCartItem,
  deleteProduct,
} from "../../reduxToolkit/reducer/cart";
function Cart() {
  const dispatch = useDispatch();

  const cartStore = useSelector((state) => state.cart);
  console.log(cartStore);
  const { cart } = cartStore;

  const modifyCartItemCountfunc = (count, index) => {
    dispatch(modifyCartItemCount({ index: index, count: count }));
  };

  const removeItem = (index) => {
    dispatch(deleteCartItem(index));
  };

  const removeProduct = (count, index) => {
    dispatch(deleteProduct({ count: count, index: index }));
  };
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-4">
        {cart.length === 0 && <div>Cart is empty</div> }
        {cart.map((data, index) => {
          return (
            <>
              
                <div class="">
                  <div
                    className=" p-2"
                    style={{ border: "1px solid lightgray" }}
                  >
                    <div class="text-center">
                      {/* <button type="button" class="btn-close float-end" onClick={() => handleclose()}></button> */}
                      <img
                        src={data.image}
                        class="img-fluid "
                        style={{ width: "120px", height: "150px" }}
                        alt=""
                      />{" "}
                    </div>
                    <div class=" pt-5  d-flex justify-content-evenly ">
                      {/* <span> Qty: <h5>{data.count}</h5></span> */}
                      <div className="">
                        <span>
                          <AiOutlineMinus
                            className=" ml-auto border p-2"
                            onClick={() => {
                              if (data.count > 1)
                                modifyCartItemCountfunc(data.count - 1, index);
                              else removeItem(index);
                            }}
                            style={{
                              width: "40px",
                              height: "40px",
                              cursor: "pointer",
                            }}
                          />
                        </span>

                        <span
                          className="border ml-auto p-2"
                          style={{ width: "40px", height: "40px" }}
                        >
                          {data.count}
                        </span>
                        <span>
                          <AiOutlinePlus
                            className=" ml-auto border p-2 "
                            onClick={() => {
                              modifyCartItemCountfunc(data.count + 1, index);
                            }}
                            style={{
                              width: "40px",
                              height: "40px",
                              cursor: "pointer",
                            }}
                          />
                        </span>
                      </div>
                      <span>
                        Category: <h5>{data.category}</h5>
                      </span>
                      <span>
                        {" "}
                        Price: <h5>{data.price}</h5>
                      </span>
                    </div>
                  </div>
                </div>
         
                
              {data.count > 0 && (
                <div className="justify-content-center text-center mx-auto">
                  <Link to="/checkout">
                    <p class="p-2 mt-3 btn btn-primary">Proceed To Buy</p>
                  </Link>
                  <span className="ml-4 ">
                    <p
                      className="btn btn-primary mt-3 p-2"
                      onClick={() => {
                        removeProduct(data.count, index);
                      }}
                    >
                      Remove
                    </p>
                  </span>
                </div>
              )}
              
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Cart;

// const state = useSelector((state) => state.addCart);
// const dispatch = useDispatch();

// const handleclose = (item) => {
//   dispatch(delCart(item));
// };

// const cartItems = (cartItem) => {
//   return (
//     <div>
//       <div class="container" key={cartItem.id}>
//         <div class="row">
//           <div class="col-md-5">
//             <button type="button" class="btn-close float-end" onClick={() => handleclose(cartItem)}></button>
//             <img src={cartItem.image} class="img-fluid " alt="" />{" "}
//           </div>
//           <div class="col-md-5">
//             <h5>{cartItem.name}</h5>
//             <h5>{cartItem.price}</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
