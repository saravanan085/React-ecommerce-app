import React from 'react'
import ProductCard from './ProductCard'
import { Products } from '../data/ProductData'


const PopularProducts = () => {
    const filteredData = Products.filter((product) => {
        const pricing = parseInt(product.price.split(",").join(""));
        return pricing <= '50000';
    });


    return (
        <>

            <ProductCard productData={filteredData} />
        </>
    )
}

export default PopularProducts