import { Button, Form, Segment } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";

interface Props {
  skill: Skill | undefined;
  setEditMode: (isInEditMode: boolean) => void;
}

export default function SkillEdit({ skill, setEditMode }: Props) {
  return (
    <Segment clearing>
      <Form>
        <Form.TextArea placeholder="Question" />
        <Form.TextArea placeholder="Answer" />
        <Form.Input placeholder="Next test on" />
        <Form.Input placeholder="Result" />
        <Button.Group floated='right'>
          <Button positive type='submit' onClick={() => setEditMode(false)}>
            Save
          </Button>
          <Button basic type='button' color="grey" onClick={() => setEditMode(false)}>
            Cancel
          </Button>
        </Button.Group>
      </Form>
    </Segment>
  );
}
