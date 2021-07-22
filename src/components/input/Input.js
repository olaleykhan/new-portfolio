import React from 'react';

import './Input.scss'
const input = (props)=>{
    let inputElement = null;

    switch(props.type){
        case('input'):
        inputElement = <input className="InputElement" {...props} name={props.id}   />;
        break;
        case('textarea'):
        inputElement = <textarea className="InputElement noscrollbars" {...props} name={props.id}  />;
        break;
        default:
            inputElement = <input className="InputElement" {...props} name={props.id}  />;

    }
    return(
        <div className="Input">
            <label htmlFor={props.id} className="Label">
                {props.label}

            </label>
            {inputElement}
            <p className="err">{props.err && props.err}</p>

        </div>
    )
}

export default input;