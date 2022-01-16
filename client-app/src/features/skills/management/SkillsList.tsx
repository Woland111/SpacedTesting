import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';
import { Skill } from '../../../app/models/skill';
import { useStore } from '../../../app/stores/store';
import SkillListItem from './SkillListItem';

export default observer(function SkillsList() {
  const { skillStore } = useStore();
  const { skillsGrouped } = skillStore;
  return (
    <>
      {skillsGrouped.map(([date, skills]) => (
        <Fragment key={date}>
          <Header sub color='teal'>
            {date}
          </Header>
          {skills.map((skill) => (
            <SkillListItem key={skill.id} skill={skill} />
          ))}
        </Fragment>
      ))}
    </>
  );
});
