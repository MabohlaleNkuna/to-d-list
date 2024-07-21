import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import InputField from './InputField';
import Button from './Button';

const TaskForm = ({ editing, taskToEdit, onFormSubmit }) => {
  const { addTask, updateTask } = useContext(TaskContext);
  const [task, setTask] = useState(editing ? taskToEdit : {
    name: '',
    definition: '',
    priority: 'Low',
    status: 'Incomplete',
    dueDate: ''
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateTask(task);
    } else {
      addTask({ ...task, id: Date.now() });
    }
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField type="text" placeholder="Task Name" value={task.name} onChange={handleChange} name="name" />
      <InputField type="text" placeholder="Task Definition" value={task.definition} onChange={handleChange} name="definition" />
      <InputField type="text" placeholder="Task Priority" value={task.priority} onChange={handleChange} name="priority" />
      <InputField type="text" placeholder="Task Status" value={task.status} onChange={handleChange} name="status" />
      <InputField type="date" placeholder="Due Date" value={task.dueDate} onChange={handleChange} name="dueDate" />
      <Button text={editing ? "Update Task" : "Add Task"} />
    </form>
  );
};

export default TaskForm;
