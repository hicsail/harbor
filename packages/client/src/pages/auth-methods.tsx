import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';
import { useListProjectsQuery } from '../graphql/project/project';

export const AuthMethods = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';

  const { data: projectData, called, loading } = useListProjectsQuery();

  const authMethodsColumns: GridColDef[] = [
    { field: 'googleAuth', headerName: 'Google Auth', width: 150 },
    { field: 'emailAuth', headerName: 'Email Auth', width: 150 }
  ];

  const authMethodsData = projectData?.listProjects?.map((project) => ({
    id: project.id,
    ...project.authMethods
  }));

  return <DataGrid rows={authMethodsData || []} columns={authMethodsColumns} />;
};
