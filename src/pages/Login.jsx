import LoginButton from '../components/LoginButton';
import InputComponent from '../components/InputComponent'
import LoginPicture from '../components/LoginPicture';

import '../assets/scss/login.scss'

function Login() {
    return (
        <div className='login'>
            <LoginPicture
                className = 'login__picture'
                image = "assets/images/login_background.png"
                alt = "Image de fond"
            />
            <div className='login__box'>
                <div className='login__content'>
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
        </div>
    )
}

export default Login;