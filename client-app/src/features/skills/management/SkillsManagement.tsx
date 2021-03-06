import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingIndicator from '../../../app/layout/LoadingIndicator';
import { useStore } from '../../../app/stores/store';
import SkillsList from './SkillsList';

export default observer(function SkillsManagement() {
  const { skillStore } = useStore();
  const { loadSkills, skillsMap } = skillStore;

  useEffect(() => {
    if (skillsMap.size === 0) {
      loadSkills();
    }
  }, [skillsMap, loadSkills]);

  if (skillStore.isLoading) return <LoadingIndicator />;

  return (
    <Grid>
      <Grid.Column width='10'>
        <SkillsList />
      </Grid.Column>
      <Grid.Column width='6'>
        <h2>Skills Filters</h2>
      </Grid.Column>
    </Grid>
  );
});
