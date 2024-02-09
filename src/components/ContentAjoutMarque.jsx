import Button from "./Button";
import AdminBox from "./AdminBox";

import '../assets/scss/app.scss'
import InputContent from "./InputContent";

function ContentAjoutMarque(){
    return(
        <div className="content">
            <div className="content__inline">
                <Title
                    title = "Ajouter un marque "
                    className = "content__title"
                />
                <AdminBox
                    name = "NomAdmin"
                    mail = "mail@Admin"
                    image = "assets/profil/profil_1.png"
                />
            </div>
            <InputContent
                    label ="Nom da la marque"
                    labelClassName = "content__label"
                    className = "content__input"
                    name = "modele"
                    required = {true}
                    type = "text"
                    placeholder = "Ecrivez ici"
                
            />
            <Button
                text = "Ajouter"
                className = "button__second"
            />
        </div>
    )
}

export default ContentAjoutMarque;