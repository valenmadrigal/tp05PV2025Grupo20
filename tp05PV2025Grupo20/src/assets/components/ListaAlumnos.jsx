import { Link } from 'react-router-dom';
import{useEffect, useState} from 'react';

export default function ListaAlumnos() {
  // Ejemplo de datos de alumnos (puedes reemplazarlo por datos reales o props)
  const [alumnos,setAlumnos] =useState([]);

  useEffect(()=>{
const data =JSON.parse(localStorage.getItem('alumnos'))||[];
setAlumnos(data);
  }, []);



  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Email</th>
            <th>Domicilio</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, idx) => (
            <tr key={idx}>
              <td>{alumno.lu}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.curso}</td>
              <td>{alumno.email}</td>
              <td>{alumno.domicilio}</td>
              <td>{alumno.telefono}</td>
              <td>
                <Link to={`/alumnos/${alumno.lu}`}>Ver</Link>{" | "}
                <Link to={`/alumnos/${alumno.lu}/editar`}>Editar</Link>{" | "}
                <button onClick={() => alert("Eliminar alumno")}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}