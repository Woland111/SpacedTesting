import { useState } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';
import { useStore } from '../../../app/stores/store';
import SkillDetails from '../details/SkillDetails';
import SkillEdit from '../edit/SkillEdit';
import SkillsList from './SkillsList';

interface Props {
  openForm: (skill: Skill) => void;
  closeForm: () => void;
  updateSkill: (skill: Skill) => void;
  createSkill: (skill: Skill) => void;
  deleteSkill: (id: string) => void;
}

export default function SkillsManagement({
  openForm,
  closeForm,
  updateSkill,
  createSkill,
  deleteSkill,
}: Props) {
  const { skillStore } = useStore();
  const cancelSelectedSkill = () => skillStore.setSelectedSkill(null);

  return (
    <Grid>
      <Grid.Column width='10'>
        <SkillsList setSelectedSkill={skillStore.setSelectedSkill} />
      </Grid.Column>
      <Grid.Column width='6'>
        {skillStore.selectedSkill && !skillStore.isInEditMode && (
          <SkillDetails
            skill={skillStore.selectedSkill}
            openForm={openForm}
            cancelSelectedSkill={cancelSelectedSkill}
            deleteSkill={deleteSkill}
            isSaving={skillStore.isSaving}
          />
        )}
        {skillStore.isInEditMode && (
          <SkillEdit
            skill={skillStore.selectedSkill}
            closeForm={closeForm}
            updateSkill={updateSkill}
            createSkill={createSkill}
            isSaving={skillStore.isSaving}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
