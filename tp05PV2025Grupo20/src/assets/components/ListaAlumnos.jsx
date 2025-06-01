import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

export default function ListaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('alumnos')) || [];
    setAlumnos(datos);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`¿Estás seguro de eliminar este alumno?`)) {
      const nuevosAlumnos = alumnos.filter(a => a.id !== id);
      setAlumnos(nuevosAlumnos);
      localStorage.setItem('alumnos', JSON.stringify(nuevosAlumnos));
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Lista de Alumnos</h2>
      {alumnos.length > 0 ? (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.nombre} {alumno.apellido}</td>
                <td className="d-flex gap-2 justify-content-center">
                  <Link to={`/ListaAlumnos/${alumno.id}`} className="btn btn-sm btn-outline-info">Ver</Link>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(alumno.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center">No hay alumnos registrados aún.</p>
      )}
    </Container>
  );
}
