import CheckBox from "./CheckBox";
import Label from "./Label";

function CheckBoxMultichoice(props){
    const { label, name, data } = props
    
     return (
        <div className="content__input__checkbox">
            <Label 
                className = "content__label"
                label= {label}
                name = {name}
            />
            <div className="content__checkbox">
            {data.map((item) => (
                <CheckBox
                    text = {item.name}
                    value = {item.id}
                    name = {name}
                />
            ))}
            </div>
        </div>
     );
}

export default CheckBoxMultichoice