import { Grid, List } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";

interface Props {
  skills: Skill[];
}

export default function SkillsManagement({ skills }: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          {skills.map((skill) => (
            <List.Item key={skill.id}>{skill.question}</List.Item>
          ))}
        </List>
      </Grid.Column>
    </Grid>
  );
}
