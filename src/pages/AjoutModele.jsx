import ContentAjoutModele from "../components/ContentAjoutModele";
import NavBar from "../components/NavBar";

import '../assets/scss/app.scss'

function AjoutModel(){
    return(
        < div className="body">
            <NavBar/>
            <ContentAjoutModele/>
        </div>
    )
}

export default AjoutModel