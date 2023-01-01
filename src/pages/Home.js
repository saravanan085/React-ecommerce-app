import React from 'react'
import Pagetitle from '../PageTitle/Pagetitle'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from './Services'
import PopularProducts from './PopularProducts'
import BestSelling from './BestSelling'
import NewArrivals from './NewArrivals'
import OfferBanner from './OfferBanner'

const Home = () => {


    const year = new Date().getFullYear();
    return (
        <div>
            <Pagetitle title={"Home"}>
                <section className='hero_section' style={{ backgroundColor: "#D3E2FD" }}>
                    <Container>
                        <Row>
                            <Col lg='6' md='6' sm='12' xs='12'>
                                <p className='hero_subtitle'>Trending Products in {year}</p>
                                <h2 className='hero_subtitle2'>Make Your Interier More Minimalistic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nulla reiciendis consequatur odit inventore amet ipsum necessitatibus qui voluptatibus quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est culpa possimus similique odit, at dignissimos ab autem nihil expedita, porro architecto quaerat unde aliquid fugiat, ex quia natus ipsam.</p>
                                <Link to='/shop'><motion.button whileTap={{ scale: 1.2 }} className="buy_btn p-2">
                                    SHOP NOW
                                </motion.button></Link>
                            </Col>
                            <Col lg='6' md='6' sm='12' xs='12'>
                                <div className="hero_image">
                                    <img className=' w-100 h-90 rounded' src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600' alt="hero pic" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Services />
                <section className='popular_products container'>
                    <h2 className='text-center my-5'>Trending Products</h2>

                    <PopularProducts />
                </section>
                <section className='best_products'>
                    <h2 className='text-center my-5'>Best Selling Products</h2>

                    <BestSelling />
                </section>
                <section className='Offer_Banner my-5'>
                    <OfferBanner />
                </section>

                <section className='best_products'>
                    <h2 className='text-center my-5'>New Arrivals</h2>
                    <NewArrivals />
                </section>


            </Pagetitle>

        </div>
    )
}

export default Home