import '../assets/scss/app.scss'
import Button from './Button'
import FiltreBox from './FiltreBox'
import TableModele from './TableModele'

function ContentListeModele(){
    return(
        <div className="content">
            <h1>Liste des modèles</h1>
            <AdminBox
                name = "Nom admin"
                mail = "mail admin"
                image = "assets/profil/profil_1"
            />
            <FiltreBox
                text = "Recherche par nom"
                icon = "fa fa-search"
            />
            <FiltreBox
                text = "Filtrer par marque"
                icon = ""
            />
            <Button 
                className="button__add"
                text="Ajouter un modèle"
            />
            <TableModele/>
        </div>
    )
}

export default ContentListeModele