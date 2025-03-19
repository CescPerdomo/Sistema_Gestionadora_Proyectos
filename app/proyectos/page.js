"use client";
import { useState, useEffect } from "react";
import { getProjects } from "@/services/api";
import Card from "@/components/Card";

export default function ProyectosPage() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message || "Error al cargar los proyectos"));
  }, []);

  if (error) {
    return (
      <div className="container">
        <h1 className="my-4">Proyectos</h1>
        <p className="text-danger">Hubo un problema: {error}</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="container">
        <h1 className="my-4">Proyectos</h1>
        <p>Cargando proyectos...</p>
      </div>
    );
  }

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
                <button className="btn btn-custom-teal w-100">
                  Ver disponibilidad
                </button>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

