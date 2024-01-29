function Input(props){
    const { required, name, value, type, onChange, placeholder, className} = props
    return(
        <>
            <input 
                className = {className}
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