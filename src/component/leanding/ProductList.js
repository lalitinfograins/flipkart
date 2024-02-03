import React from 'react'
import Product from '../../pages/product/Product';
import { Container, Image, Row, Col } from 'react-bootstrap'

const ProductList = ({products}) => {
  return (
    <>
          <Container>
    <Row>
    <div className="products_list my-3">
    
        {
            products.map((product) => {
                let discountedPrice = (product.price) - (product.price *
                 (product.discountPercentage / 100));

                return(
              
                        <Col xl={3} lg={4} md={4} sm={2} xs={1} key={product.id}>
                        <Product  product = {{...product, discountedPrice}} />
                        </Col>
               
                   
                )
             })
        }
        
    </div>
    </Row>
    </Container>
    </>
  )
}

export default ProductList