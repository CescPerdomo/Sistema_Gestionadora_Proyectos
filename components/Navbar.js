// components/Navbar.js
"use client";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Gestión Proyectos</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tareas">Tareas</a>
            </li>
          </ul>

          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text me-3">Buen día, {user.username}</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={logout}>Salir
                </button>
              </>
            ) : (
              <a className="btn btn-custom-yellow" href="/auth/login">Iniciar Sesión</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}


