import Input from "./Input"
import Label from "./Label"

function InputComponent(props){
    const { label, required, name, value, type, onChange, placeholder} = props
    
    return(
        <div className="input__component">
            <Label
                label = {label}
                name = {name}
            />
            <Input
                required = {required}
                name = {name}
                value = {value}
                placeholder = {placeholder}
                onChange = {onChange}
                type = {type}
            />
        </div>
    )
}

export default InputComponent