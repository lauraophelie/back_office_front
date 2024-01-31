import NavBar from '../components/NavBar'

function AjoutMarque(){
    return(
        <body>
            <div className="app__container">
                <NavBar/>
                <div className="add__marque__container">
                    <div className="profil__container">
                        <img src="" alt="profil" />
                        <div className="detail">
                            <p className="nameprofil">Nom profil</p>
                            <p className="emailprofil">Email</p>
                        </div>
                    </div>
                    <div className="add__box">
                        <h2>Ajouter une marque</h2>
                        <form action="" className='form__add'>
                            <label htmlFor="add_marque" className="label" id="labeladd">Nom de la marque</label>
                            <input type="text" name="add_marque" id="add_marque" className="input__text" placeholder='Ecrire ici'/>

                        </form>
                        <button type="submit" className='add__btn'>Ajouter</button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default AjoutMarque