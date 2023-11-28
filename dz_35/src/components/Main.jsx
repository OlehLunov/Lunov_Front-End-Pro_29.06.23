import React, { useState, useEffect } from 'react';
import './Main.css';

function Main() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  function saveToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  function todoCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task, complete: !task.complete };
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  function removeTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
  }

  function addTask() {
    if (input.trim() !== '') {
      const newTask = { id: Date.now(), title: input, complete: false };
      const updatedTasks = tasks.concat(newTask);
      setTasks(updatedTasks);
      setInput('');

      saveToLocalStorage(updatedTasks);
    }
  }

  function InputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <div className="input-container">
        <input value={input} type="text" onChange={InputChange} />
        <button onClick={addTask}>Додати</button>
      </div>
      <div>
        {tasks && tasks.map(task => {
          return (
            <div className='taskStyle' key={task.id}>
              <input type="checkbox" checked={task.complete} onChange={() => todoCompleted(task.id)} />
              <div className='taskName'>{task.title}</div>
              <div
                onClick={() => removeTask(task.id)}
                className='close'>&times;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;