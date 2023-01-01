import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faCreditCard, faHeadset, faTruck } from '@fortawesome/free-solid-svg-icons'
import '../styles/services.css'

const ServiceData = [{
    icon: faTruck,
    title: "Free Shipping",
    sub_content: "Lorem ipsum dolor, sit consectetur elit.",
    bgcolor: "#ffe3e3"
}, {
    icon: faArrowsRotate,
    title: "Easy Returns",
    sub_content: "Lorem ipsum dolor, sit consectetur elit.",
    bgcolor: "#dae5b0"
}, {
    icon: faCreditCard,
    title: "Secure Payment",
    sub_content: "Lorem ipsum dolor, sit consectetur elit.",
    bgcolor: "#b6cc63"
}, {
    icon: faHeadset,
    title: "Customer Support",
    sub_content: "Lorem ipsum dolor, sit consectetur elit.",
    bgcolor: "#e5b0b0"
}
]

const Services = () => {
    return (
        <Container>
            <Row>
                {
                    ServiceData.map((items, index) => (
                        <Col lg='4' md='6' sm='6' xs='12' xl='3' className='d-flex justify-content-center align-items-center  mt-md-4 mt-sm-2 mt-lg-4 mt-sm-2'>
                            <motion.div whileTap={{ scale: 1.2 }} className="service_items" style={{ backgroundColor: `${items.bgcolor}` }}>
                                <span>
                                    <FontAwesomeIcon className='icon' icon={items.icon} />
                                </span>
                                <div>
                                    <h2>{items.title}</h2>
                                    <p>{items.sub_content}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Services