import {Link} from 'react-router-dom'

import Button from './Button'

import '../assets/scss/app.scss'

function NavBar(){
    return(
        <div className="navbar">
            <div className="navlink">
                <Link to="/statistique">  <Button  text='Statistiques' icon ='' className = 'navbar_button'/> </Link>
                <Link to="/listeMarque">  <Button  text='Marque' icon ='' className = 'navbar_button'/> </Link>
                <Link to="/listeModele">  <Button  text='Modèle' icon ='' className = 'navbar_button'/> </Link>
                <Link to="/typeVitesse">  <Button  text='Type de vitesse' icon ='' className = 'navbar_button'/> </Link>
                <Link to="/typeEnergie">  <Button  text="Type d'energie" icon ='' className = 'navbar_button'/> </Link>
                <Link to="/listeAnnonces">  <Button  text='Annonces' icon ='' className = 'navbar_button'/> </Link>
            </div>
            <Link to="/logout">  <Button  text='Se déconnecter' icon ='' className = 'navbar_button_logout'/> </Link>
        </div>
    )
}
export default NavBar;