import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingIndicator from '../../../app/layout/LoadingIndicator';
import { useStore } from '../../../app/stores/store';

export default observer(function SkillDetails() {
  const { skillStore } = useStore();
  const { loadSkill, selectedSkill: skill, isLoading } = skillStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      loadSkill(id);
    }
  }, [id, loadSkill]);

  if (isLoading || !skill) return <LoadingIndicator />;

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
          <Button as={Link} to={`/editSkill/${skill.id}`} basic color='blue'>
            Edit
          </Button>
          <Button
            as={Link} to='/skills'
            basic
            color='grey'
            onClick={() => skillStore.selectSkill(null)}
          >
            Cancel
          </Button>
          <Button
            as={Link} to='/skills'
            basic
            color='red'
            onClick={async () => await skillStore.deleteSkill(skill!.id)}
            loading={skillStore.isSaving}
          >
            Delete
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
