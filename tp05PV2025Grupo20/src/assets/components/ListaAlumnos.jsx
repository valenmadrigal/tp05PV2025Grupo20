import { Link } from 'react-router-dom';

export default function ListaAlumnos() {
  // Ejemplo de datos de alumnos (puedes reemplazarlo por datos reales o props)
  const alumnos = [
    {
      lu: "APU00999",
      nombre: "María Eugenia",
      apellido: "Diaz",
      curso: "Tercero",
      email: "mariadiaz@mail.com",
      domicilio: "Av. Congreso 125",
      telefono: "3884895999"
    }
    // Puedes agregar más alumnos aquí
  ];

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