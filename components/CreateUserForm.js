"use client";
import { useState } from "react";
import FormInput from "@/components/FormInput";

export default function CreateUserForm({ onCreate, onCancel }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("miembro"); // Valor por defecto

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos la creación de usuario con un ID generado
    const newUser = {
      id: Date.now(), // Simula un ID único
      username,
      email,
      role,
    };
    onCreate(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Nombre de Usuario"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Rol
        </label>
        <select
          className="form-select"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="gerente">Gerente</option>
          <option value="miembro">Miembro</option>
        </select>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          Crear Usuario
        </button>
      </div>
    </form>
  );
}
