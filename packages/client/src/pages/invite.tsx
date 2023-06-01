import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const Invite = () => {
  const inviteColumns: GridColDef[] = [
    { field: 'fullname', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'view',
      headerName: 'View Invite',
      width: 150,
      renderCell: () => (
        <Button variant="contained" size="small">
          View User
        </Button>
      )
    }
  ];

  return <DataGrid rows={[]} columns={inviteColumns} />;
};
