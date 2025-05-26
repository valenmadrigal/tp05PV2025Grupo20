import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './home';  // Ahora importado desde components
import ListaAlumnos from './ListaAlumnos'; //estoy viendo  como  va
import NuevoAlumno from './NuevoAlumno';

function App2() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-3">
        <h1>Prueba - La aplicación está funcionando</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={<ListaAlumnos />} /> {/* <-- agregado ahora mismo */}
         <Route path="/alumnos/nuevo" element={<NuevoAlumno />} /> {/* <-- Cambiado */}
        </Routes>
      </div>
    </Router>
  );
}

 
export default App2;