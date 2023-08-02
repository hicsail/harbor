import { Box, Button, Card, CardContent, CardHeader, FormLabel } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '@graphql/user/user';
import { Formik, Form } from 'formik';
import { TextInput } from '@components/forms/text-input';
import { useForgotPasswordMutation } from '@graphql/auth/auth';
import { useProject } from '@context/project.context';

export const User = () => {
  let { id } = useParams();
  const { project } = useProject();
  const userId = id || '';
  const { data: userData } = useGetUserQuery({
    variables: {
      id: userId
    }
  });
  const [forgotPassword] = useForgotPasswordMutation();

  return (
    <Card sx={{ mt: '30px' }}>
      <CardHeader title="User Details" />
      <CardContent>
        <Formik
          validateOnBlur={false}
          validationSchema={false}
          enableReinitialize
          initialValues={{
            fullname: userData?.getUser.fullname || '',
            username: userData?.getUser.username || '',
            email: userData?.getUser.email || '',
            role: userData?.getUser.role || ''
          }}
          onSubmit={async ({ fullname, username, email, role }) => {
            console.log(fullname, username, email, role);
          }}
        >
          {({ values }) => (
            <Form>
              <FormLabel>Full Name</FormLabel>
              <TextInput autoFocus fullWidth name="fullname" type="text" margin="normal" disabled />
              <FormLabel>Username</FormLabel>
              <TextInput autoFocus fullWidth name="username" type="text" margin="normal" disabled />
              <FormLabel>Email</FormLabel>
              <TextInput autoFocus fullWidth name="email" type="text" margin="normal" disabled />
              <FormLabel>Role: {values.role == 0 ? 'User' : 'Admin'}</FormLabel>
              <Box>
                <Button
                  onClick={async () =>
                    await forgotPassword({
                      variables: {
                        projectId: project?.id || '',
                        email: values.email
                      }
                    })
                  }
                >
                  Reset Password
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
