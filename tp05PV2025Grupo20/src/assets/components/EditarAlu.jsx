import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'; // Importa useParams
import '../css/NuevoAlumno.css'; // Puedes reutilizar el mismo CSS del formulario

export default function EditarAlu() {
  const { id } = useParams(); // Obtiene el ID del alumno desde la URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });

  // useEffect para cargar los datos del alumno cuando el componente se monta
  useEffect(() => {
    const alumnosGuardados = JSON.parse(localStorage.getItem('alumnos')) || [];
    const alumnoAEditar = alumnosGuardados.find(alumno => alumno.id === id);

    if (alumnoAEditar) {
      setFormData(alumnoAEditar); // Precarga el formulario con los datos del alumno
    } else {
      // Si el alumno no se encuentra (ej. ID inválido), redirige o muestra un error
      alert('Alumno no encontrado');
      navigate('/ListaAlumnos'); // Redirige de vuelta a la lista
    }
  }, [id, navigate]); // Dependencias: recargar si el ID cambia, o si 'navigate' cambia

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const alumnosGuardados = JSON.parse(localStorage.getItem('alumnos')) || [];
    const index = alumnosGuardados.findIndex(alumno => alumno.id === id); // Encuentra el índice del alumno a editar

    if (index !== -1) {
      // Actualiza el alumno en el array
      alumnosGuardados[index] = { ...formData, id: id }; // Asegura que el ID se mantenga el mismo
      localStorage.setItem('alumnos', JSON.stringify(alumnosGuardados));
      alert('Alumno actualizado correctamente.');
      navigate('/ListaAlumnos'); // Redirige a la lista después de guardar
    } else {
      alert('Error: No se pudo encontrar el alumno para actualizar.');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Editar Alumno</h2>
          <Form onSubmit={handleSubmit}>
            {/* Reutilizamos el mismo mapeo de campos que en NuevoAlumno */}
            {['nombre', 'apellido', 'curso', 'email', 'domicilio', 'telefono'].map((field) => (
              <Form.Group className="mb-3" controlId={`form${field}`} key={field}>
                <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                <Form.Control
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={`Ingrese el ${field}`}
                  name={field}
                  required
                  value={formData[field]} // Los valores del formulario se precargan desde formData
                  onChange={handleChange}
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Guardar Cambios {/* Texto del botón cambiado */}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}