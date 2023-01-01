import React from 'react'
// import Head from '../header/Head'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
    return (
        <div>
            {/* <Head /> */}
            <Header />
            <Routers />
            <Footer />
        </div>
    )
}

export default Layout