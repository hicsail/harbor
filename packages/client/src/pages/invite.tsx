import { PageTitle } from '@components/page-title';
import { Box, Button, Card, CardContent } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const Invite = () => {
  const inviteColumns: GridColDef[] = [
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'actions',
      width: 150,
      renderCell: (params) => {
        const { status } = params.row;
        let buttonVariant: 'outlined' | 'contained' = 'outlined';
        let buttonText = 'Cancel Invite';
        let buttonColor: 'warning' | 'primary' = 'warning';

        if (status === 1) {
          buttonVariant = 'contained';
          buttonText = 'Resend Invite';
          buttonColor = 'primary';
        }
        return (
          <Button variant={buttonVariant} size="small" color={buttonColor}>
            {buttonText}
          </Button>
        );
      }
    }
  ];

  return (
    <Box>
      <Card>
        <CardContent>
          <PageTitle title="Invites">
            <Button variant="contained">Create Invite</Button>
          </PageTitle>
          <DataGrid rows={[]} columns={inviteColumns} />
        </CardContent>
      </Card>
    </Box>
  );
};
