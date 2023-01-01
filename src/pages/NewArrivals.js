import React from 'react'
import { Products } from '../data/ProductData';
import ProductCard from './ProductCard'


const NewArrivals = () => {
    const filteredData = Products.filter((product) => {
        const pricing = parseInt(product.price.split(",").join(""));
        return pricing >= '60000';
    });
    return (
        <div>
            <ProductCard productData={filteredData} />
        </div>
    )
}

export default NewArrivals