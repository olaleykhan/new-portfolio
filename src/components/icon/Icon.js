import React from 'react';
import './Icon.scss'

function Icon({ type, size, color, link, hover, title }) {
    return (
        <div className="icon-wrap">
            <a href={link} target="_blank" className={`icon ${hover ? 'hover' : ''}`}>
            <i style={{ color: color }} className={`fab fa-${type} fa-${size}`}></i>
        </a>
            <p>{title}</p>
        </div>
    )
}

export default Icon
