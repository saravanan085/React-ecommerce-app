import React from 'react'
import { motion } from 'framer-motion'
import '../styles/productcard.css'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ProductCard = (props) => {
    const products = props.productData
    return (
        <Container>
            <Row>
                {
                    products.map((item, index) => {
                        return (
                            <Col lg='3' md='3' sm='6' xs='12' xl='3' key={item.index} className='box d-flex justify-content-center align-items-center mb-2'>

                                <div className='product_item d-flex flex-column justify-content-center align-items-end mx-3'>
                                    <div className="product_img h-75 object-fit-cover">
                                        <motion.img className='img w-100 h-75' whileHover={{ scale: 1.1 }} src={item.img} alt="Product Img" />
                                    </div>
                                    <div className="product_desc">
                                        <div className='product_name'><Link to='/shop/:id=${item.product_id}'>{item.product_name}</Link></div>
                                        <span className='p-2 category'>{item.category}</span>
                                        <div className="product_details">
                                            <span className='price mx-2 p-1 d-block'>₹ {item.price}</span>
                                            <span className="add_card">
                                                <motion.button key={item.product_id} whileHover={{ scale: 1.2 }}>Add to card
                                                    <FontAwesomeIcon className='ps-2' icon={faShoppingCart} />
                                                </motion.button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        )
                    })
                }
            </Row>
        </Container>


    )
}

export default ProductCard