import LoginButton from '../components/LoginButton';
import InputComponent from '../components/InputComponent'
import LoginPicture from '../components/LoginPicture';

function Login() {
    return (
        <div className='login'>
            <LoginPicture
                image = "assets/images/login_background.png"
                alt = "Image de fond"
            />
            <div className='login__box'>
                <h1>Log In</h1>
                <InputComponent
                    label ="Adresse e-mail"
                    name = "email"
                    required = {true}
                    type = "text"
                    placeholder = "Ecrivez ici"
                />
                <InputComponent
                    label ="Mot de passe"
                    name = "email"
                    required = {true}
                    type = "text"
                    placeholder = "Ecrivez ici"
                />
                <LoginButton 
                    text = "Se connecter"
                />
            </div>
        </div>
    )
}

export default Login;