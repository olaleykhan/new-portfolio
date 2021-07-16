import './Wrapper.scss';

import React from 'react'

function Wrapper(props) {
    return (
        <div style={{backgroundColor:props.bg}} id={props.id} className="wrapper">
            {props.children}

        </div>
    )
}

export default Wrapper
