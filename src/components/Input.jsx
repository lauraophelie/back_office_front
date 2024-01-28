function Input(props){
    const { required, name, value, type, onChange, placeholder} = props
    return(
        <>
            <input 
                className="input__input"
                name = {name}
                type = {type}
                value = {value}
                required = {required}
                onChange = {onChange}
                placeholder = {placeholder}
            />
        </>
    )
}

export default Input;