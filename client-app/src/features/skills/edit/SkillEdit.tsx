import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';
import { useStore } from '../../../app/stores/store';

interface Props {
  updateSkill: (skill: Skill) => void;
  createSkill: (skill: Skill) => void;
}

export default observer(function SkillEdit({
  updateSkill,
  createSkill,
}: Props) {
  const { skillStore } = useStore();

  const initialState = skillStore.selectedSkill ?? {
    id: '',
    question: '',
    answer: '',
    creationTimestamp: '',
    nextTestOn: '',
    result: '',
  };

  const [skill, setSkill] = useState(initialState);

  const handleSubmit = async () => {
    skill.id ? await updateSkill(skill) : await createSkill(skill);
    skillStore.closeForm();
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
          onChange={e => handleFormInputChange(e)}
        />
        <Form.TextArea
          placeholder='Answer'
          name='answer'
          value={skill.answer}
          onChange={e => handleFormInputChange(e)}
        />
        <Form.Input
          placeholder='Next test on'
          name='nextTestOn'
          value={skill.nextTestOn}
          type='date'
          onChange={e => handleFormInputChange(e)}
        />
        <Form.Input
          placeholder='Result'
          name='result'
          value={skill.result}
          onChange={e => handleFormInputChange(e)}
        />
        <Button.Group floated='right'>
          <Button positive type='submit' loading={skillStore.isSaving}>
            Save
          </Button>
          <Button basic type='button' color='grey' onClick={skillStore.closeForm}>
            Cancel
          </Button>
        </Button.Group>
      </Form>
    </Segment>
  );
})
