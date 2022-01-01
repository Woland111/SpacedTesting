import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingIndicator from '../../../app/layout/LoadingIndicator';
import { useStore } from '../../../app/stores/store';
import SkillDetails from '../details/SkillDetails';
import SkillEdit from '../edit/SkillEdit';
import SkillsList from './SkillsList';

export default observer(function SkillsManagement() {
  const { skillStore } = useStore();

  useEffect(() => {
    skillStore.loadSkills();
  }, [skillStore]);

  {skillStore.isLoading && <LoadingIndicator />}

  return (
    <Grid>
      <Grid.Column width='10'>
        <SkillsList />
      </Grid.Column>
      <Grid.Column width='6'>
        {skillStore.selectedSkill && !skillStore.isInEditMode && (
          <SkillDetails />
        )}
        {skillStore.isInEditMode && <SkillEdit />}
      </Grid.Column>
    </Grid>
  );
});
