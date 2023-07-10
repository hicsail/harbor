import { useProject } from '@context/project.context';
import { InputMaybe } from '@graphql/graphql';
import { useGetProjectQuery, useUpdateProjectAuthMethodsMutation } from '@graphql/project/project';
import { Card, CardContent, FormControlLabel, FormGroup, FormLabel, Grid, Switch } from '@mui/material';

type Params = {
  id: string;
  googleAuth?: InputMaybe<boolean> | undefined;
  emailAuth?: InputMaybe<boolean> | undefined;
};

export const AuthMethods = () => {
  const { project } = useProject();
  const { data: projectData, called, loading } = useGetProjectQuery({ variables: { id: project?.id || '' }, skip: !project?.id });
  const [updateProjectAuthMethods] = useUpdateProjectAuthMethodsMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params: Params = { id: project?.id || '' };
    switch (event?.target.name) {
      case 'googleAuth':
        params.googleAuth = event.target.checked;
        break;
      case 'emailAuth':
        params.emailAuth = event.target.checked;
        break;
    }

    try {
      updateProjectAuthMethods({ variables: params });
    } catch (error) {
      console.error(error);
      window.alert('Error in updating project');
    }
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">Auth Methods</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={projectData?.getProject.authMethods.googleAuth || false} onChange={handleChange} name="googleAuth" />}
                label="googleAuth"
              />
              <FormControlLabel control={<Switch checked={projectData?.getProject.authMethods.emailAuth || false} onChange={handleChange} name="emailAuth" />} label="emailAuth" />
            </FormGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
