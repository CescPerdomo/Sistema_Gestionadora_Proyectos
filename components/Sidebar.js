"use client";
import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";

export default function Sidebar() {
  const [showGrupos, setShowGrupos] = useState(false);
  const [showSitios, setShowSitios] = useState(false);

  const handleOpenGrupos = () => setShowGrupos(true);
  const handleCloseGrupos = () => setShowGrupos(false);

  const handleOpenSitios = () => setShowSitios(true);
  const handleCloseSitios = () => setShowSitios(false);

  return (
    <aside className="bg-light p-3 vh-100">
      <h4>Módulo de Interacción</h4>
      <div className="nav flex-column">
        <li className="nav-item mb-2">
          <Link href="/calendario" className="nav-link">
            Calendario
          </Link>
        </li>
        {/* Grupos de Trabajo */}
        <li className="nav-item mb-2">
          <a className="nav-link" onClick={handleOpenGrupos}>
            Grupos de Trabajo
          </a>
        </li>
        {/* Sitios web de interés */}
        <li className="nav-item mb-2">
          <a className="nav-link" onClick={handleOpenSitios}>
            Sitios web de interés
          </a>
        </li>
      </div>

      {/* Modal para Grupos de Trabajo */}
      <Modal show={showGrupos} title="Grupos de Trabajo" onClose={handleCloseGrupos}>
        <p>Lista de miembros del equipo:</p>
        <ul className="list-unstyled">
          {/* Ejemplo con avatares */}
          <li className="d-flex align-items-center mb-2">
            <img
              src="./img/ava1.jpg"
              alt="Miembro 1"
              className="rounded-circle me-2"
              style={{ width: "32px", height: "32px", objectFit: "cover" }}
            />
            Alonso Marquez
          </li>
          <li className="d-flex align-items-center mb-2">
            <img
              src="./img/ava2.jpg"
              alt="Miembro 2"
              className="rounded-circle me-2"
              style={{ width: "32px", height: "32px", objectFit: "cover" }}
            />
            Cesar Perdomo
          </li>
          <li className="d-flex align-items-center mb-2">
            <img
              src="./img/ava3.jpg"
              alt="Miembro 3"
              className="rounded-circle me-2"
              style={{ width: "32px", height: "32px", objectFit: "cover" }}
            />
            Fabricio Castro
          </li>
        </ul>
      </Modal>

      {/* Modal para Sitios web de interés */}
      <Modal show={showSitios} title="Sitios Web de Interés" onClose={handleCloseSitios}>
        <p>Algunos sitios recomendados:</p>
        <ul>
          <li>
            <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">
              Jira
            </a>
          </li>
          <li>
            <a href="https://trello.com" target="_blank" rel="noopener noreferrer">
              Trello
            </a>
          </li>
          <li>
            <a href="https://asana.com" target="_blank" rel="noopener noreferrer">
              Asana
            </a>
          </li>
        </ul>
      </Modal>
    </aside>
  );
}


