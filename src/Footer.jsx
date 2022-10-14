import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import './Css/footer.css'
// import { Outlet } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='footer-container'>
        {/* <div>logo</div> */}
        <div className="flex-container">
        <div className="details">
        <div className="heading homepage">Bharath Engineering Works</div>
        <div className="address">26-122/20A,chandra Apts,Sharadha Nagar, Safilguda,Malkajgiri,Secunderabad,Telangana -500047</div>
        <div className="cellphone">+91-9397361417</div>
        <div className="email">bharathengineeringworks143@gmail.com</div>
        </div>
        <div className="products">
          <div className="heading products-head">Products</div>
          <div className="product-items">Pallet Trucks</div>
          <div className="product-items">Stackers</div>
          <div className="product-items">Trolley</div>
          <div className="product-items">Cranes</div>
          {/* <div className="product-items">Stackers</div> */}
        </div>
        </div>
        <div className="copyright">Copyright &#169; 2022 <a href="https://sripathimanikanta.github.io/BharathEngWorks" target="_blank">BharathEngineeringWorks.github.io</a></div>
    </div>
    {/* <Outlet /> */}
    </>
  )
}
