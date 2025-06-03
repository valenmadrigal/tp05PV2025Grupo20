import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/NuevoAlumno.css'; // Asegúrate de tener este CSS para estilos

export default function NuevoAlumno() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });
      
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoAlumno = {
      id: Date.now().toString(), // ID único basado en fecha y hora
      ...formData
    };

    const alumnosGuardados = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnosGuardados.push(nuevoAlumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnosGuardados));

    navigate('/ListaAlumnos');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Agregar Nuevo Alumno</h2>
          <Form onSubmit={handleSubmit}>
            {['nombre', 'apellido', 'curso', 'email', 'domicilio', 'telefono'].map((field) => (
              <Form.Group className="mb-3" controlId={`form${field}`} key={field}>
                <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                <Form.Control
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={`Ingrese el ${field}`}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                />
              </Form.Group>
            ))}
                     <Form.Check 
                     type="checkbox"
                    className="mb-3"
                    id="datosConfirmados"
                   label="Confirmo que los datos ingresados son correctos"
                   checked={aceptaTerminos}
                  onChange={(e) => setAceptaTerminos(e.target.checked)}
                  />
                   
           
            <Button variant="primary" type="submit" className="w-100 mt-3" disabled={!aceptaTerminos}>
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
