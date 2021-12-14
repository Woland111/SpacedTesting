import { Button, Form, Segment } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";

interface Props {
  skill: Skill | undefined;
  setEditMode: (isInEditMode: boolean) => void;
  closeForm: () => void;
}

export default function SkillEdit({ skill, setEditMode, closeForm }: Props) {
  return (
    <Segment clearing>
      <Form>
        <Form.TextArea placeholder="Question" />
        <Form.TextArea placeholder="Answer" />
        <Form.Input placeholder="Next test on" />
        <Form.Input placeholder="Result" />
        <Button.Group floated='right'>
          <Button positive type='submit' onClick={closeForm}>
            Save
          </Button>
          <Button basic type='button' color="grey" onClick={closeForm}>
            Cancel
          </Button>
        </Button.Group>
      </Form>
    </Segment>
  );
}
