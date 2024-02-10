import React, { useState } from 'react';

import axios from 'axios';

import Cookies from 'js-cookie';

import {useNavigate} from'react-router-dom';

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

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Password: ${password}, Email: ${email}`);
        axios.post('https://voiturebackendrelationnel-production.up.railway.app/rest/auth/login', {
        email,password
       })
       .then((response) => {
        console.log(response.data);

        Cookies.set('email', email);
        Cookies.set('token', response.data.token);
        navigate('/ListeModele')
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
                    <input className="login__button" type="submit" 
                        value = "Se connecter"
                    />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;