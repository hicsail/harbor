import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../context/auth.context';
import { useListProjectsQuery } from '../graphql/project/project';

export const Settings = () => {
  const { token, decoded_token, setToken } = useAuth();
  const projectId = decoded_token?.projectId || '';

  const { data: projectData, called, loading } = useListProjectsQuery();

  const settingColumns: GridColDef[] = [
    { field: 'displayProjectName', headerName: 'Display Project Name', width: 300 },
    { field: 'allowSignup', headerName: 'Allow Signup', width: 300 }
  ];

  const settingsData = projectData?.listProjects?.map((project) => ({
    id: project.id,
    ...project.settings
  }));

  return <DataGrid rows={settingsData || []} columns={settingColumns} />;
};
