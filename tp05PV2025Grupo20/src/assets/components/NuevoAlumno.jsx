
import React from 'react';
// Importa los componentes de React-Bootstrap que necesitas
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function NuevoAlumno() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías la lógica de envío del formulario
    console.log('¡Formulario de nuevo alumno enviado!');
    // Típicamente, recolectarías los datos del formulario usando el estado
    // y los enviarías a una API o actualizarías el estado de tu aplicación.
  };

  return (
    // Container de Bootstrap para centrar y añadir espaciado
    <Container className="my-5">
      {/* Row y Col para controlar el ancho y centrar el contenido */}
      <Row className="justify-content-md-center">
        <Col md={6}> {/* Esto hará que el formulario ocupe 6 columnas en pantallas medianas y más grandes */}
          <h2 className="text-center mb-4">Agregar Nuevo Alumno</h2>
          <Form onSubmit={handleSubmit}>
            {/* Campo LU */}
            <Form.Group className="mb-3" controlId="formLU">
              <Form.Label>LU</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el LU" required />
            </Form.Group>

            {/* Campo Nombre */}
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el nombre" required />
            </Form.Group>

            {/* Campo Apellido */}
            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el apellido" required />
            </Form.Group>

            {/* Campo Curso */}
            <Form.Group className="mb-3" controlId="formCurso">
              <Form.Label>Curso</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el curso" required />
            </Form.Group>

            {/* Campo Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese el email" required />
            </Form.Group>

            {/* Campo Domicilio */}
            <Form.Group className="mb-3" controlId="formDomicilio">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el domicilio" required />
            </Form.Group>

            {/* Campo Teléfono */}
            <Form.Group className="mb-3" controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el teléfono" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}