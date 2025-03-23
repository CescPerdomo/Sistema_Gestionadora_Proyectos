"use client";
import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { getTasks } from "@/services/api";

export default function TareasPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message || "Error al cargar las tareas"));
  }, []);

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

  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setShowModal(false);
  };

  return (
    <ProtectedRoute allowedRoles={[]}>
      <div className="container">
        <h1 className="my-4">Tareas</h1>
        <div className="row">
          {tasks.map((t) => (
            <div key={t.id} className="col-md-4 mb-4">
              <Card
                title={t.title}
                description={t.description}
                image={t.image} // Si las tareas tienen imagen; de lo contrario, omite esta prop
                footer={
                  <button
                    className="btn btn-custom-teal w-100"
                    onClick={() => handleOpenModal(t)}
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
          show={showModal}
          title="Detalles de la tarea"
          onClose={handleCloseModal}
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
      </div>
    </ProtectedRoute>
  );
}


