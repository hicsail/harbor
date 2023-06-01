import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useUsersQuery } from '@graphql/auth/auth';

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

  return <DataGrid rows={usersData?.users || []} columns={userColumns} />;
};
