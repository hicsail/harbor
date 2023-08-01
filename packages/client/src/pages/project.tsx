import { TextInput } from '@components/forms/text-input';
import { useProject } from '@context/project.context';
import { Box, Card, CardContent, CardHeader, FormLabel } from '@mui/material';
import { Form, Formik } from 'formik';
import { TwitterPicker } from 'react-color';
import { SubmitButton } from '@components/forms/submit-button';
import { useUpdateProjectMutation, useGetProjectQuery } from '@graphql/project/project';

export const Project = () => {
  const { project } = useProject();
  const { data: projectData } = useGetProjectQuery({ variables: { id: project?.id || '' }, skip: !project?.id });
  const [updateProjectMutation] = useUpdateProjectMutation();

  return (
    <Card sx={{ marginTop: '30px' }}>
      <CardHeader title="Project Details" />
      <CardContent>
        <Formik
          validateOnBlur={false}
          // validateOnChange={false}
          validationSchema={false}
          enableReinitialize
          initialValues={{
            id: projectData?.getProject.id || '',
            name: projectData?.getProject.name,
            description: projectData?.getProject.description,
            logo: projectData?.getProject.logo,
            homePage: projectData?.getProject.homePage,
            redirectUrl: projectData?.getProject.redirectUrl,
            primaryPickerColor: projectData?.getProject.muiTheme?.palette?.primary?.main,
            secondaryPickerColor: projectData?.getProject.muiTheme?.palette?.secondary?.main
          }}
          onSubmit={async ({ id, name, description, logo, homePage, redirectUrl, primaryPickerColor, secondaryPickerColor }) => {
            const muiTheme = {
              palette: {
                primary: {
                  main: primaryPickerColor
                },
                secondary: {
                  main: secondaryPickerColor
                }
              }
            };
            try {
              await updateProjectMutation({
                variables: {
                  id,
                  name,
                  description,
                  logo,
                  muiTheme,
                  homePage,
                  redirectUrl
                }
              });
            } catch (error) {
              console.error(error);
              window.alert('Error in updating project');
            }

            console.log(id, name, description, logo, homePage, redirectUrl, primaryPickerColor, secondaryPickerColor);
          }}
        >
          {({ values, setFieldValue, setFieldTouched }) => (
            <Form>
              <FormLabel>ID</FormLabel>
              <TextInput
                autoFocus
                fullWidth
                name="id"
                type="text"
                margin="normal"
                InputProps={{
                  readOnly: true
                }}
              />
              <FormLabel>Name</FormLabel>
              <TextInput
                autoFocus
                fullWidth
                name="name"
                type="text"
                margin="normal"
                // value={values?.name}
                InputProps={{
                  readOnly: true
                }}
              />
              <FormLabel>Description</FormLabel>
              <TextInput
                autoFocus
                fullWidth
                name="description"
                type="text"
                margin="normal"
                // value={values?.description}
                InputProps={{
                  readOnly: true
                }}
              />
              <FormLabel>Logo</FormLabel>
              <TextInput
                autoFocus
                fullWidth
                name="logo"
                type="text"
                margin="normal"
                // value={values?.logo}
                InputProps={{
                  readOnly: true
                }}
              />
              <FormLabel>Home Page</FormLabel>
              <TextInput
                autoFocus
                fullWidth
                name="homePage"
                type="text"
                margin="normal"
                // value={values?.homePage}
                InputProps={{
                  readOnly: true
                }}
              />
              <FormLabel>Redirect URL</FormLabel>
              <TextInput
                autoFocus
                fullWidth
                name="redirectUrl"
                type="text"
                margin="normal"
                // value={values?.redirectUrl}
                InputProps={{
                  readOnly: true
                }}
              />
              <Box>
                <FormLabel>Primary Color</FormLabel>
                <TwitterPicker
                  color={values?.primaryPickerColor}
                  onChange={(color) => {
                    setFieldValue('primaryPickerColor', color.hex);
                    setFieldTouched('primaryPickerColor', true);
                  }}
                />
              </Box>
              <Box>
                <FormLabel>Secondary Color</FormLabel>
                <TwitterPicker
                  color={values?.secondaryPickerColor}
                  onChange={(color) => {
                    setFieldValue('secondaryPickerColor', color.hex);
                    setFieldTouched('primaryPickerColor', true);
                  }}
                />
              </Box>
              <SubmitButton fullWidth variant="contained" color="primary" sx={{ my: 2 }}>
                Update Project Settings
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
