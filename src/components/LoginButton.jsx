import "../assets/scss/login.scss"
import Button from "./Button"

function LoginButton(props){
    const {text} = props
    return(
        <Button
            text = {text}
            className = "login__button"
        />
    )
}

export default LoginButton;