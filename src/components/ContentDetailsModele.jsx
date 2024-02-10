function ContentDetailsModele(props){
    return(
        <tr className={props.className}>
            <td>{props.categorie}</td>
            <td>{props.boiteVitesse}</td>
            <td>{props.energie}</td>
        </tr>
    )
}

export default ContentDetailsModele