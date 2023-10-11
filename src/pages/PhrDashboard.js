import React, { useState } from 'react';
import TableFilter from '../components/TableFilter.js';
import DataTable from '../components/DataTable.js';
import { DataGrid } from '@mui/x-data-grid';

const data = [
  { nuid: 1, name: 'John', email: 'john@example.com',  department: 'AFM1' },
  { nuid: 2, name: 'Jane', email: 'jane@example.com',  department: 'AFM2' },
  { nuid: 3, name: 'Alex', email: 'Alex@example.com',  department: 'AFM3' },
  { nuid: 4, name: 'Barry', email: 'Barry@example.com',  department: 'AFM4' },
  { nuid: 5, name: 'Connor', email: 'Connor@example.com',  department: 'AFM6' },
  { nuid: 6, name: 'David', email: 'David@example.com',  department: 'AFM7' },
  { nuid: 7, name: 'Elton', email: 'Elton@example.com',  department: 'AFM8' },
  { nuid: 8, name: 'Felton', email: 'Felton@example.com',  department: 'AFM9' },
  // Add more data here
];

function Dashboard() {
  const rows: GridRowsProp = [
    { id: 1, col1: 'John', col2:'Last', col3: 'john@example.com',  col4: 'AFM1' },
    { id: 2, col1: 'Jane', col2:'Last', col3: 'jane@example.com',  col4: 'AFM2' },
    { id: 3, col1: 'Alex', col2:'Last', col3:  'Alex@example.com',  col4: 'AFM3' },
    { id: 4, col1: 'Barry', col2:'Last', col3:  'Barry@example.com',  col4: 'AFM4' },
    { id: 5, col1: 'Connor', col2:'Last', col3:  'Connor@example.com',  col4: 'AFM6' },
    { id: 6, col1: 'David', col2:'Last', col3: 'David@example.com',  col4: 'AFM7' },
    { id: 7, col1: 'Elton', col2:'Last', col3:  'Elton@example.com',  col4: 'AFM8' },
    { id: 8, col1: 'Felton', col2:'Last', col3:  'Felton@example.com',  col4: 'AFM9' },
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'First', width: 150 },
    { field: 'col2', headerName: 'Last Name', width: 150 },
    { field: 'col3', headerName: 'Email', width: 150 },
    { field: 'col4', headerName: 'Module', width: 150 },
  ];

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
    <div style={{ height: '400', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  </div>

  );
}

export default Dashboard;
