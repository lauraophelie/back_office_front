function LoginInput(props){
    const { label, required, name, value, type, onChange, placeholder} = props
    return(
        <>
            <label htmlFor={name} className="login__label">
                {label}
            </label>
            <input 
                className="login__input"
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

export default LoginInput;