
"use client";

export default function HomePage() {
  return (
    <main className="container py-4">
      <div className="text-center">
        {/* Imagen de bienvenida */}
        <img
          src="./img/gestion1.jpg"
          alt="Bienvenido"
          className="img-fluid mb-4"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />

        {/* Título de bienvenida */}
        <h1 className="mb-3 text-primary">¡Bienvenido a Nuesta Plataforma!</h1>

        {/* Mensaje descriptivo */}
        <p className="lead">
          Aquí puedes gestionar tus proyectos y tareas de manera eficiente. Usa
          el menú de navegación para explorar las distintas secciones.
        </p>

        {/* Botón de acción (puede enlazar a Proyectos y Tareas ) */}
        <button
          className="btn btn-success"
          onClick={() => {
            // redirigir a la página de Proyectos
            window.location.href = "/proyectos";
          }}
        >
          Comenzar
        </button>
      </div>
    </main>
  );
}

  