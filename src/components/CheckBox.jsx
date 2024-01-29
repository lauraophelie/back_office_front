import Input from "./Input";

function CheckBox(props){
    const { name, value, text } = props

     return (
        <div className="content__checkbox">
            <Input
              name = {name}
              value = {value}
              type = 'checkbox'
            />
            <div className="checkbox__text">
              {text}
            </div>
        </div>
     );
}

export default CheckBox