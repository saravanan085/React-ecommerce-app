import React, { useState } from 'react'
import { Col, Container, Row, FormControl, Form } from 'react-bootstrap'
import ProductCard from './ProductCard'
import { Products } from '../data/ProductData'
import { motion } from 'framer-motion'

const Categoryfilter = () => {
    //     const [searchtext,settext]=useState("");
    // const filteredData = Products.filter((item)=>{
    //     return item.category==
    // });

    return (
        <Container>
            <Row>
                <Col lg='3' md='3' sm='6' xs='12' xl='3'>
                    <div className='category_filter mt-5'>
                        <Form.Control type="text" placeholder="Search" />
                        <h3 className='my-4'>Category</h3>
                        <motion.div whileHover={{ scale: 1.2 }} className='m-2 text-capitalize fw-bold'>office</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className='m-2 text-capitalize fw-bold'>Bedroom</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className='m-2 text-capitalize fw-bold'>Kitchen</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className='m-2 text-capitalize fw-bold'>Dining</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className='m-2 text-capitalize fw-bold'>Kids</motion.div>

                    </div>
                    <div className='price_filter'>
                        <Form.Label>
                            <h3 className='mt-4'>Price Filter</h3>
                        </Form.Label>
                        <Form.Range className='w-75' />
                    </div>
                </Col>
                <Col lg='9' md='9' sm='6' xs='12' xl='9'>
                    <ProductCard productData={Products} />

                </Col>
            </Row>
        </Container>
    )
}

export default Categoryfilter