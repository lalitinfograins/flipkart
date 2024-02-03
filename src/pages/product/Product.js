import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import formatPrice from '../FormatPrice'
const Product = ({product}) => {
  return (
    <>
   
      
   <Link key={product?.id} to={`/product/${product?.id}`}>
        <div className="product_items">
            <div className="category">{product?.category}</div>
            <div className="product_item_img">
                <Image className="product_img"  src={product?.images[0]} alt={product.title} fluid />
            </div>
            <div className="prodyct_item_info fs-14" >
                <div className="brand">
                
                    <span className='brand_span'>Brand:</span>
                    <span className='brand_span_item fw-7'>{product?.brand}</span>
                </div>
                <div className="product_title">
                    <h5 className="product_h5">{product?.title}</h5>
                </div>
                <div className="product_price">
                <span className='olw_price'>${product?.price}</span>
                    <span className='new_price'>${formatPrice(product?.discountedPrice)}</span>
                    <span className='discount'>({product?.discountPercentage}% Off)</span>
                </div>
            </div>
            
        </div>
   </Link>

    </>
  )
}

export default Product