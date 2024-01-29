import NavButton from './NavButton'

function NavBar(){
    return(
        <div className="navbar">
            <NavButton  text='Statistique' icon =''/>
            <NavButton  text='Marque' icon =''/>
            <NavButton  text='Modèle' icon =''/>
            <NavButton  text='Type de vitesse' icon =''/>
            <NavButton  text="Type d'energie" icon =''/>
            <NavButton  text='Annonces' icon =''/>
            <NavButton  text='Se déconnecter' icon =''/>
        </div>
    )
}
export default NavBar;