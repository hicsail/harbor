import { useProject } from '@context/project.context';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const AuthMethods = () => {
  const { project } = useProject();

  return (
    <Card>
      <CardHeader title="Auth Methods Details" />
      <CardContent>
        <Typography>emailAuth: {project?.authMethods.emailAuth.toString()}</Typography>
        <Typography>googleAuth: {project?.authMethods.googleAuth.toString()}</Typography>
      </CardContent>
    </Card>
  );
};
