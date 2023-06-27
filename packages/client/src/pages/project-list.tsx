import { FC } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useListProjectsQuery } from '@graphql/project/project';
import { Paths } from '@constants/paths';

export const ProjectList: FC = () => {
  const { data, loading, error } = useListProjectsQuery();

  const handleLogin = (projectId: string) => {
    const harborCallbackUrl = encodeURIComponent(window.location.origin + Paths.AUTH_CALLBACK);
    const loginUrl = `${import.meta.env.VITE_AUTHSERVICE_URL}`;
    const redirectUrl = `${loginUrl}?projectId=${projectId}&redirectUrl=${harborCallbackUrl}`;
    window.location.replace(redirectUrl);
  };

  return (
    <>
      {data?.listProjects.map((project) => (
        <Card sx={{ display: 'flex', my: 2 }} key={project.id}>
          <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }}>
            <CardContent sx={{ flex: '1 0 auto', my: 2 }}>
              <Typography component="div" variant="h5">
                {project.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {project.description}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button onClick={() => handleLogin(project.id)}>Login</Button>
            </Box>
          </Box>
          <CardMedia component="img" sx={{ width: 151 }} image={project.logo} alt="Project Logo" />
        </Card>
      ))}
    </>
  );
};
