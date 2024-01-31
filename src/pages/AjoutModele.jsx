import ContentAjoutModele from "../components/ContentAjoutModele";
import NavBar from "../components/NavBar";

function AjoutModel(){
    return(
        <body>
            <div className="app__container">
                <NavBar/>
                <ContentAjoutModele/>
            </div>
        </body>
    )
}

export default AjoutModel