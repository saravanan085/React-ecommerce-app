import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/footer.css'
import logo from '../../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Twitter, Youtube, Github } from 'react-bootstrap-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



const footer_content = [
    {
        title: "Quick Links",
        item1: <Link className='foo__links' to='/home'>Home</Link>,
        item2: <Link className='foo__links' to='/shop'>Shop</Link>,
        item3: <Link className='foo__links' to='/card'>Card</Link>,
        item4: <Link className='foo__links' to='/login'>LogIn</Link>,
        item5: <Link className='foo__links' to='/signup'>SignUp</Link>
    },
    {
        title: "Services",
        item1: "Free Shipping",
        item2: "Easy Returns",
        item3: "Secure Payment",
        item4: "100% Replacement Guarantee",
        item5: "24/7 Customer Supports"
    },
    {
        title: "Customer Supports",
        item1: "+91 98765 43210",
        item2: "+91 89760 54123",
        item3: "example@supports.in",
        item4: "https://gmart@supports.in",
        item5: ""
    },

]

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='footer_sec mt-5 text-white' style={{ backgroundColor: "#091835" }}>
            <Container>
                <Row>
                    {
                        footer_content.map((items) => {
                            return (
                                <Col lg='4' md='6' sm='6' xs='12' xl='4' className='pb-4 align-items-center footer_1' style={{ borderBottom: '1px gray solid' }}>
                                    <h3 className='footer_subheading'>{items.title}</h3>

                                    <div>{items.item1}</div>
                                    <div>{items.item2}</div>
                                    <div>{items.item3}</div>
                                    <div>{items.item4}</div>
                                    <div>{items.item5}</div>

                                </Col>
                            )
                        })
                    }


                    <Col lg='5' md='6' sm='12' xs='12' xl='5' className='pt-4 pr-4' style={{ borderBottom: '1px gray solid' }}>
                        <div>
                            <div className='logo'>
                                <motion.h2 whileHover={{ scale: 1.2 }}>
                                    <img
                                        src={logo}
                                        alt='logo' />
                                    Google Mart</motion.h2>
                                <motion.a whileHover={{ scale: 1.2 }} className='ml-3 text-white' href="https://www.linkedin.com/in/saravanan-s-3baa5b256/">
                                    <Twitter size={30} />
                                </motion.a>
                                <motion.a whileHover={{ scale: 1.2 }} className='ml-3 text-white' href="https://www.linkedin.com/in/saravanan-s-3baa5b256/">
                                    <Youtube size={30} />
                                </motion.a>
                                <motion.a whileHover={{ scale: 1.2 }} className='ml-3 mr-3 text-white' href='https://github.com/saravanan085/' target='_blank'>
                                    <Github size={30} />
                                </motion.a>

                            </div>

                        </div>

                    </Col>
                    <Col lg='7' md='6' sm='12' xs='12' xl='7' className='pt-4 text-center' style={{ borderBottom: '1px gray solid' }}>


                        <div className='pt-2'>
                            <FontAwesomeIcon icon={faCopyright} size={30} />
                            <span className='px-2'> {year} Sarananan Selvam & Yuvaraj Sivakumar. All rights reserved • Terms of Use Privacy Policy</span>
                        </div>
                    </Col>



                </Row>
            </Container>
        </div>
    )
}

export default Footer