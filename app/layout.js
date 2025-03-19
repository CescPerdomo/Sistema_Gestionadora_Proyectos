//layout sin "use client"; //aca indicamos que es un componente client, porque se usara internamente

// app/layout.js (Server Component)
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import ClientWrapper from "./clientWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Sistema de Gestión de Proyectos</title>
      </head>
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
