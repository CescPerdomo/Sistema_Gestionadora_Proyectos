
---

# Sistema de Gestión de Proyectos

Este es un proyecto universitario desarrollado con Next.js. Es una aplicación web diseñada para la administración de proyectos y tareas, que incluye un sistema de autenticación con diferentes roles de usuario.

## ✨ Características Principales

-   **Autenticación de Usuarios:** Sistema completo de registro e inicio de sesión.
-   **Roles de Usuario:**
    -   **Administrador:** Control total sobre la plataforma, incluyendo gestión de usuarios y acceso a reportes.
    -   **Gerente:** Capacidad para crear y asignar proyectos y tareas.
    -   **Miembro:** Puede visualizar los proyectos y tareas que le han sido asignados.
-   **Dashboard Dinámico:** La interfaz principal se adapta según el rol del usuario que ha iniciado sesión.
-   **Panel de Administración:** Sección exclusiva para administradores donde pueden:
    -   Ver, crear, editar y eliminar usuarios.
    -   Consultar reportes con estadísticas del sistema (total de usuarios, proyectos, etc.).
-   **Gestión de Proyectos y Tareas:** Páginas dedicadas para visualizar, crear y administrar proyectos y tareas.
-   **Vista de Calendario:** Un calendario interactivo para visualizar las fechas de entrega de proyectos y tareas.
-   **Componentes Reutilizables:** Creación de componentes modulares como Modales, Tarjetas (Cards) y Tablas para mantener la consistencia y facilitar el desarrollo.
-   **Exportación a Hojas de Cálculo:** Funcionalidad para exportar datos a formatos de hoja de cálculo.

## 🛠️ Tecnologías Utilizadas

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Lenguaje:** JavaScript
-   **Estilos:** [Bootstrap 5](https://getbootstrap.com/) y CSS personalizado.
-   **Manejo de Datos:** [React Query](https://tanstack.com/query/v3/) para una obtención de datos eficiente desde la API.
-   **Componentes Externos:** [React Calendar](https://github.com/wojtekmaj/react-calendar) para la vista de calendario.

## 🚀 Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/C3sarPerd0m0D3v/PrototypeSisGestProj.git
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd PrototypeSisGestProj
    ```

3.  **Instala las dependencias** (necesitas tener [Node.js](https://nodejs.org/) instalado):
    ```bash
    npm install
    ```

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre tu navegador y visita `http://localhost:3000`.

## 🧪 Cuentas de Prueba

Para probar los diferentes roles de usuario, puedes utilizar las siguientes credenciales.

**La contraseña para todas las cuentas es `1234`**.

| Rol | Correo Electrónico | Contraseña |
| :--- | :--- | :--- |
| **Admin** | `admin@udbproyectos.com` | `1234` |
| **Gerente** | `gerencia1@udbproyectos.com` | `1234` |
| **Miembro** | `miembro1@udbproyectos.com` | `1234` |

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera para facilitar su comprensión y mantenimiento:

-   `app/`: Contiene todas las páginas y rutas de la aplicación. Cada carpeta dentro de `app` representa una nueva ruta (ej: `/app/dashboard` es la página del Dashboard).
-   `components/`: Almacena los componentes pequeños y reutilizables como `Card`, `Modal`, `Navbar`, etc.
-   `context/`: Incluye `AuthContext.js`, que gestiona el estado de autenticación y la información del usuario actual en toda la aplicación.
-   `services/`: Contiene el archivo `api.js`, que simula una API para obtener y manejar los datos de la aplicación.
-   `styles/`: Archivos de CSS globales para estilos generales.
