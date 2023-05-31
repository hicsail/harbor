import { Box } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';

export const Invite = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';
  const {
    data: usersData,
    called,
    loading
  } = useUsersQuery({
    variables: {
      projectId
    },
    skip: !projectId
  });

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 }
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={usersData?.projectUsers || []} columns={columns} />
    </Box>
  );
};
