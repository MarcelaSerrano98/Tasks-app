// 📌 Importamos React
import React from "react";


// 📌 Componente que representa una sola tarea
function Task({ task, deleteTask, toggleTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span >{task.text}</span>
      <div className="task-buttons">
      <button onClick={toggleTask}> {task.completed ? "Desmarcar" : "Completar"}</button>
      <button onClick={deleteTask}>Eliminar</button>
      </div>
    </li>
  );
}

// 📌 Exportamos el componente
export default Task;
