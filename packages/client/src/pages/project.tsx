import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';
import { useListProjectsQuery } from '../graphql/project/project';

export const Project = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';

  const { data: projectData, called, loading } = useListProjectsQuery();

  const projectColumns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'redirectUrl', headerName: 'Redirect Url', width: 150 },
    { field: 'logo', headerName: 'Logo', width: 150 },
    { field: 'muiTheme', headerName: 'MUI Theme', width: 150 },
    { field: 'homePage', headerName: 'Home Page', width: 150 }
  ];

  return <DataGrid rows={projectData?.listProjects || []} columns={projectColumns} />;
};