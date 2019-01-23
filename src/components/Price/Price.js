import React from 'react'

import './Price.scss'

const Price = (props) => {
    return (
        <p className='price'>$ {props.price}</p>
    )
}

export default(Price)
