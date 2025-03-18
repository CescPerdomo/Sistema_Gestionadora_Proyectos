"use client"; //aca indicamos que es un componente client, porque se usara internamente

import 'bootstrap/dist/css/bootstrap.min.css'; // importamos bootstrap
import "../styles/globals.css"; //importamos estilos globales
import Navbar from "../components/Navbar"; //componente de navegacion se creara en otro archivo
import Sidebar from "../components/Sidebar"; //se agrega componente de sidebar
import Footer from "../components/Footer"; //componente de footer se creara en otro archivo
import { AuthProvider } from "../context/AuthContext"; //importamos el proveedor de autenticacion
import BootstrapClient from "../app/bootstrapClient"; // importamos el proveedor de bootstrap

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Sistema de Gestión de Proyectos</title>
      </head>
      <body>
        <AuthProvider>
          <BootstrapClient>
            <Navbar />
            {/* Usamos el container-fluid para ocupar todo el ancho de la pagina */}
            <div className="container-fluid">
              <div className="row">
                {/* Columna de 3 parte para el sidebar, se oculta para pantallas pequeñas */}
                <div className="col-md-3 d-none d-md-block">
                  <Sidebar />
                </div>
                {/* Columna de 9 para el contenido principal, que es lo que interesa ver en otros dispositivos*/}
                <div className="col-md-9">
                  <main className="my-4">{children}</main>
                </div>
              </div>
            </div>
            <Footer />
          </BootstrapClient>
        </AuthProvider>
      </body>
    </html>
  );
}