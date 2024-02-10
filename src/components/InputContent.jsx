import Label from "./Label"

function InputContent(props){
    const {labelClassName, className, label, placeholder, inputType, required, name} = props

    return(
        <div className = {className}>
            <Label
                className = {labelClassName}
                label = {label}
                name = {name}
            />
            <input 
                placeholder = {placeholder}
                type = {inputType}
                required = {required}
            />
        </div>
    )
}

export default InputContent