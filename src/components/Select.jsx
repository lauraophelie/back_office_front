import Label from './Label'

function Select(props){
  const { name, label } = props 
  const data = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' }
  ];
    
  return (
    <div className='input__select__box'>
      <Label 
        label = {label}
        name = {name}
      />
      <select name={ name } className='input__select__select'>
        <option> { props.default } </option>
        {data.map((item) => (
          <option key={item.id} value={item.id} className='input__select__option'>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select