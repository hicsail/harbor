import { useProject } from '@context/project.context';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const Project = () => {
  const { project } = useProject();

  return (
    <Card>
      <CardHeader title="Project Details" />
      <CardContent>
        <Typography>id: {project?.id}</Typography>
        <Typography>name: {project?.name}</Typography>
        <Typography>description: {project?.description}</Typography>
        <Typography>logo: {project?.logo}</Typography>
        <Typography>homePage: {project?.homePage}</Typography>
        <Typography>redirectUrl: {project?.redirectUrl}</Typography>
      </CardContent>
    </Card>
  );
};
