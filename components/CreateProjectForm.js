"use client";
import { useState } from "react";
import FormInput from "@/components/FormInput";

export default function CreateProjectForm({ onCreate, onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // Simulamos una fecha de inicio; en una implementación real se usaría un datepicker.
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // se crea el objeto del proyecto; se pueden agregar más campos si es necesario
    const newProject = {
      id: Date.now(), // esto simula un ID unico
      name,
      description,
      startDate, // solo para propósitos del calendario, se usa esta fecha
      image: "./img/nuevoproyecto.jpg", // Imagen de ejemplo esto corresponde a la API RESt
    };
    onCreate(newProject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Nombre del Proyecto"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormInput
        label="Descripción"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">Fecha de Inicio</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          Crear Proyecto
        </button>
      </div>
    </form>
  );
}
