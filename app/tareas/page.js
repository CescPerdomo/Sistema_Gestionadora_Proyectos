"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { getTasks } from "@/services/api";

// Componente principal
export default function TareasPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
// Funciones
  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message || "Error al cargar las tareas"));
  }, []);
// Manejo de error
  if (error) {
    return (
      <div className="container">
        <h1 className="my-4">Tareas</h1>
        <p className="text-danger">Hubo un problema: {error}</p>
      </div>
    );
  }
// Estado de carga
  if (tasks.length === 0) {
    return (
      <div className="container">
        <h1 className="my-4">Tareas</h1>
        <p>Cargando tareas...</p>
      </div>
    );
  }

  // Funciones para abrir y cerrar el modal
  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setShowModal(false);
  };
  // Renderizado
  return (
    <div className="container">
      <h1 className="my-4">Tareas</h1>
      <div className="row">
        {tasks.map((t) => (
          <div key={t.id} className="col-md-4 mb-4">
            <Card
              title={t.title}
              description={t.description}
              image={t.image}  // Si las tareas tienen imagen, de lo contrario omite esta prop
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
  );
}

