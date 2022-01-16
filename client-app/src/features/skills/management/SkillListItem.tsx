import { Link } from 'react-router-dom';
import { Item, Button, Label } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';

interface Props {
    skill: Skill;
}

export default function SkillListItem({  skill }: Props) {
  return (
    <Item key={skill.id}>
      <Item.Content>
        <Item.Header as='a'>{skill.question}</Item.Header>
        <Item.Description>{skill.answer}</Item.Description>
        <Item.Meta>Next test on: {skill.nextTestOn}</Item.Meta>
        <Item.Extra>
          <Button
            primary
            floated='right'
            color='blue'
            as={Link}
            to={`/skills/${skill.id}`}
          >
            View
          </Button>
          <Label>private</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
