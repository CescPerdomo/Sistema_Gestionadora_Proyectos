"use client";

export default function Sidebar() {
  return (
    <aside className="bg-light p-3 vh-100">
      <h4 className="mb-4">Modulo de Interaccion</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a className="nav-link" href="/dashboard">
            <i className="bi bi-speedometer2 me-2"></i> {/* Icono de Bootstrap Icons */}Calendario</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="/proyectos">Grupos de Trabajo</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="/tareas">Sitios web de interes</a>
        </li>
      </ul>
    </aside>
  );
}
