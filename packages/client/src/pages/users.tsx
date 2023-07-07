import { Box, Button, Card, CardContent } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useUsersQuery } from '@graphql/auth/auth';
import { PageTitle } from '@components/page-title';

export const Users = () => {
  const { data: usersData } = useUsersQuery();

  const userColumns: GridColDef[] = [
    { field: 'fullname', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'view',
      headerName: 'View User',
      width: 150,
      renderCell: () => (
        <Button variant="contained" size="small">
          View User
        </Button>
      )
    }
  ];
  return (
    <Box>
      <Card>
        <CardContent>
          <PageTitle title="Users">
            <Button variant="contained">Invite User</Button>
          </PageTitle>
          <DataGrid rows={usersData?.users || []} columns={userColumns} />
        </CardContent>
      </Card>
    </Box>
  );
};
