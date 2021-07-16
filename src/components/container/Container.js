import React from 'react';
import './Container.scss'

function Container(props) {
    return (
        <div className="container" >
            {props.children}
            
        </div>
    )
}

export default Container
