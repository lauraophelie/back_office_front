import Button from './Button'

import '../assets/scss/app.scss'

function NavBar(){
    return(
        <div className="navbar">
            <Button  text='Statistique' icon ='' className = 'navbar_button'/>
            <Button  text='Marque' icon ='' className = 'navbar_button'/>
            <Button  text='Modèle' icon ='' className = 'navbar_button'/>
            <Button  text='Type de vitesse' icon ='' className = 'navbar_button'/>
            <Button  text="Type d'energie" icon ='' className = 'navbar_button'/>
            <Button  text='Annonces' icon ='' className = 'navbar_button'/>
            <Button  text='Se déconnecter' icon ='' className = 'navbar__button__logout'/>
        </div>
    )
}
export default NavBar;