import Button from "../components/Button";
import CheckBoxMultichoice from "./CheckBoxMultichoice";
import InputComponent from "./InputComponent";
import Select from "./Select";

function ContentAjoutModele(){
    return(
        <div className="content">
            <div className="content__inline">
                <InputComponent
                    label ="Nom du modèle"
                    name = "modele"
                    required = {true}
                    type = "text"
                    placeholder = "Ecrivez ici"
                />
                <Select
                    label = "Marque"
                    name = "marque"
                    default = "Choisissez parmi la liste"
                />
            </div>
            <CheckBoxMultichoice
                label = "Catégorie"
                name = "categorie"
            />
            <CheckBoxMultichoice
                label = "Type d'énergie"
                name = "energie"
            />
            <CheckBoxMultichoice
                label = "Boite de vitesse"
                name = "boite_vitesse"
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