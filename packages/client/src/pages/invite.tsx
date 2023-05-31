import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';

export const Invite = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';

  const inviteColumns: GridColDef[] = [
    { field: 'fullname', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'view',
      headerName: 'View Invite',
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" size="small">
          View User
        </Button>
      )
    }
  ];

  return <DataGrid rows={[]} columns={inviteColumns} />;
};
