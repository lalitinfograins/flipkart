import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Header from '../component/common/Header'
import Footer from '../component/common/Footer'
import Home from '../component/leanding/Home'
import Cart from '../pages/carts_pages/Cart'
import SingleProduct from '../pages/single_product/SingleProduct'
 import "../assets/style/main.scss";
import Sidebar from '../component/common/Sidebar';
import CategoryProductPage from '../component/leanding/CategoryProductPage'
import Login from '../pages/user/Login'
import Registed from '../pages/user/Registed'
import User from '../pages/user/User'
import PhoneVerify from '../pages/user/PhoneVerify '
import Checkout from '../pages/checkout/Checkout'

const Index = () => {
 
  return (
    <>
        <Header/>
        <Sidebar/>
            <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            {/* <Route exact path='/category/:category' element={<Categories/>}/> */}
            <Route exact path='/registed' element={<Registed/>}/>
            <Route exact path='/category/:category' element={<CategoryProductPage/>}/>
            <Route exact path='/product/:id' element={<SingleProduct/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/user' element={<User/>}/>
            <Route exact path='/phone-verify' element={<PhoneVerify/>}/>
            <Route exact path='/checkout' element={<Checkout/>}/>
            </Routes>
            <Footer/>
       
    </>
  )
}

export default Index