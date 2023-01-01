import React, { useState, useRef } from 'react'
import './Header.css'
import logo from '../../Images/logo.png'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'card',
        display: 'Card'
    }
]

const Header = () => {
    const [colorchange, setcolorchange] = useState(false)
    const menuRef = useRef(null)

    const changenavbarcolor = () => {
        if (window.scrollY >= 60) {
            setcolorchange(true);
        } else {
            setcolorchange(false);
        }
    };
    window.addEventListener('scroll', changenavbarcolor);
    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

    return (

        <header className={colorchange ? 'scrolled' : ''} id='header'>
            <Container>
                <Row>
                    <div className='nav_wrapper'>
                        <Col lg='3' md='4'>
                            <motion.div whileHover={{ scale: 1.2 }} className='logo'>
                                <h2 className='header_logo'>
                                    <img
                                        src={logo}
                                        alt='logo' />
                                    Google Mart
                                </h2>

                            </motion.div>
                        </Col>

                        <Col lg='4' md='4'>
                            <div className='navigation' ref={menuRef} onClick={menuToggle}>
                                <div className='menu'>
                                    {
                                        nav_links.map((items, index) => (

                                            <motion.div whileHover={{ scale: 1.2 }} className='nav_link pb-3' key={index} >
                                                <NavLink className={(navclass) =>

                                                    navclass.isActive ? 'nav_active' : ''}
                                                    id='link'
                                                    to={items.path}>{items.display}
                                                </NavLink>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>

                        </Col>

                        <Col lg='4' md='4'>
                            <div className='nav_icons'>
                                <motion.span whileHover={{ scale: 1.2 }} className='fav_icon pr-2'>
                                    <FontAwesomeIcon icon={faHeart} />
                                </motion.span>
                                <motion.span whileHover={{ scale: 1.2 }} className='card_icon'>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </motion.span>
                                <motion.span whileHover={{ scale: 1.2 }} className='user_icon pr-2'>
                                    <FontAwesomeIcon icon={faUser} />
                                </motion.span>
                                <div className='mobile_menu ps-4' onClick={menuToggle}>
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                            </div>
                        </Col>


                    </div>
                </Row>
            </Container>

        </header>
    )
}

export default Header