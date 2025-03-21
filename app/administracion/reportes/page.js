"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useQuery } from "@tanstack/react-query";
import { getUsers, getProjects, getTasks } from "@/services/api";

export default function ReportesPage() {
  const {
    data: users,
    error: errorUsers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchInterval: 5000, // Se actualiza cada 5s
  });

  const {
    data: projects,
    error: errorProjects,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchInterval: 5000,
  });

  const {
    data: tasks,
    error: errorTasks,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    refetchInterval: 5000,
  });

  if (errorUsers || errorProjects || errorTasks) {
    return (
      <ProtectedRoute allowedRoles={["admin"]}>
        <div className="container">
          <h1 className="my-4">Reportes del Sistema</h1>
          <p className="text-danger">
            Hubo un problema al cargar los datos.
          </p>
        </div>
      </ProtectedRoute>
    );
  }

  if (!users || !projects || !tasks) {
    return (
      <ProtectedRoute allowedRoles={["admin"]}>
        <div className="container">
          <h1 className="my-4">Reportes del Sistema</h1>
          <p>Cargando datos...</p>
        </div>
      </ProtectedRoute>
    );
  }

  const reportData = {
    totalUsuarios: users.length,
    totalProyectos: projects.length,
    totalTareas: tasks.length,
    promedioTareasPorProyecto:
      projects.length > 0 ? (tasks.length / projects.length).toFixed(2) : 0,
  };

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="container">
        <h1 className="my-4">Reportes del Sistema</h1>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-primary shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total de Usuarios</h5>
                <p className="card-text display-6">
                  {reportData.totalUsuarios}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-success shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Proyectos</h5>
                <p className="card-text display-6">
                  {reportData.totalProyectos}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-warning shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tareas</h5>
                <p className="card-text display-6">
                  {reportData.totalTareas}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-info shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Promedio Tareas/Proyecto</h5>
                <p className="card-text display-6">
                  {reportData.promedioTareasPorProyecto}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

