import { observer } from 'mobx-react-lite';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';
import { useStore } from '../../../app/stores/store';

export default observer(function SkillDetails() {
  const { skillStore } = useStore();
  const { selectedSkill: skill } = skillStore;
  return (
    <Card fluid>
      <Image src='/assets/skill_icon.png' size='small' />
      <Card.Content>
        <Card.Header>{skill!.question}</Card.Header>
        <Card.Description>{skill!.answer}</Card.Description>
        <Card.Meta>
          <div>Created on: {skill!.creationTimestamp}</div>
          <div>Next test on: {skill!.nextTestOn}</div>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group floated='right'>
          <Button basic color='blue' onClick={() => skillStore.openForm(skill)}>
            Edit
          </Button>
          <Button basic color='grey' onClick={() => skillStore.setSelectedSkill(null)}>
            Cancel
          </Button>
          <Button bacic color='red' onClick={async () => await skillStore.deleteSkill(skill!.id)} loading={skillStore.isSaving}>
            Delete
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
})
