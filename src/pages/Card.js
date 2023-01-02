import React from 'react'
import Pagetitle from '../PageTitle/Pagetitle'
import ProductDetails from './ProductDetails'


const Card = () => {
    return (
        <div>
            <Pagetitle title={"Card"} >
                <ProductDetails />
            </Pagetitle>

        </div>
    )
}

export default Card