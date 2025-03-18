"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/api";
import Card from "@/components/Card";
import Table from "@/components/Table"; //se importara si es que llegara a usar solo se declara

export default function ProyectosPage() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        setError(err.message || "Error al cargar los proyectos");
      });
  }, []);

  // Manejo de error, auque opcional
  if (error) {
    return (
      <div className="container">
        <h1 className="my-4">Proyectos</h1>
        <p className="text-danger">Hubo un problema: {error}</p>
      </div>
    );
  }

  // Manejo de estado de carga
  if (projects.length === 0) {
    return (
      <div className="container">
        <h1 className="my-4">Proyectos</h1>
        <p>Cargando proyectos...</p>
      </div>
    );
  }

// se Define las columnas de la tabla, si se llegaran a usar
const columns = ["ID", "Nombre", "Descripción"];

// Función para renderizar cada fila de la tabla en caso de usarla 
const renderRow = (proyecto) => (
  <>
    <td>{proyecto.id}</td>
    <td>{proyecto.name}</td>
    <td>{proyecto.description}</td>
  </>
);


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
                  Ver detalles
                </button>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
