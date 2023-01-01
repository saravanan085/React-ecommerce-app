import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Bannerimg from '../Images/bannerpic.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const OfferBanner = () => {
    const title_style = {
        fontWeight: 600,
        fontSize: "44px",
    }
    return (
        <div style={{ backgroundColor: "#D3E2FD" }}>
            <Container>
                <Row>
                    <Col lg='6' sm='12' xs='12' className='d-flex flex-column justify-content-center' >
                        <h2 className='banner_title pb-3' style={title_style}>New Arrival Products</h2>
                        <p className='banner_desc'>Products are offering 30% to 45% off on every <span style={{ fontWeight: "500" }}>New Arrivals Products</span></p>
                        <h3 className=''>Goto The Shop And Purchase Now</h3>
                        <Link to='/shop'>
                            <motion.button whileHover={{ scale: 1.2 }} className='shop_btn w-25 py-2 px-4' style={{ backgroundColor: "#091835" }}>Shop</motion.button>
                        </Link>
                    </Col>

                    <Col lg='6' sm='12' xs='12' className='p-4'>
                        <img className='img-fluid' src={Bannerimg} alt="Banner Img" />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default OfferBanner