"use client";
import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { getTasks } from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import CreateTaskForm from "@/components/CreateTaskForm";

export default function TareasPage() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch((err) =>
        setError(err.message || "Error al cargar las tareas")
      );
  }, []);

  const handleOpenDetailsModal = (task) => {
    setSelectedTask(task);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setSelectedTask(null);
    setShowDetailsModal(false);
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
    handleCloseCreateModal();
  };

  if (error) {
    return (
      <ProtectedRoute allowedRoles={[]}>
        <div className="container">
          <h1 className="my-4">Tareas</h1>
          <p className="text-danger">Hubo un problema: {error}</p>
        </div>
      </ProtectedRoute>
    );
  }

  if (tasks.length === 0) {
    return (
      <ProtectedRoute allowedRoles={[]}>
        <div className="container">
          <h1 className="my-4">Tareas</h1>
          <p>Cargando tareas...</p>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute allowedRoles={[]}>
      <div className="container">
        <h1 className="my-4">Tareas</h1>
        
        {(user?.role === "admin" || user?.role === "gerente") && (
          <div className="mb-4">
            <button className="btn btn-custom-yellow" onClick={handleOpenCreateModal}>
              Crear Tarea
            </button>
          </div>
        )}
          
        <div className="row">
          {tasks.map((t) => (
            <div key={t.id} className="col-md-4 mb-4">
              <Card
                title={t.title}
                description={t.description}
                image={t.image}
                footer={
                  <button
                    className="btn btn-custom-teal w-100"
                    onClick={() => handleOpenDetailsModal(t)}
                  >
                    Ver detalles
                  </button>
                }
              />
            </div>
          ))}
        </div>

        {/* Modal para mostrar detalles de la tarea */}
        <Modal
          show={showDetailsModal}
          title="Detalles de la Tarea"
          onClose={handleCloseDetailsModal}
        >
          {selectedTask ? (
            <p>
              Detalles para <strong>{selectedTask.title}</strong>:{" "}
              {selectedTask.details || "Información adicional de la tarea."}
            </p>
          ) : (
            <p>Cargando información...</p>
          )}
        </Modal>

        {/* Modal para crear una nueva tarea */}
        <Modal
          show={showCreateModal}
          title="Crear Tarea"
          onClose={handleCloseCreateModal}
        >
          <CreateTaskForm onCreate={handleCreateTask} onCancel={handleCloseCreateModal} />
        </Modal>
      </div>
    </ProtectedRoute>
  );
}


