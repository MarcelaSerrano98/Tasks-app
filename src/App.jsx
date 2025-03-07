import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


const App = () => {
  const [tasks, setTasks] = useState([]);


    // Función para agregar tareas
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }; // Creamos un objeto con ID único y estado inicial
    setTasks([...tasks, newTask]); // Agregamos la tarea sin modificar el estado original
  };

  // Función para marcar una tarea como completada
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Filtramos todas excepto la que tiene el ID seleccionado
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas ✅</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App
