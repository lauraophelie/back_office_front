import {Link} from 'react-router-dom'

import Button from './Button'

import '../assets/scss/app.scss'

function NavBar(){
    return(
        <div className="navbar">
            <div className='navbar_principal'>
                <Link to="/statistique">  <Button  text='Statistique' icon ='assets/icons/material-dashboard.png' imgClassName='navbar_icon' className = 'navbar_principal_button'/> </Link>
                <Link to="/listeMarque">  <Button  text='Marque' icon ='assets/icons/material-branding-watermark.png' imgClassName='navbar_icon' className = 'navbar_principal_button'/> </Link>
                <Link to="/listeModele">  <Button  text='Modèle' icon ='assets/icons/ionic-logo-model-s.png' imgClassName='navbar_icon' className = 'navbar_principal_button'/> </Link>
                <Link to="/typeVitesse">  <Button  text='Type de vitesse' icon ='assets/icons/ionic-ios-speedometer.png' imgClassName='navbar_icon' className = 'navbar_principal_button'/> </Link>
                <Link to="/typeEnergie">  <Button  text="Type d'energie" icon ='assets/icons/map-gas-station.png' imgClassName='navbar_icon' className = 'navbar_principal_button'/> </Link>
                <Link to="/listeAnnonces">  <Button  text='Annonces' icon ='assets/icons/awesome-newspaper.png' imgClassName='navbar_icon' className = 'navbar_principal_button'/> </Link>
            </div>
            <div className='navbar_second'>
                <Link to="/logout">  <Button  text='Se déconnecter' icon ='assets/icons/open-account-logout.png' imgClassName='navbar_icon' className = 'navbar_second_button'/> </Link>
            </div>
        </div>
    )
}
export default NavBar;