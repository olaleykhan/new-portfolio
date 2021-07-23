import './Button.scss'

function Button(props) {
    return (
        <>

        <button className={ props.type? props.type: "button"} style={props.style} > {props.children}</button>
            
        </>
    )
}

export default Button
