import React, { useState } from 'react';

function Lista() {
    const [lista, setLista] = useState([
      { id: 1, text: 'hacer React', completed: false },
      { id: 2, text: 'estudiar empresa', completed: false },
      { id: 3, text: 'Lavar el coche', completed: false },
    ]);

    const toggleTaskCompletion = (id) => {
      setLista(lista.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };

    return (
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {lista.map(task => (
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