Sistema de Gestión de Proyectos
Descripción
Este proyecto es un sistema de gestión de proyectos y tareas desarrollado con React y Next.js. El frontend permite la autenticación de usuarios, la gestión de proyectos y tareas, la visualización de reportes en tiempo real, un calendario interactivo y un panel de administración con funcionalidades diferenciadas según el rol (administrador, gerente, miembro).

El proyecto se ha desarrollado siguiendo un enfoque de MVP con datos simulados (mock) y se ha preparado para la futura integración de una API REST real.

app/
├─ calendario/
│   └─ page.js         // Página del calendario (usa CalendarView)
├─ dashboard/
│   └─ page.js         // Página del Dashboard
├─ proyectos/
│   └─ page.js         // Página de Proyectos con creación y ver detalles
├─ tareas/
│   └─ page.js         // Página de Tareas con creación y ver detalles
├─ layout.js           // Layout global (Server Component)
├─ clientWrapper.js    // Wrapper de cliente, que carga Bootstrap JS dinámicamente y envuelve Navbar, Footer, etc.
context/
└─ AuthContext.js      // Maneja autenticación, persistencia de sesión y roles (usa localStorage)
components/
├─ CalendarView.js     // Componente del Calendario (usa react-calendar)
├─ Card.js             // Componente de Tarjeta para Proyectos/Tareas
├─ Modal.js            // Componente Modal para mostrar formularios y detalles
├─ ProtectedRoute.js   // Protege las rutas según la sesión y roles
├─ CreateProjectForm.js // Formulario para crear un nuevo proyecto
├─ CreateTaskForm.js   // Formulario para crear una nueva tarea
├─ FormInput.js        // Componente reutilizable para inputs en formularios
└─ Sidebar.js          // Sidebar con enlaces y modales para Grupos de Trabajo y Sitios web de interés
services/
└─ api.js              // Funciones de obtención de datos (mock); se actualizará con la API REST real
styles/
└─ globals.css         // Estilos globales y ajustes personalizados


Funcionalidades Clave
Autenticación y Roles:

Inicio de sesión y registro (simulados) con persistencia en localStorage.

Roles: admin, gerente, miembro.

Rutas protegidas usando el componente ProtectedRoute.

Gestión de Proyectos y Tareas:

Visualización de proyectos y tareas mediante el componente Card.

Modal para ver detalles y formularios modales para crear nuevos proyectos y tareas.

Actualización del estado local para simular la persistencia y reflejar cambios en tiempo real.

Calendario y Reportes:

Calendario interactivo que muestra eventos (proyectos y tareas) por fecha.

Reportes del sistema que muestran métricas en tiempo real (número de usuarios, proyectos, tareas, promedio de tareas por proyecto).

Navegación y Sidebar:

Navbar y Sidebar para la navegación en la aplicación.

El Sidebar incluye modales para "Grupos de Trabajo" (con avatares) y "Sitios web de interés".

Cómo Ejecutar la Aplicación
Requisitos
Node.js (versión recomendada: 14+)

npm o yarn

Pasos para Ejecutar
Clonar el repositorio:

git clone <URL-del-repositorio>
cd <nombre-del-repositorio>

Instalar dependencias:

npm install
# o
yarn install

Ejecutar el servidor de desarrollo:

npm run dev
# o
yarn dev


Abrir la aplicación en el navegador:

La aplicación se ejecutará en http://localhost:3000.

Iniciar sesión:

Usa las credenciales de ejemplo:

Admin: admin@udbproyectos.com / 1234

Gerente: gerencia1@udbproyectos.com / 1234

Miembro: miembro1@udbproyectos.com / 1234

Notas importantes
Actualmente, la aplicación utilizo para fase de pruebas datos simulados en services/api.js. Cuando la API REST esté disponible, se deberá actualizar este archivo para hacer llamadas reales.

La persistencia de sesión de momento se maneja mediante localStorage en el AuthContext.

Para la actualización en tiempo real de reportes, se utiliza React Query (o un polling simulado).

