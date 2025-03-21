"use client";
import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import CreateUserForm from "@/components/CreateUserForm";
import { getUsers } from "@/services/api";

export default function UsuariosPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message || "Error al cargar usuarios"));
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedUser(null);
    setShowEditModal(false);
  };

  const handleDeleteUser = (id) => {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleCreateUser = (newUser) => {
    setUsers([...users, newUser]);
    handleCloseCreateModal();
  };

  const columns = ["ID", "Usuario", "Email", "Rol", "Acciones"];
  const renderRow = (u) => (
    <>
      <td>{u.id}</td>
      <td>{u.username}</td>
      <td>{u.email}</td>
      <td>
        <span className="badge bg-secondary">{u.role}</span>
      </td>
      <td>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => handleEditUser(u)}
        >
          Editar
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDeleteUser(u.id)}
        >
          Eliminar
        </button>
      </td>
    </>
  );

  if (error) {
    return (
      <div className="container">
        <h1 className="my-4">Gestión de Usuarios</h1>
        <p className="text-danger">Hubo un problema: {error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="container">
        <h1 className="my-4">Gestión de Usuarios</h1>
        <p>Cargando usuarios...</p>
      </div>
    );
  }

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="container">
        <h1 className="my-4">Gestión de Usuarios</h1>
        <p>
          A continuación puedes crear, editar, eliminar usuarios, asignar roles y permisos.
        </p>
        <div className="mb-4">
          <button className="btn btn-custom-yellow" onClick={handleOpenCreateModal}>
            Crear Usuario
          </button>
        </div>
        <Table columns={columns} data={users} renderRow={renderRow} noDataText="No hay usuarios" />

        {/* Modal para editar usuario */}
        <Modal
          show={showEditModal}
          title="Editar Usuario"
          onClose={handleCloseEditModal}
        >
          {selectedUser ? (
            <div>
              <p>
                Editar usuario: <strong>{selectedUser.username}</strong>
              </p>
              {/* Aquí puedes incluir un formulario para editar usuario */}
              <button className="btn btn-primary" onClick={handleCloseEditModal}>
                Guardar cambios
              </button>
            </div>
          ) : (
            <p>Cargando información...</p>
          )}
        </Modal>

        {/* Modal para crear usuario */}
        <Modal
          show={showCreateModal}
          title="Crear Usuario"
          onClose={handleCloseCreateModal}
        >
          <CreateUserForm onCreate={handleCreateUser} onCancel={handleCloseCreateModal} />
        </Modal>
      </div>
    </ProtectedRoute>
  );
}

