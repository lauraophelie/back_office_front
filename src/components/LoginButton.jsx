import "../assets/scss/login.scss"

function LoginButton(props){
    const {text} = props
    return(
        <>
            <button className = 'button__login'>
                {text}
            </button>
        </>
    )
}

export default LoginButton;