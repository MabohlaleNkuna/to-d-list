import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    priority: '',
    status: 'Incomplete',
    dueDate: ''
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      addTask(task);
      setTaskToEdit(null); 
    } else {
      addTask(task);
      setTask({
        name: '',
        description: '',
        priority: '',
        status: 'Incomplete',
        dueDate: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        required
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        required
      >
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
