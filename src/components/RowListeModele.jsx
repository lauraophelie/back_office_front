import { Link } from "react-router-dom"

function RowListeModele(props){
    return(
        <tr className={props.className}>
            <td>{props.id}</td>
            <td className={props.modeleClassName}>{props.nom}</td>
            <td>{props.marque}</td>
            <td className={props.linkClassName}><Link to = {props.link}>Details</Link></td>
        </tr>
    )
}

export default RowListeModele