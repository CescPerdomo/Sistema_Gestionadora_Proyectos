"use client";
import { useState, useEffect } from "react";
import { getProjects } from "@/services/api";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProyectosPage() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) =>
        setError(err.message || "Error al cargar los proyectos")
      );
  }, []);

  if (error) {
    return (
      <ProtectedRoute allowedRoles={[]}>
        <div className="container">
          <h1 className="my-4">Proyectos</h1>
          <p className="text-danger">Hubo un problema: {error}</p>
        </div>
      </ProtectedRoute>
    );
  }

  if (projects.length === 0) {
    return (
      <ProtectedRoute allowedRoles={[]}>
        <div className="container">
          <h1 className="my-4">Proyectos</h1>
          <p>Cargando proyectos...</p>
        </div>
      </ProtectedRoute>
    );
  }

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <ProtectedRoute allowedRoles={[]}>
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
        <Modal show={showModal} title="Disponibilidad" onClose={handleCloseModal}>
          {selectedProject ? (
            <p>
              Ejemplo de disponibilidad para <strong>{selectedProject.name}</strong>.
            </p>
          ) : (
            <p>Cargando información...</p>
          )}
        </Modal>
      </div>
    </ProtectedRoute>
  );
}


