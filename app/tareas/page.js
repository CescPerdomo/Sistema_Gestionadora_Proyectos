"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
// Supongamos que tienes una función getTasks en services/api.js que retorna datos mock
import { getTasks } from "@/services/api";

export default function TareasPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message || "Error al cargar las tareas"));
  }, []);

  if (error) {
    return (
      <div className="container">
        <h1 className="my-4">Tareas</h1>
        <p className="text-danger">Hubo un problema: {error}</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="container">
        <h1 className="my-4">Tareas</h1>
        <p>Cargando tareas...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="my-4">Tareas</h1>
      <div className="row">
        {tasks.map((t) => (
          <div key={t.id} className="col-md-4 mb-4">
            <Card
              title={t.title}
              description={t.description}
              image={t.image} // Si las tareas tienen imagen, o puedes omitirlo
              footer={
                <button className="btn btn-custom-teal w-100">Ver detalles</button>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
