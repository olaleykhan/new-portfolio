import './Button.scss'

function Button(props) {
    return (
        <>

        <button style={props.style} className="button"> {props.children}</button>
            
        </>
    )
}

export default Button
