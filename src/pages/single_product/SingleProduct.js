import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncProductSingle, getProductSingle, getSingleProductStatus } from '../../redux/productsSlice';
import { useEffect } from 'react';
import { STATUS } from '../../urls/Status';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaShoppingCart} from "react-icons/fa";

import Loader from '../../loader/Loader';
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../redux/cartSlice';
import CartMessage from '../../component/cartmessage/CartMessage';
import formatPrice from '../FormatPrice';

const SingleProduct = () => {
   
  const [selectedImage, setSelectedImage] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };
  
  const {id} = useParams();
  const distpach = useDispatch();
    const product = useSelector(getProductSingle);
    const productSingleStatus = useSelector(getSingleProductStatus);
     
    const [quantity, setQuantity] = useState(1);

    const cartMessageStatus = useSelector(getCartMessageStatus);

    useEffect(() => {
        distpach(fetchAsyncProductSingle(id));

        if(cartMessageStatus){
          setTimeout(()=>{
            distpach(setCartMessageOff())
          }, 2000)
        }
    },[cartMessageStatus]);

    let discountedPrice = (product?.price) - 
    (product?.price * (product?.discountPercentage / 100));
    if(productSingleStatus === STATUS.LOADING) {
      return (
        <Loader/>
      )
    }


    const incQty = () => {
      setQuantity((prevQty) => {
        let tempQty = prevQty + 1;
        if (tempQty > 10) tempQty = 10; // Limit to a maximum of 10
        if (tempQty > product?.stock) tempQty = product?.stock;
        return tempQty;
      });
    };

  const decQty = () => {
    setQuantity((nextQty) => {
      let tempQty = nextQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };
 const addToCartHandel = (product) => {
  let discountedPrice = (product?.price) - (product?.price *
                 (product?.discountPercentage / 100));

                 let totalPrice = quantity * discountedPrice;

                 distpach(addToCart({...product , quantity : quantity, totalPrice, discountedPrice}))
                 distpach(setCartMessageOn(true));
                }
  return (
    <>
    <section className="single_product py-5">
      <Container className='py-5'>
      <div className="single_product_box py-3">
        <Row>
          <Col xxl={6} lg={6} md={6} sm={12}>
          <div className="single_product_image_box">
                  <div className="single_product_img_item">
                    <Image
                      src={product ? (product.images ? product.images[selectedImage] : "") : ""}
                      alt=""
                      className='single_product_img'
                    />
                  </div>
                  <div className="single_product_thumb_box my-4">
                    {product && product.images
                      ? product.images.map((image, index) => (
                          <div
                            className="single_product_thumb flex align-center my-2"
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                          >
                            <Image
                              src={image}
                              alt=""
                              className={`single_product_thumb_img ${
                                index === selectedImage ? 'selected' : ''
                              }`}
                            />
                          </div>
                        ))
                      : null}
                  </div>
                </div>
          </Col>
          <Col xxl={6} lg={6} md={6} sm={12}>
            <div className="single_product_content">
              <div className="single_product_title fw-5 fs-20">
             <h3> {product?.title}</h3>
              </div>
              <div className="single_product_per fw-5 fs-20 my-3">
              <p> {product?.description}</p>
              </div>
              <div className="single_product_brand_item flex align-center my-3">
              <div className="single_product_rating flex align-center my-3">
              <span className='rating_product text-orange fw-5'> Rating : </span>
              <span> {product?.rating}</span>
              </div>
              <div className="single_product_rating flex align-center my-3">
              <li className='vert-line'>|
              <span className='rating_product text-orange fw-5'> Brand : </span>
              <span> {product?.brand}</span></li>
              </div>
              <div className="single_product_rating flex align-center my-3">
              <li className='vert-line'>|
              <span className='rating_product text-orange fw-5'> Category : </span>
              <span> {product?.category ? product.category.replace('-', ''): ''}</span>
              </li>
              </div>
           
              </div>
              <div className="single_product_price_item flex align-center my-2">
              <div className="single_product_price_items flex align-center my-2">
              <div className="single_product_price flex align-center my-1">
              <del>${product?.price}</del>
              <span className='price_product text-orange fw-5'> Inclusive Of All Texts </span>
              </div>
              
              <div className="new_price_product_item flex align-center my-1">
              <span className='new_price_product text-orange fw-5'>  ${formatPrice(discountedPrice)}</span>
              <span className='off_product text-orange fw-5'>{product?.discountPercentage}% Off</span>
             
              </div>
              </div>
              <div className="single_product_qty flex align-center my-4">
              <span className='rating_product text-orange fw-5'>Quantity :</span>
              <div className="single_product_qty_change flex align-center my-3">
                 <Button type='button' className='btn_dec' onClick={() => decQty()}>
                 <span>-</span>
                 </Button>
                 <div className='qty_value flex align-center justify-center'>{quantity}</div>
                 <Button type='button' className='btn_inc' onClick={() => incQty()}>
                 <span>+</span>
                 </Button>
              </div>
              {
                (product?.stock === 0) ? 
                <div className='qty_error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5'>
                Our of Stock</div> :""
              }
              </div>
           
              </div>

              <div className="single_product_btns flex align-center my-3">
              <Button type='button' className='aad_to_cart_btn btn'>
              <FaShoppingCart className='add_to_cart-icon' />
              <span className='add_to_cart_btn_text text-orange fw-5'
               onClick={() => {addToCartHandel(product)}}>Add To Cart</span>
                 </Button>
                 <Button type='button' className='buy_now_btn btn'>
              <span className='buy_now_btn_text text-orange fw-5'>Buy Now</span>
                 </Button>
              </div>
            </div>
          </Col>
        </Row>
        </div>
        {cartMessageStatus && <CartMessage/>}
      </Container>
    </section>
    </>
  )
}

export default SingleProduct