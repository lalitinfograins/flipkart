import React from 'react'
import ProductList from './ProductList'
import Loader from '../../loader/Loader'
import { STATUS } from '../../urls/Status'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import  { fetchAsyncProductOfCategory, getAllProductsByCategory, getCategoryProductsStatus } from '../../redux/categorySlice'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const CategoryProductPage = () => {
    const distpach = useDispatch();
    const { category } = useParams();
    const categoryProducts = useSelector(getAllProductsByCategory);
    const categoryProductsStatus = useSelector(getCategoryProductsStatus);
  useEffect(() => {
    distpach(fetchAsyncProductOfCategory(category));
  },[distpach, category])
  return (
    <>
    <section className="categories_section">
        <Container>
            <div className="categories_div">
                <div className="categories_item">               
                    <div className="categories_title">
                        <h3 className="categories_h3">See Our {category.replace("-"," ")}</h3>
                    </div>
                    {
                        categoryProductsStatus === STATUS.LOADING ? <Loader/> : 
                        <ProductList products={categoryProducts}/>
                        
                    }
                </div>
                   
            </div>
        </Container>
    </section>
    </>
  )
}

export default CategoryProductPage