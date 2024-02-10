import Button from './Button'
import Title from './Title'

import '../assets/scss/app.scss'
import AdminBox from './AdminBox'

function ContentDetailsMarque(props){
    const {marque, modeles} = props

    return (
        <div className='content'>
            <div className='content__inline'>
                <Title
                    className = "content__title"
                    title = {marque}
                />
                <AdminBox
                    name = "NomAdmin"
                    mail = "mail@Admin"
                    image = "assets/profil/profil_1.png"
                />
            </div>
            <div className='content__details'>Liste des modèles associés à cette marque</div>
            <div className='content__modeles'>
                {modeles.map((item) => (
                    <Button 
                        className = 'content__modeles__bloc'
                        text = {item.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ContentDetailsMarque