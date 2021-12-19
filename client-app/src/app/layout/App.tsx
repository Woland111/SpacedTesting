import { useEffect } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import { Skill } from '../models/skill';
import NavBar from './NavBar';
import SkillsManagement from '../../features/skills/management/SkillsManagement';
import { v4 as uuid } from 'uuid';
import skillsApi from '../api/agent';
import LoadingIndicator from './LoadingIndicator';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { skillStore } = useStore();

  const createSkill = async (skill: Skill) => {
    skillStore.setIsSaving(true);
    skill.id = uuid();
    await skillsApi.create(skill);
    skillStore.setSkills([...skillStore.skills, skill]);
    skillStore.setIsSaving(false);
    skillStore.setEditMode(false);
    skillStore.selectSkill(skill);
  };

  useEffect(() => {
    skillStore.loadSkills();
  }, [skillStore]);

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '2em' }}>
        {skillStore.isLoading && <LoadingIndicator />}
        <SkillsManagement createSkill={createSkill} />
      </Container>
    </>
  );
}

export default observer(App);
