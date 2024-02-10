function Title(props){
    const {title, className} = props
    return(
        <div className={className}>
            {title}
        </div>
    )
}
export default Title