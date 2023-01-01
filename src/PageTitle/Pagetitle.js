import React from 'react'

const Pagetitle = (props) => {
    document.title = "Google Mart - " + props.title;
    return (
        <div className='w-100'>{props.children}</div>
    )
}

export default Pagetitle