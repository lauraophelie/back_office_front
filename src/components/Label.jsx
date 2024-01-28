function Label(props){
    const {name, label} = props
    
    return(
        <label htmlFor={name} className="input__label">
                {label}
        </label>
    )
}
export default Label