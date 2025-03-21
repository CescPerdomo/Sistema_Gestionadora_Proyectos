// app/dashboard/page.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
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
                  <Link href="/administracion/usuarios" className="btn btn-primary">
                    Gestionar Usuarios
                  </Link>
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
                  <Link href="/administracion/reportes" className="btn btn-primary">
                    Ver Reportes
                  </Link>
                </div>
              </div>
            </div>
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



