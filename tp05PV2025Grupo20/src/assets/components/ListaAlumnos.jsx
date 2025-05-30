import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import '../css/listaAlu.css'
// Componente AlumnoCard (definido dentro del mismo archivo)
function AlumnoCard({ alumno }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Col md={4} sm={6} xs={12} className="mb-4"> {/* Columnas responsivas de Bootstrap */}
      <div className={`card-flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-flip-inner">
          {/* Parte delantera de la tarjeta */}
          <Card className="card-flip-front border-primary">
            <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
              <Card.Title as="h5" className="mb-0">{alumno.nombre} {alumno.apellido}</Card.Title>
              <Card.Text className="text-muted">Haz clic para ver más detalles</Card.Text>
            </Card.Body>
          </Card>

          {/* Parte trasera de la tarjeta */}
          <Card className="card-flip-back border-info bg-light">
            <Card.Body>
              <Card.Title as="h6" className="text-primary">{alumno.nombre} {alumno.apellido}</Card.Title>
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item><strong>LU:</strong> {alumno.lu}</ListGroup.Item>
                <ListGroup.Item><strong>Curso:</strong> {alumno.curso}</ListGroup.Item>
                <ListGroup.Item><strong>Email:</strong> {alumno.email}</ListGroup.Item>
                <ListGroup.Item><strong>Domicilio:</strong> {alumno.domicilio}</ListGroup.Item>
                <ListGroup.Item><strong>Teléfono:</strong> {alumno.telefono}</ListGroup.Item>
              </ListGroup>
              <div className="d-flex justify-content-around">
                <Link to={`/alumnos/${alumno.lu}`} className="btn btn-sm btn-outline-primary">Volver</Link>
                <Link to={`/alumnos/${alumno.lu}/editar`} className="btn btn-sm btn-outline-secondary">Editar</Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que se voltee la tarjeta al hacer clic en el botón
                    alert(`Eliminar a ${alumno.nombre} ${alumno.apellido}`);
                  }}
                >
                  Eliminar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Col>
  );
}

// Componente principal ListaAlumnos
export default function ListaAlumnos() {
  const alumnos = [
   
    {
      lu: "APU00102",
      nombre: "Pedro",
      apellido: "Ramírez",
      curso: "Cuarto",
      email: "pedro.r@mail.com",
      domicilio: "Bv. Oroño 500",
      telefono: "3886789012"
    },
    {
      lu: "APU00102",
      nombre: "Pedro",
      apellido: "Ramírez",
      curso: "Cuarto",
      email: "pedro.r@mail.com",
      domicilio: "Bv. Oroño 500",
      telefono: "3886789012"
    },
    {
      lu: "APU00102",
      nombre: "Pedro",
      apellido: "Ramírez",
      curso: "Cuarto",
      email: "pedro.r@mail.com",
      domicilio: "Bv. Oroño 500",
      telefono: "3886789012"
    }
    
  ];

  return (
    <Container className="mt-5">
    
      <h2 className="mb-4 text-center">Lista de Alumnos</h2>
      <Row>
        {alumnos.map((alumno) => (
          <AlumnoCard key={alumno.lu} alumno={alumno} />
        ))}
      </Row>
    </Container>
  );
}