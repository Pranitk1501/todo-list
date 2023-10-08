import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  return (
    <div className="App">
      <h1>Advanced To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <label>Show Completed Tasks:</label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
