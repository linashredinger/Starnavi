import React from 'react'

import './Image.scss'

const Image = (props) => {

    const style = {
        backgroundImage: `url(${props.imageUrl})`
    }

    return (
        <div style={style} className='image'>
            {props.children}
        </div>
    )
}

export default(Image)
