import ColumnListeModele from "./ColumnListeModele"
import RowListeModele from "./RowListeModele"

function TableModele(props){
    const {data} = props
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