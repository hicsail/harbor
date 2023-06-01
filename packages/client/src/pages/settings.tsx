import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';

export const Settings = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';

  const settingColumns: GridColDef[] = [
    { field: 'displayProjectName', headerName: 'Display Project Name', width: 300 },
    { field: 'allowSignup', headerName: 'Allow Signup', width: 300 }
  ];

  return <DataGrid rows={[]} columns={settingColumns} />;
};
