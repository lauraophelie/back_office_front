import Button from "../components/Button";
import CheckBoxMultichoice from "./CheckBoxMultichoice";
import Select from "./Select";
import AdminBox from "./AdminBox";
import Title from "./Title";
import InputContent from "./InputContent";

import '../assets/scss/app.scss'

function ContentAjoutModele(props){
    const {listeMarque, categories, energie, boiteVitesse} = props
    
    return(
        <div className="content">
            <div className="content__inline">
                <Title
                    title = "Ajouter un modele "
                    className = "content__title"
                />
                <AdminBox
                    name = "NomAdmin"
                    mail = "mail@Admin"
                    image = "assets/profil/profil_1.png"
                />
            </div>
            <div className="content__inline">
                <InputContent
                    label ="Nom du modèle"
                    labelClassName = "content__label"
                    className = "content__input"
                    name = "modele"
                    required = {true}
                    type = "text"
                    placeholder = "Ecrivez ici"
                />
                <Select
                    selectClassName = "content__input__select"
                    optionClassName = "content__input__option"
                    className = "content__input"
                    data = {listeMarque}
                    label = "Marque"
                    labelClassName = "content__label"
                    name = "marque"
                    default = "Choisissez parmi la liste"
                />
            </div>
            <CheckBoxMultichoice
                label = "Catégorie"
                name = "categorie"
                data = {categories}
            />
            <CheckBoxMultichoice
                label = "Type d'énergie"
                name = "energie"
                data =  {energie}
            />
            <CheckBoxMultichoice
                label = "Boite de vitesse"
                name = "boiteVitesse"
                data = {boiteVitesse}
            />
            <div className="content__inline">
                <Button
                    text = "Annuler"
                    className = "button__second"
                />
                <Button
                    text = "Valider"
                    className = "button__primar"
                />
            </div>
        </div>
    )
}

export default ContentAjoutModele;