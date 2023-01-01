import React from 'react'
import { Products } from '../data/ProductData'
import ProductCard from './ProductCard'


const BestSelling = () => {
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

export default BestSelling