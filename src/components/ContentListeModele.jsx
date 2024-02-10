import '../assets/scss/app.scss'
import AdminBox from './AdminBox'
import Button from './Button'
import FiltreBox from './FiltreBox'
import TableModele from './TableModele'
import Title from './Title'

function ContentListeModele(props){
    const {data} = props

    return(
        <div className="content">
            <div className='content__inline'>
                <Title
                    className = "content__title"
                    title = "Liste des modèles"
                />
                <AdminBox
                    name = "NomAdmin"
                    mail = "mail@Admin"
                    image = "assets/profil/profil_1.png"
                />
            </div>
            <div className='filter__boxes'>
                <FiltreBox
                    text = "Recherche par nom"
                    icon = ""
                    className = "box_filter"
                />
                <FiltreBox
                    text = "Filtrer par marque"
                    icon = ""
                    className = "box_filter"
                />
                <Button 
                    className="button__add"
                    text="Ajouter un modèle"
                />
            </div>
            <TableModele
                data = {data}
            />
        </div>
    )
}

export default ContentListeModele