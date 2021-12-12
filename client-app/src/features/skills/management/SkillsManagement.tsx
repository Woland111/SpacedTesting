import { Grid, List } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";
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
    </Grid>
  );
}
