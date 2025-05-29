import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './assets/components/NavBar';
import Home from './assets/components/home';  // Ahora importado desde components
import ListaAlumnos from './assets/components/ListaAlumnos'; //estoy viendo  como  va
import NuevoAlumno from './assets/components/NuevoAlumno';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={<ListaAlumnos />} /> {/* <-- agregado ahora mismo */}
         <Route path="/alumnos/nuevo" element={<NuevoAlumno />} /> {/* <-- Cambiado */}
        </Routes>
      </div>
    </Router>
  );
}

 
export default App;