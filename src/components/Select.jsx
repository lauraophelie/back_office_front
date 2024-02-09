import Label from "./Label";

function Select(props){
  const { className, labelClassName ,selectClassName , optionClassName, name, label, data } = props 
    
  return (
    <div className={className}>
      <Label
                className = {labelClassName}
                label = {label}
                name = {name}
            />
      <select name={ name } className={selectClassName}>
        <option className={optionClassName}> { props.default } </option>
        {data.map((item) => (
          <option key={item.id} value={item.id} >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select