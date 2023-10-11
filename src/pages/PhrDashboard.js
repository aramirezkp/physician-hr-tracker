import React, { useState } from 'react';
import TableFilter from '../components/TableFilter.js';
import DataTable from '../components/DataTable.js';

const data = [
  { id: 1, name: 'John', email: 'john@example.com',  department: 'AFM1' },
  { id: 2, name: 'Jane', email: 'jane@example.com',  department: 'AFM2' },
  { id: 1, name: 'Alex', email: 'john@example.com',  department: 'AFM3' },
  { id: 2, name: 'Barry', email: 'jane@example.com',  department: 'AFM4' },
  { id: 1, name: 'Connor', email: 'john@example.com',  department: 'AFM6' },
  { id: 2, name: 'David', email: 'jane@example.com',  department: 'AFM7' },
  { id: 1, name: 'Elton', email: 'john@example.com',  department: 'AFM8' },
  { id: 2, name: 'Felton', email: 'jane@example.com',  department: 'AFM9' },
  // Add more data here
];

function Dashboard() {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filterText) => {
    // Implement the filtering logic here
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
        <p>Hello</p>
      <TableFilter data={filteredData} onFilter={handleFilter} />
      <DataTable data={filteredData} />
    </div>
  );
}

export default Dashboard;
