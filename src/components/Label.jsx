function Label(props){
    const {name, label,className} = props
    
    return(
        <label htmlFor={name} className={className}>
                {label}
        </label>
    )
}
export default Label