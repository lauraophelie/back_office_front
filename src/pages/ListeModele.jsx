import ContentListeModele from '../components/ContentListeModele';
import NavBar from '../components/NavBar';

import '../assets/scss/app.scss'

function ListeModele(){
    const data =[
        {id:1 , marque: "Marque A", modele: "Modèle A"},
        {id:1 , marque: "Marque A", modele: "Modèle A"},
        {id:1 , marque: "Marque A", modele: "Modèle A"}
    ]

    return(
        < div className="container">
            <NavBar/>
            <ContentListeModele data = {data}/>
        </ div>
    )
}

export default ListeModele