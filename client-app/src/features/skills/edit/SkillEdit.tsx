import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';

interface Props {
  skill: Skill | undefined;
  closeForm: () => void;
  updateSkill: (skill: Skill) => void;
  createSkill: (skill: Skill) => void;
  isSaving: boolean;
}

export default function SkillEdit({
  skill: selectedSkill,
  closeForm,
  updateSkill,
  createSkill,
  isSaving
}: Props) {
  const initialState = selectedSkill ?? {
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
    closeForm();
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
          <Button positive type='submit' loading={isSaving}>
            Save
          </Button>
          <Button basic type='button' color='grey' onClick={closeForm}>
            Cancel
          </Button>
        </Button.Group>
      </Form>
    </Segment>
  );
}
