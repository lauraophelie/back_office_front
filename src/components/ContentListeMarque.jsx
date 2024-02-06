import '../assets/scss/app.scss'
import AdminBox from './AdminBox'
import Button from './Button'
import FiltreBox from './FiltreBox'
import TableModele from './TableModele'

function ContentListeMarque(props){
    const {data} = props

    return(
        <div className="content">
            <h1>Liste des modèles</h1>
            <AdminBox
                name = "Nom admin"
                mail = "mail admin"
                image = "assets/profil/profil_1"
            />
            <div className='filter__boxes'>
                <FiltreBox
                    text = "Recherche par nom"
                    icon = "fa fa-search"
                    className = "box_filter"
                />
                <FiltreBox
                    text = "Filtrer par marque"
                    icon = "fa fa-dropdown"
                    className = "box_filter"
                />
                <Button 
                    className="button__add"
                    text="Ajouter un modèle"
                />
            </div>
            <TableMarque
                data = {data}
            />
        </div>
    )
}

export default ContentListeMarque