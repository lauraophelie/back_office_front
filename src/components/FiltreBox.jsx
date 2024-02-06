function FiltreBox(props){
    return(
        <div className={props.className}>
            {props.text} <i className={props.icon}></i>
        </div>
    )
}
export default FiltreBox;