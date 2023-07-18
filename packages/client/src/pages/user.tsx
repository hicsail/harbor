import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '@graphql/user/user';

export const User = () => {
  let { id } = useParams();
  const userId = id || '';
  const { data: userData } = useGetUserQuery({
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
