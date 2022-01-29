import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../src/Images/Logo.png";

import {useSelector,useDispatch} from 'react-redux';
function Header() {
  const dispatch = useDispatch();

  const cartStore = useSelector(state=>state.cart);
  const {
    cartsummary
  } = cartStore;
 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light  text-center ">
        <a class="navbar-brand text-center" href="#">
          <img
            src={Logo}
            class="img-fluid ml-auto text-center"
            alt=""
            style={{ width: "130px", height: "100%" }}
          />
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse  m-lg-auto navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav  mt-lg-0">
            <Link to="/" class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </Link>

            <Link to="/cart" class="nav-item text-decoration-none">
              <a class="nav-link" href="#">
                Cart {cartsummary.itemCount}  <AiOutlineShoppingCart />
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
