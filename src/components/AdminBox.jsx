function AdminBox(props){
    const {name, mail, image} = props

    return(
        <div className="admin__box">
            <div className="admin__image">
                <img src={image} alt="Image profil" />
            </div>
            <div className="admin__name">{ name }</div>
            <div className="admin__mail">{ mail }</div>
        </div>
    )
}

export default AdminBox