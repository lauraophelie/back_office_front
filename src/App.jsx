import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AjoutMarque from './pages/AjoutMarque';
// './App.scss'
import AjoutModel from './pages/AjoutModele';
import DetailsAnnonce from './pages/DetailsAnnonce';
import DetailsModele from './pages/DetailsModele';
import ListeAnnonce from './pages/ListeAnnonce';
import ListeMarque from './pages/ListeMarque';
import ListeModele from './pages/ListeModele';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/ajoutModele" element={<AjoutModel />} />
          <Route path="/listeModele" element={<ListeModele />} />
          <Route path="/detailsModele" element={<DetailsModele/>} />
          <Route path="/listeMarque" element={<ListeMarque/>} />
          <Route path="/listeAnnonces" element={<ListeAnnonce/>} />
          <Route path="/detailsAnnonce" element={<DetailsAnnonce/>} />
          <Route path="/ajoutMarque" element={<AjoutMarque/>} />
          <Route path="/logout" element={<Logout/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App;
