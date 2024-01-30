import React, { useState } from 'react';

import LoginButton from '../components/LoginButton';
import InputComponent from '../components/InputComponent'
import LoginPicture from '../components/LoginPicture';

import '../assets/scss/login.scss'

function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
       };
       
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
       };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ici, vous pouvez envoyer les données du formulaire à votre serveur
        console.log(`Password: ${password}, Email: ${email}`);
       };

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
                    <form onSubmit={handleSubmit}>
                    <InputComponent
                        label ="Adresse e-mail"
                        name = "email"
                        onChange={handleEmailChange}
                        required = {true}
                        type = "text"
                        value = "admin"
                        placeholder = "Ecrivez ici"
                    />
                    <InputComponent
                        label ="Mot de passe"
                        name = "password"
                        onChange={handlePasswordChange}
                        required = {true}
                        type = "text"
                        value = "0"
                        placeholder = "Ecrivez ici"
                    />
                    <LoginButton 
                        text = "Se connecter"
                    />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;