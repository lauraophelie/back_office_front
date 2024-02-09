function Button(props){
    const {text, icon, className, imgClassName} = props
    return(
        <>
            <div className = {className}>
                <img src = {icon} className = {imgClassName}/><span> {text} </span>
            </div>
        </>
    )
}

export default Button;