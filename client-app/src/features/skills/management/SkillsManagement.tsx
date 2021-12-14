import { useState } from "react";
import { Grid, List } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";
import SkillDetails from "../details/SkillDetails";
import SkillEdit from "../edit/SkillEdit";
import SkillsList from "./SkillsList";

interface Props {
  skills: Skill[];
  isInEditMode: boolean;
  setIsInEditMode: (editMode: boolean) => void;
  selectedSkill: Skill | undefined;
  setSelectedSkill: (skill: Skill | undefined) => void;
}

export default function SkillsManagement({ skills, isInEditMode, setIsInEditMode, selectedSkill, setSelectedSkill }: Props) {
  
  const cancelSelectedSkill = () => setSelectedSkill(undefined);  

  return (
    <Grid>
      <Grid.Column width="10">
        <SkillsList skills={skills} setSelectedSkill={setSelectedSkill} />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedSkill && !isInEditMode && (
          <SkillDetails
            skill={selectedSkill}
            setEditMode={setIsInEditMode}
            cancelSelectedSkill={cancelSelectedSkill}
          />
        )}
        {isInEditMode && <SkillEdit skill={selectedSkill} setEditMode={setIsInEditMode} />}
      </Grid.Column>
    </Grid>
  );
}
