import React from "react";
import Task from './Task'


const TaskList = ({ tasks, deleteTask, toggleTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <Task
                    key={task.id}  // ✅ La clave debe ser el id único
                    task={task}  
                    deleteTask={() => deleteTask(task.id)}  // ✅ Usa task.id en lugar de index
                    toggleTask={() => toggleTask(task.id)}  // ✅ Usa task.id en lugar de index
                />
            ))}
        </ul>
    );
}

export default TaskList;