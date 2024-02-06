function Button(props){
    const {text, icon, className, imgClassName} = props
    return(
        <>
            <button className = {className}>
                <img src = {icon} className = {imgClassName}/><span> {text} </span>
            </button>
        </>
    )
}

export default Button;