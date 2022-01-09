import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function SkillEdit() {
  const { skillStore } = useStore();
  const { loadSkill } = skillStore;
  const { id } = useParams<{ id: string }>();
  const [skill, setSkill] = useState({
    id: '',
    question: '',
    answer: '',
    creationTimestamp: '',
    nextTestOn: '',
    result: '',
  });

  useEffect(() => {
    if (id) {
      loadSkill(id).then(skill => setSkill(skill!));
    }
  }, [loadSkill, id]);

  const handleSubmit = async () => {
    skill.id
      ? await skillStore.updateSkill(skill)
      : await skillStore.createSkill(skill);
  };

  const handleFormInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSkill({ ...skill, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.TextArea
          placeholder='Question'
          name='question'
          value={skill.question}
          onChange={(e) => handleFormInputChange(e)}
        />
        <Form.TextArea
          placeholder='Answer'
          name='answer'
          value={skill.answer}
          onChange={(e) => handleFormInputChange(e)}
        />
        <Form.Input
          placeholder='Next test on'
          name='nextTestOn'
          value={skill.nextTestOn}
          type='date'
          onChange={(e) => handleFormInputChange(e)}
        />
        <Form.Input
          placeholder='Result'
          name='result'
          value={skill.result}
          onChange={(e) => handleFormInputChange(e)}
        />
        <Button.Group floated='right'>
          <Button positive type='submit' loading={skillStore.isSaving}>
            Save
          </Button>
          <Button basic type='button' color='grey'>
            Cancel
          </Button>
        </Button.Group>
      </Form>
    </Segment>
  );
});
