// src/components/Home.jsx
import { Link } from 'react-router-dom';
import  '../css/home.css'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Sistema de Gestión de Alumnos</h1>
        <p>Bienvenido al panel de administración escolar</p>
      </header>

      <section className="home-features">
        <div className="feature-card">
          <h2>Listado Completo</h2>
          <p>Visualiza y gestiona todos los alumnos registrados</p>
          <Link to="/ListaAlumnos" className="feature-button">Ver Alumnos</Link>
        </div>

        <div className="feature-card">
          <h2>Nuevo Registro</h2>
          <p>Agrega nuevos alumnos al sistema</p>
          <Link to="/NuevoAlumno" className="feature-button">Agregar Alumno</Link>
        </div>

        <div className="feature-card">
          <h2>Estadísticas</h2>
          <p>Consulta reportes y análisis de datos</p>
          <button className="feature-button" disabled>Próximamente</button>
        </div>
      </section>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Trabajo Practico N*5 </p>
      </footer>
    </div>
  );
}