import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Acerca.css';

import TaliaImg from '../img/Talia.png';
import FrancoImg from '../img/franco.png';
import ValeImg from '../img/vale.png';
import NoeImg from '../img/noe.png';

function Acerca() {
  const integrantes = [
    {
      nombre: "Espejo Talia Selene Marianela",
      rol: "Diseño",
      email: "talia@email.com",
      frase: "Siempre aprendiendo algo nuevo.",
      img: TaliaImg
    },
    {
      nombre: "Arcibia Franco",
      rol: "Programador principal",
      email: "franco@email.com",
      frase: "La lógica es el camino.",
      img: FrancoImg
    },
    {
      nombre: "Madrigal Lucia Valentina",
      rol: "Programador",
      email: "vale@email.com",
      frase: "Si puedes imaginarlo, puedes programarlo.",
      img: ValeImg
    },
    {
      nombre: "Mamani Noe Franco",
      rol: "Programador",
      email: "francinoe3@email.com",
      frase: "El detalle hace la diferencia.",
      img: NoeImg
    },
  ];

  return (
    <div className="container my-5">
      <div className="card p-4 shadow-lg bg-light-subtle dark:bg-dark text-dark dark:text-light">
        <h2 className="text-center mb-4">🎓 Acerca de la Página Web</h2>
        <p className="lead text-center">
          Esta aplicación permite gestionar alumnos, registrar nuevos estudiantes y visualizar la lista completa.
        </p>

        <h3 className="text-center my-4">👥 Integrantes del Grupo n°20</h3>
        <div className="row g-4">
          {integrantes.map((i, idx) => (
            <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 text-center border-info shadow-sm">
                <img
                  src={i.img}
                  alt={i.nombre}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{i.nombre}</h5>
                  <p className="card-text"><strong>Rol:</strong> {i.rol}</p>
                  <p className="card-text"><strong>Email:</strong> {i.email}</p>
                  <blockquote className="blockquote-footer mt-2">{i.frase}</blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <h4>📬 Contacto</h4>
          <p>Email: grupo20@escuela.edu.ar</p>
        </div>

        <div className="text-center text-muted mt-3">
          📅 Año: 2025 | Materia: <strong>PROGRAMACIÓN VISUAL</strong> | Grupo 20
        </div>
      </div>
    </div>
  );
}

export default Acerca;
