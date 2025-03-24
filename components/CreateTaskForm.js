"use client";

import { useState } from "react";
import FormInput from "@/components/FormInput"; // asegurarse de tener este componente previamente creado

export default function CreateTaskForm({ onCreate, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // se crea un nuevo objeto tarea
    const newTask = {
      id: Date.now(), // se genera un ID único simulado
      title,
      description,
      dueDate,
      image: "./img/nuevatarea.jpg", // Imagen por defecto para nueva tarea
      details: "", // Información adicional, esto se puede actualizar después
    };
    onCreate(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Título de la Tarea"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        <label htmlFor="dueDate" className="form-label">
          Fecha de Vencimiento
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          Crear Tarea
        </button>
      </div>
    </form>
  );
}
