import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';

export const AuthMethods = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';

  const authMethodsColumns: GridColDef[] = [
    { field: 'googleAuth', headerName: 'Google Auth', width: 150 },
    { field: 'emailAuth', headerName: 'Email Auth', width: 150 }
  ];

  return <DataGrid rows={[]} columns={authMethodsColumns} />;
};
