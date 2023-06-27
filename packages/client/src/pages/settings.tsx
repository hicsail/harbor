import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useProject } from '@context/project.context';

export const Settings = () => {
  const { project } = useProject();

  return (
    <Card>
      <CardHeader title="Setting Details" />
      <CardContent>
        <Typography>allowSignup: {project?.settings.allowSignup.toString()}</Typography>
        <Typography>displayProjectName: {project?.settings.displayProjectName.toString()}</Typography>
      </CardContent>
    </Card>
  );
};
