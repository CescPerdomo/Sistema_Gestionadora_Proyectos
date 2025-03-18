"use client";

export default function Sidebar() {
  return (
    <aside className="bg-light p-3 vh-100">
      <h4 className="mb-4">Modulo de Interaccion</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a className="nav-link" href="/dashboard">
            <i className="bi bi-speedometer2 me-2"></i> {/* Icono de Bootstrap Icons */}Centro de Control</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="/proyectos">Desarrollo de Soluciones</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="/tareas">Actividades Asignadas</a>
        </li>
      </ul>
    </aside>
  );
}
