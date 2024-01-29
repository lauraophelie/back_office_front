import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// './App.scss'
import AjoutModel from './pages/AjoutModele';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/ajoutModel" element={<AjoutModel />} />
          <Route path="/listeModele" element={<ListModel />} />
          <Route path="/detailsModele" element={<DetailsModel/>} />
          <Route path="/listeMarque" element={<></>} />
          <Route path="/listeAnnonces" element={<></>} />
          <Route path="/detailsAnnonce" element={<></>} />
          <Route path="/ajoutMarque" element={<></>} />
          <Route path="/logout" element={<></>} />
      </Routes>
      </Router>
    </>
  )
}

export default App;
