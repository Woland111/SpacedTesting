import { observer } from 'mobx-react-lite';
import { Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import SkillListItem from './SkillListItem';

export default observer(function SkillsList() {
  const { skillStore } = useStore();
  return (
    <Segment>
      <Item.Group divided>
        {skillStore.skillsSortedByCreationDate.map((skill) => (
          <SkillListItem key={skill.id} skill={skill} />
        ))}
      </Item.Group>
    </Segment>
  );
});
