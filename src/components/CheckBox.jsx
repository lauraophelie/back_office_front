import Input from "./Input"
import '../assets/scss/app.scss'

function CheckBox(props){
    const { name, value, text } = props

     return (
        <div className="content__checkbox__child">
            <Input
              className = "content__checkbox__child__input"
              name = {name}
              value = {value}
              type = 'checkbox'
            />
            <div className="content__checkbox__child__text">
              {text}
            </div>
        </div>
     );
}

export default CheckBox