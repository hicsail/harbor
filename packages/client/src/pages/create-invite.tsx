import { TextInput } from '@components/forms/text-input';
import { Card, CardHeader, CardContent, Button, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import { FC } from 'react';
import { SubmitButton } from '@components/forms/submit-button';
import { useCreateInviteMutation } from '@graphql/invite/invite';

export const CreateInvite: FC = () => {
  const [createInviteMutation] = useCreateInviteMutation();

  return (
    <Card sx={{ margin: '30px' }}>
      <CardHeader title="Create an Invite" />
      <CardContent>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={{}}
          enableReinitialize
          initialValues={{
            email: '',
            role: 0
          }}
          onSubmit={async ({ email, role }) => {
            try {
              await createInviteMutation({ variables: { email, role } });
              console.log('Mutation successful');
            } catch (error) {
              console.error('Mutation error:', error);
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <TextInput autoFocus fullWidth name="email" label="Email" type="email" margin="normal" />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant={values.role === 0 ? 'contained' : 'outlined'} color="primary" onClick={() => setFieldValue('role', 0)}>
                  User
                </Button>
                <Button variant={values.role === 1 ? 'contained' : 'outlined'} color="primary" onClick={() => setFieldValue('role', 1)}>
                  Admin
                </Button>
              </Box>
              <SubmitButton fullWidth variant="contained" color="primary" sx={{ my: 2 }}>
                Send Invite
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
