import ContentAjoutModele from "../components/ContentAjoutModele";
import NavBar from "../components/NavBar";

import '../assets/scss/app.scss'

function AjoutModel(){
    const marques = [
        { id: 1, name: 'Marque 1' },
        { id: 2, name: 'Marque 2' },
        { id: 3, name: 'Marque 3' }
      ];

    const categories = [
        { id: 1, name: 'Catégorie 1' },
        { id: 2, name: 'Catégorie 2' },
        { id: 3, name: 'Catégorie 3' },
        { id: 4, name: 'Catégorie 4' }
      ];

    const energie = [
        { id: 1, name: 'Energie 1' },
        { id: 2, name: 'Energie 2' },
        { id: 3, name: 'Energie 3' }
      ];

    const boiteVitesse = [
        { id: 1, name: 'BV 1' },
        { id: 2, name: 'BV 2' },
        { id: 3, name: 'BV 3' }
      ];
    return(
        < div className="body">
            <NavBar/>
            <ContentAjoutModele
                listeMarque = {marques}
                categories = {categories}
                energie = {energie}
                boiteVitesse = {boiteVitesse}
            />
        </div>
    )
}

export default AjoutModel