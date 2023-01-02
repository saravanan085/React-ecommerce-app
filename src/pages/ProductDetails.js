import { faArrowLeft, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BackspaceReverseFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Pagetitle from '../PageTitle/Pagetitle'


const ProductDetails = () => {
    return (
        <div>
            <Pagetitle title={"Products"} >
                <Container>
                    <Row>
                        <Link to='/shop'>
                            <button className='mt-2' style={{ backgroundColor: "#091835", outline: 'none', color: 'white', padding: '8px 12px', borderRadius: "5px" }}><FontAwesomeIcon icon={faArrowLeft} /> Back to Shop</button>
                        </Link>
                    </Row>
                    <Row>
                        <Col lg='6' xl='6' md='6' sm='12' xs='12' className='mt-4'>
                            <img className='w-100 img-fluid mt-4' src="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1039189_pe840044_s5.jpg?f=xl" alt="" />
                            <div className='d-flex justify-content-between g-1 mt-2'>
                                <img className='w-25' src="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1046699_ph180881_s5.jpg?f=xxs" alt="" />
                                <img className='w-25' src="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1046699_ph180881_s5.jpg?f=xxs" alt="" />
                                <img className='w-25' src="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1046699_ph180881_s5.jpg?f=xxs" alt="" />
                                <img className='w-25' src="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1046699_ph180881_s5.jpg?f=xxs" alt="" />
                            </div>
                        </Col>

                        <Col lg='6' xl='6' md='6' sm='12' xs='12' className='mt-4'>
                            <h1 className='mt-3'>Product Name</h1>
                            <h3 className='mt-3'>$ 679.99</h3>
                            <p className='mt-3'>Cool gaming chair that blends in nicely with other decor. Equipped with many smart functions that allow you to adjust the back, seat, recline angle, tilt, armrests and headrest to sit really comfy.</p>
                            <div className='product_available my-3'>Available : <span> In Stock</span></div>
                            <div className='product_available my-3'>Brand : <span> Liddy</span></div>
                            <div className='product_available my-3'>Category : <span> Chair</span></div>
                            <hr />
                            <h3 className='my-3'>Quantity :</h3>
                            <div className='w-50 d-flex'>
                                <FontAwesomeIcon className='mx-1 mt-2 fw-5' icon={faMinus} />
                                <input className='mx-3 w-25' type="number" name="" id="" min={1} />
                                <FontAwesomeIcon className='mx-1 mt-2 fw-5' icon={faPlus} />
                            </div>
                            <button className='mt-4' style={{ backgroundColor: "#091835", outline: 'none', color: 'white', padding: '8px 12px', borderRadius: "5px" }}><FontAwesomeIcon icon={faShoppingCart} /> Add to Card</button>
                        </Col>
                    </Row>
                </Container>


            </Pagetitle>

        </div>
    )
}

export default ProductDetails