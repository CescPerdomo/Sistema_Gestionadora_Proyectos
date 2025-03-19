// services/api.js Api temporal mientras se desarrolla la API real 
export function getProjects() {
    return Promise.resolve([
      { id: 1, name: "Iniciativa 1", description: "Actividad 1.1" },
      { id: 2, name: "Iniciativa 2", description: "Actividad 2.1" },
      { id: 3, name: "Iniciativa 3", description: "Actividad 3.1" },
      { id: 4, name: "Iniciativa 4", description: "Actividad 4.1" },
      { id: 5, name: "Iniciativa 5", description: "Actividad 5.1" },
      { id: 6, name: "Iniciativa 6", description: "Actividad 6.1" },
      { id: 7, name: "Iniciativa 7", description: "Actividad 7.1" },
      { id: 8, name: "Iniciativa 8", description: "Actividad 8.1" },
      { id: 9, name: "Iniciativa 9", description: "Actividad 9.1" },
      { id: 10, name: "Iniciativa 10", description: "Actividad 10.1" },
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