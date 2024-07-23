import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filterPriority, setFilterPriority] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map(t => t.name === task.name ? task : t));
    } else {
      setTasks([...tasks, task]);
    }
    setTaskToEdit(null); 
  };

  const updateTask = (task) => {
    setTaskToEdit(task);
  };

  const deleteTask = (taskName) => {
    setTasks(tasks.filter(task => task.name !== taskName));
  };

  const handleFilterChange = (priority) => {
    setFilterPriority(priority);
  };

  const filteredTasks = filterPriority
    ? tasks.filter(task => task.priority === filterPriority)
    : tasks;

  return (
    <div>
      <h1>TO-DO LIST DASHBOARD</h1>
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <TaskList
        tasks={filteredTasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        filterPriority={filterPriority}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default Home;
