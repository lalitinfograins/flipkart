import React from 'react';
import thumb from "../../assets/img/home/hero3.jpg";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import formatPrice from '../../pages/FormatPrice';
const CartModal = ({carts }) => {
  return (
    <>
    <section className="cart_modal_section">
      <h5 className="cart_modal_title">Recently Added Products</h5>
      {
        (carts?.length > 0) ? (
          <div className="cart_modal_lists">
            {
              carts.map(cart =>{
                return (
                  <div className="cart_modal_items" key={cart.id}>
                  <div className="cart_modal_img" >
                 <Image className="cart_modal_img_cover" src={cart?.thumbnail}  fluid/>
                  </div>
                  <span className="cart_modal_item_title" >{cart?.title}
                  </span>
                  <span className="cart_modal_item_price" >{formatPrice(cart?.discountedPrice)}
                  </span>
                  </div>
                      
                )
              })
            }
            <div className="cart_modal_not_product_btn" > 
            <Link to="/cart"  className="cart_modal_not_product_title" >View My Shopping Cart
                  </Link></div>
           
          </div>
        ):(
          <div className="cart_modal_not_product" >
                  <div className="cart_modal_not_product_img" >                                       
                 <Image className="cart_modal_img_not_product" src={thumb} fluid/>
                  </div>
                  <span className="cart_modal_not_product_title" >No Products Yed
                  </span>
                  </div>
        )
      }

    </section>
    </>
  )
}

export default CartModal