import React from 'react'
import Pagetitle from '../PageTitle/Pagetitle'
import Categoryfilter from './Categoryfilter'


const Shop = () => {
    return (
        <div>
            <Pagetitle title={"Shop"}>
                <Categoryfilter />

            </Pagetitle>

        </div>
    )
}

export default Shop