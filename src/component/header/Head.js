import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Head = () => {
    return (
        <div style={{ backgroundColor: "#f2f460" }} className='w-100'>
            <div className='head d-flex flex-row justify-content-between'>
                <div className='left d-flex'>
                    <div className='ps-3'>
                        <FontAwesomeIcon className='pe-1' icon={faPhone} />
                        +91 98765 43210
                    </div>
                    <div className='ps-3'>
                        <FontAwesomeIcon className='pe-1' icon={faEnvelope} />
                        example@gmail.com</div>

                </div>
                <div className='right d-flex'></div>
                <label>Theme FAQ'S</label>
                <label className='pe-3'>Need Help's</label>
            </div>
        </div>
    )
}

export default Head