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
  const setEditMode = (isInEditMode: Boolean) => setIsInEditMode(isInEditMode);

  return (
    <Grid>
      <Grid.Column width="10">
        <SkillsList skills={skills} />
      </Grid.Column>
      <Grid.Column width="6">
        {skills[0] && !isInEditMode && <SkillDetails skill={skills[0]} setEditMode={setEditMode} />}
        {isInEditMode && <SkillEdit setEditMode={setEditMode}/>}
      </Grid.Column>
    </Grid>
  );
}
