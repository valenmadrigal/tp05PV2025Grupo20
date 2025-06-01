import React, { useState } from 'react'; // Importa useState
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../css/logo.png'; // Importa el logo

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú móvil está abierto

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambia el estado de menuOpen a su contrario
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}> {/* Cierra el menú al hacer clic en el logo */}
          <img src={logo} alt="Logo" className="logo-image" />
          <span>Gestión Escolar</span>
        </Link>
      </div>

      {/* Botón de hamburguesa. Visible solo en pantallas pequeñas gracias al CSS. */}
      {/* Añade la clase 'open' cuando el menú está abierto para cambiar el icono */}
      <button className={`hamburger-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      {/* Lista de enlaces. Su visibilidad se controla con el estado 'menuOpen' y el CSS. */}
      {/* Añade la clase 'active' cuando el menú está abierto */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/ListaAlumnos" className="nav-link" onClick={() => setMenuOpen(false)}>Alumnos</Link></li>
        <li><Link to="/NuevoAlumno" className="nav-link" onClick={() => setMenuOpen(false)}>Nuevo Alumno</Link></li>
        <li><Link to="/Acerca" className="nav-link" onClick={() => setMenuOpen(false)}>Acerca de</Link></li>
      </ul>
    </nav>
  );
}