import { Grid, List } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";
import SkillDetails from "../details/SkillDetails";
import SkillsList from "./SkillsList";

interface Props {
  skills: Skill[];
}

export default function SkillsManagement({ skills }: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <SkillsList skills={skills} />
      </Grid.Column>
      <Grid.Column width="6">
        {skills[0] && <SkillDetails skill={skills[0]} />}
      </Grid.Column>
    </Grid>
  );
}
