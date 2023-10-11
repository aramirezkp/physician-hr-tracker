import React, { useState } from 'react';

function TableFilter({ data, onFilter }) {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    const text = e.target.value;
    setFilterText(text);
    onFilter(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by keyword"
        value={filterText}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default TableFilter;
