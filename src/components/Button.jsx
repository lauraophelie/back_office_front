function Button(props){
    const {text, icon, className} = props
    return(
        <>
            <button className = {className}>
                {text} {icon}
            </button>
        </>
    )
}

export default Button;