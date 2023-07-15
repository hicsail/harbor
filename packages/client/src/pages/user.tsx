import { useProject } from '@context/project.context';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '@graphql/user/user';

export const User = () => {
  const { project } = useProject();
  let { id } = useParams();
  const userId = id || '';
  const {
    data: userData,
    loading,
    error
  } = useGetUserQuery({
    variables: {
      id: userId
    }
  });

  return (
    <Card>
      <CardHeader title="User Details" />
      <CardContent>
        <Typography>Fullname: {userData?.getUser.fullname}</Typography>
        <Typography>Username: {userData?.getUser.username}</Typography>
        <Typography>Email: {userData?.getUser.email}</Typography>
        <Typography>Role: {userData?.getUser.role}</Typography>
      </CardContent>
    </Card>
  );
};
