import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './assets/components/NavBar';
import Home from './assets/components/home';  // Ahora importado desde components
import ListaAlumnos from './assets/components/ListaAlumnos'; //estoy viendo  como  va
import NuevoAlumno from './assets/components/NuevoAlumno';
import Acerca from './assets/components/Acerca';
import DetallesAlu from './assets/components/DetallesAlu';
function App() {
  return (
    <Router> 
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListaAlumnos" element={<ListaAlumnos />} /> 
         <Route path="/NuevoAlumno" element={<NuevoAlumno />} /> 
       <Route path="/ListaAlumnos/:id" element={<DetallesAlu />} />
          <Route path="/Acerca" element={<Acerca />} />
        </Routes>
      </div>
    </Router>
  );
}

 
export default App;