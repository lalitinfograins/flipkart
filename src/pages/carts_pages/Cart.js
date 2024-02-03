import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts, toggleCartQty, removeFromCart, clearCart, getCartTotal,} from '../../redux/cartSlice';
import thumb from "../../assets/img/home/hero3.jpg";
import { Container, Image , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import formatPrice from '../FormatPrice';
import {RiDeleteBinLine} from "react-icons/ri";
import {BsCheckSquareFill} from "react-icons/bs";
import { useState } from 'react';
const Cart = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };
 const distpach = useDispatch();
const carts = useSelector(getAllCarts);
const {itemsCount , totalAmount} = useSelector((state) => state.cart);
 console.log(itemsCount, totalAmount);
if(carts.length === 0){
  return (
    
    <div className="cart_modal_not_product" >
    <Container className='my-5'>
    <div className="cart_modal_not_product_img" >                                       
   <Image className="cart_modal_img_not_product" src={thumb} fluid/>
    </div>
    <span className="cart_modal_not_product_title" >Your Shopping Cart is empty.
    </span>
    <Link to="/" className="cart_modal_not_product_title" >Go Shopping Now
    </Link>
    </Container>
    </div>
  )
}

  return (
    <>
    <section className="cart_section bg-whitesmoke" >
    <Container >
                  <div className="cart_ctable" >                 
            
                  <div className="cart_chead bg-white" >
                  <div className="cart_ctr fw-6 fs-15" >
                  <div className="cart_cth" >
                  <span className="cart_ctext" >S.N. </span>
                  </div>
                  <div className="cart_cth" >
                  <span className="cart_ctext" >Product Image</span>
                  </div>
                  <div className="cart_cth" >
                  <span className="cart_ctext" >Product</span>
                  </div>
                  <div className="cart_cth" >
                  <span className="cart_ctext" >Unit Price</span>
                  </div>
                  <div className="cart_cth" >
                  <span className="cart_ctext" >Quantity </span>
                  </div>
                  <div className="cart_cth" >
                  <span className="cart_ctext" >Total Price </span>
                  </div>
                  <div className="cart_cth" >
                  <span className="cart_ctext" >Action</span>
                  </div>
                  </div>
                  </div>
                  <div className="cart_cbody" >
                  {
                    carts.map((cart, idx) => {
                      return (

                        <div className="cart_ctrbody py-2" key={cart?.id} >
                  <div className="cart_ctr" >
                  <span className="cart_btext" >{idx + 1}</span>
                  </div>
                  <div className="cart_ctr" >
                  <img className="cart_bimg" 
                      src={cart ? (cart.images ? cart.images[selectedImage] : "") : ""}/>
                  </div>
                  <div className="cart_ctr" >
                  <span className="cart_btext" >{cart?.title}</span>
                  </div>
                  <div className="cart_ctr" >
                  <span className="cart_btext" >{formatPrice(cart?.discountedPrice)}</span>
                  </div>
                  <div className="single_product_qty flex align-center my-2">
              <div className="single_product_qty_change flex align-center my-2">
                 <Button type='button' className='btn_dec' 
                 onClick={() => distpach(toggleCartQty({ id: cart?.id, type: "DEC" }))}>
                 <span>-</span>
                 </Button>
                 <div className='qty_value flex align-center justify-center'>{cart?.quantity}</div>
                 <Button type='button' className='btn_inc'
                  onClick={() => distpach(toggleCartQty({ id: cart?.id, type: "INC" }))}>
                 <span>+</span>
                 </Button>
                
              </div>
             
              </div>
                  
                  <div className="cart_ctr" >
                  <span className="cart_ctext text-orage" >${formatPrice(cart.totalPrice)}</span>
                  </div>
                  <div className="cart_ctr" >
                  <Button type='button' className='delete_btn'
                   onClick={() => distpach(removeFromCart(cart?.id))}>
               <RiDeleteBinLine className="cart_id_delete"/>
                 </Button>
                  </div>
                  </div>
                  )
                  return null;
                    })
                  }
                  </div>

                  <div className="cart_cfooter bg-white p-3" >
                  <div className="cart_cfooter-l" >
                  <Button type='button' className='btn_clear_btn' 
                 onClick={() => distpach(clearCart())}>
                 <span> <RiDeleteBinLine className="cart_id_clear_cart"/>Clear Cart</span>
                 </Button>
                  </div>
                  <div className="cart_cfooter-r" >
                  <div className="cart_cfooter-rl" >
                  <span className="cart_total-item-count" >Total ({itemsCount}) Items:</span>
                  <span className="cart_total_amount" > ${formatPrice(totalAmount)}</span>
                  
                  </div>   
                  <div className="cart_cfooter-rr" >
                  <Link type='button' to="/checkout" className='btn_check-out'>
                 <span> <BsCheckSquareFill className="cart_id_check-out"/>Check Out</span>
                 </Link>
                  </div> 
                </div>   
                </div>   
                 
                  </div>
                  </Container>
                  </section>
    </>
  )
}

export default Cart