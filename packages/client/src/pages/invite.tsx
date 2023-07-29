import { PageTitle } from '@components/page-title';
import { Paths } from '@constants/paths';
import { useGetInvitesQuery } from '@graphql/invite/invite';
import { Box, Button, Card, CardContent } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export const Invite = () => {
  const { data: invitesData } = useGetInvitesQuery();
  const navigate = useNavigate();

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
    <Box sx={{ marginTop: '30px' }}>
      <Card>
        <CardContent>
          <PageTitle title="Invites">
            <Button variant="contained" onClick={() => navigate(Paths.CREATE_INVITE)}>
              Create Invite
            </Button>
          </PageTitle>
          <Box sx={{ height: 400, width: '100%', mt: '15px' }}>
            <DataGrid rows={invitesData?.invites || []} columns={inviteColumns} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
