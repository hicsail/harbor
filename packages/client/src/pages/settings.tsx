import { Card, CardContent, FormControlLabel, FormGroup, FormLabel, Grid, Switch } from '@mui/material';
import { useProject } from '@context/project.context';
import { useGetProjectQuery, useUpdateProjectSettingsMutation } from '@graphql/project/project';
import { InputMaybe } from '@graphql/graphql';

type Params = {
  id: string;
  displayProjectName?: InputMaybe<boolean> | undefined;
  allowSignup?: InputMaybe<boolean> | undefined;
};

export const Settings = () => {
  const { project } = useProject();
  const { data: projectData } = useGetProjectQuery({ variables: { id: project?.id || '' }, skip: !project?.id });
  const [updateProjectSettings] = useUpdateProjectSettingsMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params: Params = { id: project?.id || '' };
    switch (event?.target.name) {
      case 'displayProjectName':
        params.displayProjectName = event.target.checked;
        break;
      case 'allowSignup':
        params.allowSignup = event.target.checked;
        break;
    }

    try {
      updateProjectSettings({ variables: params });
    } catch (error) {
      console.error(error);
      window.alert('Error in updating project');
    }
  };

  return (
    <Card sx={{ marginTop: '30px' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">Additional Settings</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={projectData?.getProject.settings.displayProjectName || false} onChange={handleChange} name="displayProjectName" />}
                label="Display Project Name"
              />
              <FormControlLabel
                control={<Switch checked={projectData?.getProject.settings.allowSignup || false} onChange={handleChange} name="allowSignup" />}
                label="Allow Signup"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
