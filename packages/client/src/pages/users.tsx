import { Box, Button, Card, CardContent } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useUsersQuery } from '@graphql/auth/auth';
import { PageTitle } from '@components/page-title';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@constants/paths';

export const Users = () => {
  const { data: usersData } = useUsersQuery();
  const navigate = useNavigate();

  const userColumns: GridColDef[] = [
    {
      field: 'view',
      headerName: 'View User',
      width: 150,
      renderCell: (params) => (
        <Button variant="text" size="small" onClick={() => navigate(`/users/${params.row.id}`)}>
          View User
        </Button>
      )
    },
    { field: 'fullname', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 }
  ];
  return (
    <Box sx={{ marginTop: '30px' }}>
      <Card>
        <CardContent>
          <PageTitle title="Users">
            <Button variant="contained" onClick={() => navigate(Paths.CREATE_INVITE)}>
              Invite User
            </Button>
          </PageTitle>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid rows={usersData?.users || []} columns={userColumns} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
