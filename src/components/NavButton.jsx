function NavButton(props){
    const { text , icon } = props
    
    return(
        <button className="button__nav">
            {icon} {text}
        </button>
    )
}