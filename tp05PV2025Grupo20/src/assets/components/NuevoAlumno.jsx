export default function NuevoAlumno() {
  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form>
        <input type="text" placeholder="LU" required /><br />
        <input type="text" placeholder="Nombre" required /><br />
        <input type="text" placeholder="Apellido" required /><br />
        <input type="text" placeholder="Curso" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="text" placeholder="Domicilio" required /><br />
        <input type="text" placeholder="Teléfono" required /><br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}