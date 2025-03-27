// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import ClientWrapper from "./clientWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>Sistema de Gestión de Proyectos</title>
        {/* Asegúrate de que los estilos se carguen correctamente */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
      </head>
      <body className="bg-light">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}