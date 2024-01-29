import Input from "./Input"
import Label from "./Label"

import "../assets/scss/login.scss"

function InputComponent(props){
    const { label, required, name, value, type, onChange, placeholder} = props
    
    return(
        <div className="input__component">
            <Label
                label = {label}
                name = {name}
                className = "input__label"
            />
            <Input
                required = {required}
                name = {name}
                value = {value}
                placeholder = {placeholder}
                onChange = {onChange}
                type = {type}
                className = "input__input"
            />
        </div>
    )
}

export default InputComponent