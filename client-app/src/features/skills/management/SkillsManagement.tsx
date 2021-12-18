import { useState } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';
import SkillDetails from '../details/SkillDetails';
import SkillEdit from '../edit/SkillEdit';
import SkillsList from './SkillsList';

interface Props {
  skills: Skill[];
  isInEditMode: boolean;
  selectedSkill: Skill | undefined;
  setSelectedSkill: (skill: Skill | undefined) => void;
  openForm: (skill: Skill) => void;
  closeForm: () => void;
  updateSkill: (skill: Skill) => void;
  createSkill: (skill: Skill) => void;
  deleteSkill: (id: string) => void;
}

export default function SkillsManagement({
  skills,
  isInEditMode,
  selectedSkill,
  setSelectedSkill,
  openForm,
  closeForm,
  updateSkill,
  createSkill,
  deleteSkill,
}: Props) {
  const cancelSelectedSkill = () => setSelectedSkill(undefined);

  return (
    <Grid>
      <Grid.Column width='10'>
        <SkillsList skills={skills} setSelectedSkill={setSelectedSkill} />
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedSkill && !isInEditMode && (
          <SkillDetails
            skill={selectedSkill}
            openForm={openForm}
            cancelSelectedSkill={cancelSelectedSkill}
            deleteSkill={deleteSkill}
          />
        )}
        {isInEditMode && (
          <SkillEdit
            skill={selectedSkill}
            closeForm={closeForm}
            updateSkill={updateSkill}
            createSkill={createSkill}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
