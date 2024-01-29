import CheckBox from "./CheckBox";

function CheckBoxMultichoice(props){
    const { label, name } = props
    const data = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' }
     ];
    
     return (
        <>
            <Label 
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
        </>
     );
}

export default CheckBoxMultichoice