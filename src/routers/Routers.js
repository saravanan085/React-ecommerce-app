import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Card from '../pages/Card'
import Shop from '../pages/Shop'
import Checkout from '../pages/Checkout'
import ProductDetails from '../pages/ProductDetails'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='card' element={<Card />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />

        </Routes>
    )
}

export default Routers