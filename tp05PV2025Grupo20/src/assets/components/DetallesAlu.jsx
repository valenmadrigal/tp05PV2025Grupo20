import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
//.
export default function DetallesAlu() {
  const { id } = useParams();
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    const alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    const encontrado = alumnos.find(a => a.id === id);
    setAlumno(encontrado);
  }, [id]);

  if (!alumno) {
    return <p className="text-center mt-5">Alumno no encontrado.</p>;
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: '30rem' }} className="shadow">
        <Card.Body>
          <Card.Title className="mb-3">{alumno.nombre} {alumno.apellido}</Card.Title>
          <Card.Text><strong>Curso:</strong> {alumno.curso}</Card.Text>
          <Card.Text><strong>Email:</strong> {alumno.email}</Card.Text>
          <Card.Text><strong>Domicilio:</strong> {alumno.domicilio}</Card.Text>
          <Card.Text><strong>Teléfono:</strong> {alumno.telefono}</Card.Text>
          <Button as={Link} to="/ListaAlumnos" variant="secondary" className="mt-3">
            Volver a la Lista
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
