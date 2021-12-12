import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";

interface Props {
  skills: Skill[];
}

export default function SkillsList({ skills }: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {skills.map((skill) => (
          <Item key={skill.id}>
            <Item.Content>
              <Item.Header as="a">{skill.question}</Item.Header>
              <Item.Description>{skill.answer}</Item.Description>
              <Item.Meta>Next test on: {skill.nextTestOn}</Item.Meta>
              <Item.Extra>
                  <Button floated='right' color='blue'>View</Button>
                  <Label>private</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}