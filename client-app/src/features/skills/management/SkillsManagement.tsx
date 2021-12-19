import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';
import { useStore } from '../../../app/stores/store';
import SkillDetails from '../details/SkillDetails';
import SkillEdit from '../edit/SkillEdit';
import SkillsList from './SkillsList';

interface Props {
  createSkill: (skill: Skill) => void;
}

export default observer(function SkillsManagement({
  createSkill,
}: Props) {
  const { skillStore } = useStore();

  return (
    <Grid>
      <Grid.Column width='10'>
        <SkillsList />
      </Grid.Column>
      <Grid.Column width='6'>
        {skillStore.selectedSkill && !skillStore.isInEditMode && (
          <SkillDetails />
        )}
        {skillStore.isInEditMode && (
          <SkillEdit
            createSkill={createSkill}
          />
        )}
      </Grid.Column>
    </Grid>
  );
});
