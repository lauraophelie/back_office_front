import '../assets/scss/app.scss'
import ContentDetailsMarque from '../components/ContentDetailsMarque';
import NavBar from '../components/NavBar'

function DetailsMarque(){
    const marque = "Nom marque"

    const modeles = [
        { id: 1, name: 'Modele 1'},
        { id: 2, name: 'Modele 2'},
        { id: 3, name: 'Modele 3'},
        { id: 4, name: 'Modele 4'},
        { id: 5, name: 'Modele 5'},
        { id: 6, name: 'Modele 6'},
        { id: 7, name: 'Modele 7'},
        { id: 8, name: 'Modele 8'},
        { id: 9, name: 'Modele 9'}
    ];

    return(
        <>
            <NavBar/>
            <ContentDetailsMarque
                marque = {marque}
                modeles = {modeles}
            />
        </>
    )
}

export default DetailsMarque