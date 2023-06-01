<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
=======
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
>>>>>>> projects-routing
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

<<<<<<< HEAD
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={usersData?.projectUsers || []} columns={columns} />
    </Box>
  );
=======
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
>>>>>>> 0b1a9df81f1581a1b8988ecb0c36e47300cf8107
=======
  return <DataGrid rows={[]} columns={inviteColumns} />;
>>>>>>> projects-routing
};
