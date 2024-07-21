import React from 'react';
import InputField from './InputField';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <InputField type="date" placeholder="Filter by Due Date" onChange={(e) => onFilterChange('dueDate', e.target.value)} />
      <InputField type="text" placeholder="Filter by Priority" onChange={(e) => onFilterChange('priority', e.target.value)} />
      <InputField type="text" placeholder="Filter by Status" onChange={(e) => onFilterChange('status', e.target.value)} />
    </div>
  );
};

export default Filter;
