import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Skill } from "../../../app/models/skill";

interface Props {
  skill: Skill;
}

export default function SkillDetails({ skill }: Props) {
  return (
    <Card fluid>
      <Image src="/assets/skill_icon.png" size="small" />
      <Card.Content>
        <Card.Header>{skill.question}</Card.Header>
        <Card.Description>{skill.answer}</Card.Description>
        <Card.Meta>
          <div>Created on: {skill.creationTimestamp}</div>
          <div>Next test on: {skill.nextTestOn}</div>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group floated="right">
          <Button basic color="blue">
            Edit
          </Button>
          <Button basic color="grey">
            Cancell
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}