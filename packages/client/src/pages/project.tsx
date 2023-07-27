import { TextInput } from '@components/forms/text-input';
import { useProject } from '@context/project.context';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Form, Formik } from 'formik';

export const Project = () => {
  const { project } = useProject();

  return (
    <Card sx={{ marginTop: '30px' }}>
      <CardHeader title="Project Details" />
      <CardContent>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={{}}
          enableReinitialize
          initialValues={{
            id: project?.id,
            name: project?.name,
            description: project?.description,
            logo: project?.logo,
            homePage: project?.homePage,
            redirectUrl: project?.redirectUrl
          }}
          onSubmit={async ({ id, name, description, logo, homePage, redirectUrl }) => {
            console.log(id, name, description, logo, homePage, redirectUrl);
          }}
        >
          {({ values }) => (
            <Form>
              <TextInput
                autoFocus
                fullWidth
                name="id"
                type="text"
                margin="normal"
                value={values?.id}
                InputProps={{
                  readOnly: true
                }}
              />
              <TextInput
                autoFocus
                fullWidth
                name="name"
                type="text"
                margin="normal"
                value={values?.name}
                InputProps={{
                  readOnly: true
                }}
              />
              <TextInput
                autoFocus
                fullWidth
                name="description"
                type="text"
                margin="normal"
                value={values?.description}
                InputProps={{
                  readOnly: true
                }}
              />
              <TextInput
                autoFocus
                fullWidth
                name="logo"
                type="text"
                margin="normal"
                value={values?.logo}
                InputProps={{
                  readOnly: true
                }}
              />
              <TextInput
                autoFocus
                fullWidth
                name="homePage"
                type="text"
                margin="normal"
                value={values?.homePage}
                InputProps={{
                  readOnly: true
                }}
              />
              <TextInput
                autoFocus
                fullWidth
                name="redirectUrl"
                type="text"
                margin="normal"
                value={values?.redirectUrl}
                InputProps={{
                  readOnly: true
                }}
              />
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
