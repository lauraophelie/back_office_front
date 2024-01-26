import LoginButton from '../components/LoginButton';
import LoginInput from '../components/LoginInput'
import LoginPicture from '../components/LoginPicture';

function Login() {
    return (
        <div className='login'>
            <LoginPicture
                image = "assets/images/login_background.png"
                alt = "Image de fond"
            />
            <div>
                <h1>Log In</h1>
                <LoginInput 
                    label ="Adresse e-mail"
                    name = "email"
                    required = {true}
                    type = "text"
                    placeholder = "Ecrivez ici"
                />
                <LoginInput 
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