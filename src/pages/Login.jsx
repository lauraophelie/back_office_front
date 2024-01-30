import React, { useState, useContext } from 'react';

import axios from 'axios';

import {usehistory} from'react-router-dom';
import { SessionContext } from './SessionContext';

import LoginButton from '../components/LoginButton';
import InputComponent from '../components/InputComponent'
import LoginPicture from '../components/LoginPicture';

import '../assets/scss/login.scss'

function Login() {
    const [password, setPassword] = useState("0");
    const [email, setEmail] = useState("admin");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
       };
       
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
       };

    const history = usehistory();

    const handleSubmit = (event) => {
        const { setSession } = useContext(SessionContext);

        event.preventDefault();
        // Ici, vous pouvez envoyer les données du formulaire à votre serveur
        console.log(`Password: ${password}, Email: ${email}`);
        axios.post('https://voiturebackendrelationnel-production.up.railway.app/rest/auth/login', {
        email: {email},
        password:  {password}
       })
       .then((response) => {
        console.log(response.data);
        const userSession = {
            id: response.data.id,
            username: response.data.nom,
            token: response.data.token
        };

        setSession(userSession);
        
        history.push('/ListeModele')
       })
       .catch((error) => {
        console.error(error);
       });
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
                        value = {email}
                        placeholder = "Ecrivez ici"
                    />
                    <InputComponent
                        label ="Mot de passe"
                        name = "password"
                        onChange={handlePasswordChange}
                        required = {true}
                        type = "text"
                        value = {password}
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