import React from 'react';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, filterPriority, onFilterChange }) => {
  return (
    <div>
      <select id="priority-filter" value={filterPriority} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">Filter by Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <div className="task-list">
        <div className="task-list-header">
          <div>Task Name</div>
          <div>Description</div>
          <div>Priority</div>
          <div>Status</div>
          <div>Due Date</div>
          <div>Actions</div>
        </div>
        <div className="task-list-body">
          {tasks.map((task, index) => (
            <div className="task-list-row" key={index}>
              <div>{task.name}</div>
              <div>{task.description}</div>
              <div>{task.priority}</div>
              <div>{task.status}</div>
              <div>{task.dueDate}</div>
              <div>
                <button onClick={() => onUpdateTask(task)}>Update</button>
                <button onClick={() => onDeleteTask(task.name)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
