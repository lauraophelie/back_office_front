function LoginPicture(props){
    return (
    <div className="login__picture">
        <img 
            src = {props.image} 
            alt = {props.alt} 
        />
    </div>
    )
}

export default LoginPicture;