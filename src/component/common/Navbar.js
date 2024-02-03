import React, { useState } from 'react'
import { Button, Container , Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaBars, FaSearch, FaShoppingCart} from "react-icons/fa";
import {GiShoppingBag} from "react-icons/gi";
import { setSidebarOn } from '../../redux/SidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categorySlice';
import { getAllCarts, getCartItemsCount, getCartTotal } from '../../redux/cartSlice';
import { useEffect } from 'react';
import CartModal from '../cart_model/CartModal';
import logo from "../../assets/img/logo_1.png";
const Navbar = () => {
  const distpach = useDispatch();
  const categories = useSelector(getAllCategories);
 const carts = useSelector(getAllCarts);
 const itemsCount = useSelector(getCartItemsCount);
const [searchTerm, setSearchTerm]= useState("");

const handleSearchTerm = (e) => {
  e.preventDefault();
  setSearchTerm(e.target.value);
}

 useEffect(() =>{
  distpach(getCartTotal());
 },[carts]);
  return (
    <>
          <nav className='navbar '>
    <Container>
        <div className="navbar-cnt">
            <div className="navbar-cnt-top fs-13  flex align-center justify-between">
            <div className="navbar-cnt-top-1">
            <Button onClick={() => distpach(setSidebarOn())} className='navbar-tab '><FaBars className="navbar-tab-icon" /></Button>
             <Link to="/" className='navbar-logo'>
             {/* <img src={logo} alt="" srcset="" className='logo_img' /> */}
             <GiShoppingBag className="logo-icon"/>
             <span className='strong-logo'>
              L&P Store
             <span className='small-logo'>Up.

             </span></span>
              </Link>
           
                
                {/* <li className=' navbar-search-bg bg-white'>
                <input type='text' onClick={(e) => handleSearchTerm(e)} 
                className='navbar-search-input form-control'
                 placeholder='Search your preferred item here'/>
        
  <Link to={`/search/${searchTerm}`}>
    <FaSearch className='navbar-search-icon' />
  </Link>

                </li> */}
                <div className="navbar-cnt-top-right">
                <ul className='flex align-center navbar-items'>
              {
                categories.slice(0,8).map((category, ind) => {
                  return(
                    <li key={ind}>
                <Link to={`category/${category}`} className='navbar-link'>
                {category.replace("-"," ")}</Link>

                </li>
                  )
                })
              }
                
               
                </ul>
            </div>
                
                <li className='navbar-cart-item'>
                <Link to="/cart" className="navbar-cart-link">
  <FaShoppingCart className="navbar-cart-icon" />
  <span className="navbar-cart-qty">{itemsCount}</span>
</Link>
<CartModal carts={carts} />

                </li>
               
            </div>
           
            </div>
           
        </div>
    </Container>

    </nav>
    </>
  )
}

export default Navbar