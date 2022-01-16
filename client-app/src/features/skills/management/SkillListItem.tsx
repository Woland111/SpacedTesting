import { Link } from 'react-router-dom';
import { Item, Button, Label, Segment, Icon } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';

interface Props {
  skill: Skill;
}

export default function SkillListItem({ skill }: Props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as={Link} to={`/skills/${skill.id}`}>{skill.question}</Item.Header>
              <Item.Description><Label>private</Label></Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
          <Icon name='clock' />Next test on: {skill.nextTestOn}
      </Segment>
      <Segment secondary>
          ANSWER: {skill.answer}
      </Segment>
      <Segment clearing>
          Result: {skill.result}
          <Button as={Link} to={`/skills/${skill.id}`} content='View' color='blue' floated='right' />
      </Segment>
    </Segment.Group>
  );
}
