import React, { useState } from "react";
import img1 from "./Assets/image-avatar.png";
import "./Css/nav.css";
import {NavLink, Outlet} from 'react-router-dom';
import { useSelector} from "react-redux";

// import Cart from "./Cart";
const listOfPages = [
  {
    page: "Home", 
  to: "/"
}, 
{
  page: "Products",
to: "products"
}, 
{
  page: "About",
  to: "/about"
},
{
  page: "Contact", 
  to: "/contact"
}
]

function OpenNav() {
  document.querySelector(".menu-bar").classList.add("open-nav");
}

function CloseNav() {
  document.querySelector(".menu-bar").classList.remove("open-nav");
}

export default function Nav() {
  // let myState = useSelector((state) => (state.changeTheNumber));
  
  let [cartCurrentState, setUpdatedState] = useState("toadd");
  console.log((cartCurrentState));

  function getCartList(currentState) {
    if (currentState === "toadd") {
      document.querySelector(".Cart").classList.add("open-cart");
      setUpdatedState("toremove");
    } else{
      document.querySelector(".Cart").classList.remove("open-cart");
      setUpdatedState("toadd");
    }
  }

  let count=0;
  function getTheCountValue(countValue){
    count = countValue;
  }
  
  return (
    <>
      <nav className="Flex-container">
        <div className="name-logo">
          <svg
            className="menu"
            onClick={OpenNav}
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
          <div className="menu-bar">
            <svg
              className="close"
              onClick={CloseNav}
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
            <ul>
                {listOfPages.map((e) => {
                    return(<li><NavLink to={e.to}>{e.page}</NavLink></li> )
                })}
              {/* <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <a href="">Contact</a>
            </li> */}
            </ul> 
          </div>
          <NavLink to="/" >
        <span className="comp-name">Bharath Engg Works</span>
        </NavLink>
        </div>
        {/* <div className="namebox">
          <span className="fl-end">
            <div className="cart-box">
            <div className="cart-box-small">
              <div className="Nber">
                {3}
              </div>
            <svg
              style={{ cursor: "pointer" }}
              className="cart-svg"
              onClick={() => {getCartList(cartCurrentState)}}
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
            </div>
            </div>
            <img className="avatar-image" src={img1} alt="" />
          </span>
        </div> */}
      </nav>
      <hr />
      <Outlet />
    </>
  );
}