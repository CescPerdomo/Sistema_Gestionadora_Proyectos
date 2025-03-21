// services/api.js Api temporal mientras se desarrolla la API real 


export async function getUsers() {
  // Simula una llamada asíncrona que retorna datos mock
  return Promise.resolve([
    { id: 1, username: "Administrador", email: "admin@udbproyectos.com", role: "admin" },
    { id: 2, username: "Gerente1", email: "gerencia1@udbproyectos.com", role: "gerente" },
    { id: 3, username: "Miembro1", email: "miembro1@udbproyectos.com", role: "miembro" }
  ]);
}
  // Simula una llamada asíncrona que retorna datos mock o api simulada

// services/api.js
export async function getProjects() {
  // Simula una llamada asíncrona a la API
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: "Proyecto Alpha",
            description: "Descripción del proyecto Alpha.",
            image: "/img/proyecto-alpha.jpg",
          },
          {
            id: 2,
            name: "Proyecto Beta",
            description: "Descripción del proyecto Beta.",
            image: "/img/proyecto-beta.jpg",
          },
          {
            id: 3,
            name: "Proyecto Gamma",
            description: "Descripción del proyecto Gamma.",
            image: "/img/proyecto-gamma.jpg",
          },
        ]),
      500
    )
  );
}


  

// Función que simula obtener una lista de tareas
export function getTasks() {
  return Promise.resolve([
    {
      id: 1,
      title: "Diseñar interfaz",
      description: "Crear el diseño visual de la página de tareas.",
      image: "../img/tarea1.jpg"
    },
    {
      id: 2,
      title: "Implementar validaciones",
      description: "Agregar validaciones en los formularios de tareas.",
      image: "../img/tarea2.jpg"
    },
    {
      id: 3,
      title: "Feedback",
      description: "Revisar comentarios de usuarios y ajustar el diseño.",
      image: "../img/tarea3.jpg"
    }
  ]);
}