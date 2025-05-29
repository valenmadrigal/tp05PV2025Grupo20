import { useState } from 'react';

export default function NuevoAlumno() {
  const [form, setForm] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const alumnos=JSON.parse(localStorage.getItem('alumnos'))||[];
   
    alumnos.push(form);
    localStorage.setItem('alumnos',JSON.stringify(alumnos));
    alert('Alumno guardado correctamente');
    setForm({
      lu: '',
      nombre: '',
      apellido: '',
      curso: '',
      email: '',
      domicilio: '',
      telefono: ''
    });

    // Aquí deberías agregar el alumno al array global o a un backend
  };

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="lu" placeholder="LU" value={form.lu} onChange={handleChange} required /><br />
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required /><br />
        <input type="text" name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} required /><br />
        <input type="text" name="curso" placeholder="Curso" value={form.curso} onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
        <input type="text" name="domicilio" placeholder="Domicilio" value={form.domicilio} onChange={handleChange} required /><br />
        <input type="text" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required /><br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}