import { Box, Button, Tabs, Tab, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';
import { useUsersQuery } from '../graphql/auth/auth';
import { AuthLayout } from '@layouts/auth-layout';
import { useState } from 'react';

export const Users = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';

  const { data: usersData, called, loading } = useUsersQuery();

  const userColumns: GridColDef[] = [
    { field: 'fullname', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'view',
      headerName: 'View User',
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" size="small">
          View User
        </Button>
      )
    }
  ];

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

  const tabLabels = ['Users', 'Invite'];

  return (
    <AuthLayout tabLabels={tabLabels} defaultTab={0}>
      <DataGrid rows={usersData?.users || []} columns={userColumns} />
      <DataGrid rows={[]} columns={inviteColumns} />
    </AuthLayout>
  );
};
