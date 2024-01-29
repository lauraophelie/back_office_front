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
      </Routes>
      </Router>
    </>
  )
}

export default App;
