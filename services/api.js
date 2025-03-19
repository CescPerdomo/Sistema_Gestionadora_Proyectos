// services/api.js Api temporal mientras se desarrolla la API real 
export function getProjects() {
  return Promise.resolve([
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del proyecto.",
      image: "../img/proyecto1.jpg"  // Asegúrate de que la ruta y nombre sean correctos
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción del proyecto.",
      image: "../img/proyecto2.jpg"
    },
    {
      id: 3,
      name: "Proyecto 3",
      description: "Descripción del proyecto.",
      image: "../img/proyecto3.jpg"
    }
  ]);
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