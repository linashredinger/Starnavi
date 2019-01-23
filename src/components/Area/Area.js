import React from 'react'

import './Area.scss'

const Area = (props) => {
    return (
        props.area ? (
            <p className='area'>
                {props.area}
                <span className='area_text'>
                     &nbsp;кв. м
            </span>
            </p>
        )
        :
        (<span></span>)
    )
}

export default(Area)
