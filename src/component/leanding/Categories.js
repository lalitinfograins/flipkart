import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/categorySlice';
import { useEffect } from 'react';
import { fetchAsyncProducts, getAllProductsStatus, getAllproducts } from '../../redux/productsSlice';
import { STATUS } from '../../urls/Status';
import Loader from '../../loader/Loader';
import ProductList from './ProductList';

const Categories = () => {
    const distpach = useDispatch();
    const categories = useSelector(getAllCategories);
    useEffect(() => {
        distpach(fetchAsyncProducts(50));
    },[]);
    const products = useSelector(getAllproducts);
    const productsStatus = useSelector(getAllProductsStatus);

    const tempProducts = [];
    if(products.length > 0) {
        for (let i in products) {
            let randomIndex = Math.floor(Math.random() * products.length);

            while(tempProducts.includes(products[randomIndex])){
                randomIndex = Math.floor(Math.random() * products.length    );
            }
            tempProducts[i] = products[randomIndex];
        }
    }
    let cartProductsOne = products.filter(product => product.category === categories[0]);
    let cartProductsTwo = products.filter(product => product.category === categories[1]);
    let cartProductsThree = products.filter(product => product.category === categories[2]);
    let cartProductsFour = products.filter(product => product.category === categories[3]);
  return (
    <>
    <section className="categories_section">
        <Container>
            <div className="categories_div">
                <div className="categories_item">
                    <div className="categories_title">
                        <h3 className="categories_h3">See Our Products</h3>
                    </div>
                    {
                        productsStatus === STATUS.LOADING ? <Loader/> : 
                        <ProductList products={tempProducts}/>
                    }
                </div>
                <div className="categories_item">
                    <div className="categories_title">
                        <h3 className="categories_h3">{categories[0]}</h3>
                    </div>
                    {
                        productsStatus === STATUS.LOADING ? <Loader/> : 
                        <ProductList products={cartProductsOne}/>
                    }
                    </div>
                    <div className="categories_item">
                    <div className="categories_title">
                        <h3 className="categories_h3">{categories[1]}</h3>
                    </div>
                    {
                        productsStatus === STATUS.LOADING ? <Loader/> : 
                        <ProductList products={cartProductsTwo}/>
                    }
                    </div>
                    <div className="categories_item">
                    <div className="categories_title">
                        <h3 className="categories_h3">{categories[2]}</h3>
                    </div>
                    {
                        productsStatus === STATUS.LOADING ? <Loader/> : 
                        <ProductList products={cartProductsThree}/>
                    }
                    </div>
                    <div className="categories_item">
                    <div className="categories_title">
                        <h3 className="categories_h3">{categories[3]}</h3>
                    </div>
                    {
                        productsStatus === STATUS.LOADING ? <Loader/> : 
                        <ProductList products={cartProductsFour}/>
                    }
                    </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Categories