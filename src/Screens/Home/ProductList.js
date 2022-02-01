import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Star from "../../Images/Star.png";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineHeart,
} from "react-icons/ai";


import { useDispatch } from "react-redux";
import { productAdd } from "../../reduxToolkit/reducer/cart";

function ProductList() {
  const [quantity, setQuantity] = useState(1);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { id } = useParams();
  const [Seller, setBestSeller] = useState({
    title: "",
    price: "",
    description: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  //dispatch function
  const addToCartfunc = () => {
    dispatch(
      productAdd({
        pid: Seller.id,
        image: Seller.image,
        count: quantity,
        category: Seller.category,
        price: Seller.price,
      })
    );
  };

  const getData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setBestSeller(data);
  };

  return (
    <div>
      <div className="container text-center p-5 ">
        <div className="row">
          <div className="col-md-9 pl-0 pr-0">
            <div className="row">
              <div className="col-5">
                <img src={Seller.image} class="img-fluid " alt="" />
              </div>
              <div className="col-7  text-left">
                <p className="BSText1 mb-0">{Seller.title}</p>
                <div className="d-flex mt-2 flex-direction-column">
                  <img
                    src={Star}
                    class=" mt-1 pb-0 pt-0 mb-0 img-fluid "
                    style={{ width: "100px", height: "100%" }}
                    alt=""
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <p style={{ color: "gray", fontSize: "15px" }}> 0 review</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <p style={{ color: "#33A0FF", fontSize: "15px" }}>
                    Submit a review
                  </p>
                </div>
                <p className="BSText2 mt-2">
                  ${Seller.price} &nbsp;&nbsp;{" "}
                  <span class="BSText3">
                    <del>$534.33</del> &nbsp;&nbsp;
                    <span className="text-danger BSText4">20% off</span>
                  </span>
                </p>
                <hr />
                <p>Availability : &nbsp;&nbsp;&nbsp;&nbsp; In Stock </p>
                <p>
                  Categories : &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <b className="text-uppercase">{Seller.category}</b>{" "}
                </p>
                <p>FreeShipping </p>
                <hr />
                <div className="d-flex flex-direction-column ColorFlex">
                  <p className="">
                    Colors : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ColorCircle1   ml-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    <span className="ColorCircle2   ml-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    <span className="ColorCircle3   ml-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    <span className="ColorCircle4   ml-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                  </p>
                </div>
                <div className="d-flex flex-direction-column ColorFlex">
                  <p className="">
                    Size : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ColorCircle   ml-3">XL</span>{" "}
                    <span className="ColorCircle   ml-3">L</span>{" "}
                    <span className="ColorCircle  ml-3">M</span>{" "}
                    <span className="ColorCircle  ml-3">S</span>{" "}
                  </p>
                </div>
                <hr />
              </div>
            </div>
            <div className="d-flex flex-direction-column  mt-4">
              <div className="row">
                <div className="col-md-6 m-0 p-0">
                  <div className="row m-0 p-0">
                    <div className="col ml-1 p-2 card border-1">
                      <img src={Seller.image} class="img-fluid " alt="" />
                    </div>
                    <div className="col ml-1 p-2 card border-1">
                      <img src={Seller.image} class="img-fluid " alt="" />
                    </div>
                    <div className="col ml-1 p-2 card border-1">
                      <img src={Seller.image} class="img-fluid " alt="" />
                    </div>
                    <div className="col ml-1 p-2 card border-1">
                      <img src={Seller.image} class="img-fluid " alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row mt-5 justify-content-center content-align-center align-items-center">
                    <div className="col">
                      <span>
                        <AiOutlineMinus
                          className=" ml-auto border p-2"
                          onClick={() => decQuantity()}
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
                        {quantity}
                      </span>
                      <span>
                        <AiOutlinePlus
                          className=" ml-auto border p-2 "
                          onClick={() => setQuantity(quantity + 1)}
                          style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                        />
                      </span>
                    </div>
                    <div className="col d-flex flex-direction-column align-items-center">
                      <p
                        className="p-1 btn border-0 ADCT"
                        onClick={() => addToCartfunc()}
                      >
                        <AiOutlineShoppingCart /> &nbsp;Add to Cart
                      </p>
                      <Link to="/" className=" mt-0 ml-2 p-1 btn border-0 ADCT">
                        &nbsp;Shop
                      </Link>
                      <p className="ml-2 p-1 ADCT">
                        <AiOutlineHeart />
                      </p>
                    </div>
                    {/* <div className="">
                   <h1> {Seller.category}</h1>
                    </div> */}
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-left p-2">
            <p className="mb-3">BEST SELLERS</p>
          </div>
        </div>
      </div>
      <div className="container p-3 text-center align-items-center">
        <div className="d-flex text-center mx-auto flex-direction-column justify-content-evenly text-uppercase">
          <p className=" p-3 m-0 bgSocial">
            <FaFacebookF className="" /> &nbsp;&nbsp;Share on Facebook
          </p>
          <p className="p-3 m-0 bgSocial2">
            <AiOutlineTwitter />
            &nbsp;&nbsp;Share on Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
