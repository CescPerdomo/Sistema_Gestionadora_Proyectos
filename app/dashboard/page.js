// app/dashboard/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si no hay usuario, redirige al login
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <h1 className="my-4">Dashboard</h1>
      <p>Bienvenido, {user.username}.</p>

      {user.role === "admin" && (
        <div className="admin-panel mt-5">
          <h2>Panel de Administración</h2>
          <div className="row">
            {/* Módulo de Gestión de Usuarios */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Gestión de Usuarios</h5>
                  <p className="card-text">
                    Crear, editar y eliminar usuarios. Asignar roles y permisos.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("Funcionalidad en construcción: Gestión de Usuarios")}
                  >
                    Gestionar Usuarios
                  </button>
                </div>
              </div>
            </div>
            {/* Módulo de Reportes del Sistema */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Reportes del Sistema</h5>
                  <p className="card-text">
                    Visualizar reportes de actividad y estadísticas generales.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("Funcionalidad en construcción: Reportes del Sistema")}
                  >
                    Ver Reportes
                  </button>
                </div>
              </div>
            </div>
            {/* Puedes agregar más módulos según lo requieras */}
          </div>
        </div>
      )}

      {user.role !== "admin" && (
        <div className="user-panel mt-4">
          <p>Esta es la vista para usuarios no administradores.</p>
        </div>
      )}
    </div>
  );
}

