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

  const closeForm = () => {
    skillStore.selectSkill(null);
    skillStore.setEditMode(false);
  };

  const updateSkill = async (skill: Skill) => {
    skillStore.setIsSaving(true);
    await skillsApi.update(skill);
    skillStore.setSkills([...skillStore.skills.filter((s) => s.id !== skill.id), skill]);
    skillStore.setEditMode(false);
    skillStore.selectSkill(skill);
    skillStore.setIsSaving(false);
  };

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
        { skillStore.isLoading && <LoadingIndicator /> }
        <SkillsManagement
          closeForm={closeForm}
          updateSkill={updateSkill}
          createSkill={createSkill}
        />
      </Container>
    </>
  );
}

export default observer(App);
