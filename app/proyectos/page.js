"use client";
import { useState, useEffect } from "react";
import { getProjects } from "@/services/api";
import Card from "@/components/Card";
import Modal from "@/components/Modal";

export default function ProyectosPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  // el metodo useEffect para cargar proyectos (mock o reales (alonso))
  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message || "Error al cargar los proyectos"));
  }, []);

  // Manejo de error
  if (error) {
    return (
      <div className="container">
        <h1 className="my-4">Proyectos</h1>
        <p className="text-danger">Hubo un problema: {error}</p>
      </div>
    );
  }

  // Estado de carga
  if (projects.length === 0) {
    return (
      <div className="container">
        <h1 className="my-4">Proyectos</h1>
        <p>Cargando proyectos...</p>
      </div>
    );
  }

  // Funciones para manejar la apertura y cierre del modal
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1 className="my-4">Proyectos</h1>

      <div className="row">
        {projects.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <Card
              title={p.name}
              description={p.description}
              image={p.image}
              footer={
                //Botón que abre el modal al hacer click
                <button
                  className="btn btn-custom-teal w-100"
                  onClick={() => handleOpenModal(p)}
                >
                  Ver disponibilidad
                </button>
              }
            />
          </div>
        ))}
      </div>

      {/* Renderizado del modal si showModal resultad ser true */}
      <Modal
        show={showModal}
        title="Disponibilidad"
        onClose={handleCloseModal}
      >
        {selectedProject ? (
          <p>
            Ejemplo de disponibilidad para <strong>{selectedProject.name}</strong>.
            {/* Esta sección es para mostrar fechas, 
              número de miembros disponibles, se puede seguir agregando etc. 
            */}
          </p>
        ) : (
          <p>Cargando información...</p>
        )}
      </Modal>
    </div>
  );
}

