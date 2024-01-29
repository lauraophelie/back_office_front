import { Button } from "./Button"

function LoginButton(props){
    const {text} = props
    return(
        <Button
            text = {text}
            className = "button__login"
        />
    )
}

export default LoginButton;