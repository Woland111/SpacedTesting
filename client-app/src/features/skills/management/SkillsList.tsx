import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function SkillsList() {
  const { skillStore} = useStore();
  return (
    <Segment>
      <Item.Group divided>
        {skillStore.skillsSortedByCreationDate.map((skill) => (
          <Item key={skill.id}>
            <Item.Content>
              <Item.Header as="a">{skill.question}</Item.Header>
              <Item.Description>{skill.answer}</Item.Description>
              <Item.Meta>Next test on: {skill.nextTestOn}</Item.Meta>
              <Item.Extra>
                  <Button primary floated='right' color='blue' as={Link} to={`/skills/${skill.id}`}>View</Button>
                  <Label>private</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
})
