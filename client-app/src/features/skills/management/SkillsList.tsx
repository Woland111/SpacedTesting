import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";
import { useStore } from "../../../app/stores/store";

interface Props {
  setSelectedSkill: (skill: Skill) => void;
}

export default function SkillsList({ setSelectedSkill }: Props) {
  const { skillStore} = useStore();
  return (
    <Segment>
      <Item.Group divided>
        {skillStore.skills.map((skill) => (
          <Item key={skill.id}>
            <Item.Content>
              <Item.Header as="a">{skill.question}</Item.Header>
              <Item.Description>{skill.answer}</Item.Description>
              <Item.Meta>Next test on: {skill.nextTestOn}</Item.Meta>
              <Item.Extra>
                  <Button primary floated='right' color='blue' onClick={() => setSelectedSkill(skill)}>View</Button>
                  <Label>private</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
