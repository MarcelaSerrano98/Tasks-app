import React, { useState } from "react"; // Importamos React y useState

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState(""); // Estado para manejar el texto del input

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que se recargue la página al enviar el formulario
    if (!text.trim()) return; // Evitamos agregar tareas vacías
    addTask(text); // Llamamos a la función para agregar la tarea
    setText(""); // Limpiamos el input después de agregar
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        className="task-input"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)} // Actualizamos el estado con el valor del input
      />
      <button className="task-button">Agregar</button>
    </form>
  );
};

export default TaskForm;
