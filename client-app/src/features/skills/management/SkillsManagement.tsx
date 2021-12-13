import { useState } from "react";
import { Grid, List } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";
import SkillDetails from "../details/SkillDetails";
import SkillEdit from "../edit/SkillEdit";
import SkillsList from "./SkillsList";

interface Props {
  skills: Skill[];
}

export default function SkillsManagement({ skills }: Props) {
  const [isInEditMode, setIsInEditMode] = useState<Boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>(
    undefined
  );
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
        {isInEditMode && <SkillEdit setEditMode={setIsInEditMode} />}
      </Grid.Column>
    </Grid>
  );
}
