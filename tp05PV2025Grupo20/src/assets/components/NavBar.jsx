import { Link } from 'react-router-dom';
import '../../css/NavBar.css';
import logo from '../../css/logo.png'; // Importa el logo

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span>Gestión Escolar</span>
        </Link>
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        <li><Link to="/alumnos" className="nav-link">Alumnos</Link></li>
        <li><Link to="/nuevo-alumno" className="nav-link">Nuevo Alumno</Link></li>
        <li><Link to="/acerca" className="nav-link">Acerca de</Link></li>
      </ul>
    </nav>
  );
}
