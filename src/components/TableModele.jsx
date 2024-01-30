import ColumnListeModele from "./ColumnListeModele"
import RowListeModele from "./RowListeModele"

function TableModele(){
    const data =[
        {id:1 , marque: "Marque A", modele: "Modèle A"},
        {id:1 , marque: "Marque A", modele: "Modèle A"},
        {id:1 , marque: "Marque A", modele: "Modèle A"}
    ]
    return(
        <table className="table__modele">
            <ColumnListeModele/>
            {data.map((item) => (
                <RowListeModele
                    className = "row__modele"
                    modeleClassName = "text__colored"
                    linkClassName = "link__text"
                    link ="/DetailsModele"
                    id = {item.id}
                    marque = {item.marque}
                    modele = {item.modele}
                />
            ))}
        </table>
    )
}

export default TableModele