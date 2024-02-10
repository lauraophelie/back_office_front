import { Link } from 'react-router-dom'
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
                {/* <FiltreBox
                    text = "Recherche par nom"
                    icon = ""
                    className = "box_filter"
                /> */}
                <div className="box_filter">
                    <input type="text" placeholder='Recherche par nom'/>
                    <img src="assets/icons/Icon-search.png" alt="searchbtn" className="searchicon" />
                </div>
                <div className="box_filter">
                    <input type="text" placeholder='Recherche par marque'/>
                    <i>Search icon</i>
                </div>
                {/* <FiltreBox
                    text = "Filtrer par marque"
                    icon = ""
                    className = "box_filter"
                /> */}
                <Link to="/ajoutModele">
                <Button 
                    className="button__add"
                    text="Ajouter un modèle"
                /></Link>
            </div>
            <TableModele
                data = {data}
            />
        </div>
    )
}

export default ContentListeModele