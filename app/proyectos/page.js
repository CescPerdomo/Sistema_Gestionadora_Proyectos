"use client";
import { useState, useEffect } from "react";
import { getProjects } from "@/services/api";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import CreateProjectForm from "@/components/CreateProjectForm";

export default function ProyectosPage() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) =>
        setError(err.message || "Error al cargar los proyectos")
      );
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleCreateProject = (newProject) => {
    // Se añade el nuevo proyecto al listado
    setProjects([...projects, newProject]);
    handleCloseCreateModal();
  };

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

  return (
    <ProtectedRoute allowedRoles={[]}>
      <div className="container">
        <h1 className="my-4">Proyectos</h1>
        
        {/* Mostrar botón "Crear Proyecto" solo para admin o gerencia */}
        {(user?.role === "admin" || user?.role === "gerente") && (
          <div className="mb-4">
            <button
              className="btn btn-custom-yellow"
              onClick={handleOpenCreateModal}
            >
              Crear Proyecto
            </button>
          </div>
        )}

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

        {/* Modal para ver disponibilidad o editar asignaciones (placeholder) */}
        <Modal show={showModal} title="Disponibilidad" onClose={handleCloseModal}>
          {selectedProject ? (
            <p>
              Ejemplo de disponibilidad para{" "}
              <strong>{selectedProject.name}</strong>.
            </p>
          ) : (
            <p>Cargando información...</p>
          )}
        </Modal>

        {/* Modal para crear un nuevo proyecto */}
        <Modal show={showCreateModal} title="Crear Proyecto" onClose={handleCloseCreateModal}>
          <CreateProjectForm onCreate={handleCreateProject} onCancel={handleCloseCreateModal} />
        </Modal>
      </div>
    </ProtectedRoute>
  );
}



