import React from 'react';
import '../css/Acerca.css';

function Acerca() {
  return (
    <div className="acerca-container">
      <div className="acerca-card">
        <h2>🎓 Acerca de la Página Web</h2>
        <p>
          Esta aplicación permite gestionar alumnos, registrar nuevos estudiantes y visualizar la lista completa.
        </p>

        <div className="integrantes-section">
  <h3>👥 Integrantes del Grupo n°20</h3>
  <div className="tarjetas-container">
    <div className="tarjeta-integrante">
      <h4>Espejo Talia Selene Marianela</h4>
      <p>Rol:Diseño</p>
      <p>Email: talia@email.com</p>
      <blockquote>"Siempre aprendiendo algo nuevo."</blockquote>
    </div>

    <div className="tarjeta-integrante">
      <h4>Arcibia Franco </h4>
      <p>Rol: Programador principal</p>
      <p>Email: franco@email.com</p>
      <blockquote>"La lógica es el camino."</blockquote>
    </div>

    <div className="tarjeta-integrante">
      <h4>Madrigal Lucia Valentina </h4>
      <p>Rol: Programador </p>
      <p>Email: vale@email.com</p>
      <blockquote>“si puedes imaginarlo, puedes programarlo”</blockquote>
    </div>

    <div className="tarjeta-integrante">
      <h4>Mamani Noe Franco</h4>
      <p>Rol: Programador</p>
      <p>Email: francinoe3@email.com</p>
      <blockquote>"El detalle hace la diferencia."</blockquote>
    </div>
  </div>
</div>
<br></br>
<h4>Contacto</h4>
<p>Email: grupo20@escuela.edu.ar</p>

        <p className="info-footer">
          📅 Año: 2025 | Materia: <strong>PROGRAMACIÓN VISUAL</strong> | Grupo 20
        </p>
      </div>
    </div>
  );
}

export default Acerca;
