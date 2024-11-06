import React, { useState } from 'react';

function Lista() {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Aprender React', completed: false },
      { id: 2, text: 'Hacer la compra', completed: false },
      { id: 3, text: 'Lavar el coche', completed: false },
    ]);

    const toggleTaskCompletion = (id) => {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };

    return (
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                {task.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default Lista;