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
    skillStore.setSelectedSkill(null);
    skillStore.setIsInEditMode(false);
  };

  const updateSkill = async (skill: Skill) => {
    skillStore.setIsSaving(true);
    await skillsApi.update(skill);
    skillStore.setSkills([...skillStore.skills.filter((s) => s.id !== skill.id), skill]);
    skillStore.setIsInEditMode(false);
    skillStore.setSelectedSkill(skill);
    skillStore.setIsSaving(false);
  };

  const createSkill = async (skill: Skill) => {
    skillStore.setIsSaving(true);
    skill.id = uuid();
    await skillsApi.create(skill);
    skillStore.setSkills([...skillStore.skills, skill]);
    skillStore.setIsSaving(false);
    skillStore.setIsInEditMode(false);
    skillStore.setSelectedSkill(skill);
  };

  const deleteSkill = async (id: string) => {
    skillStore.setIsSaving(true);
    await skillsApi.delete(id);
    skillStore.setSkills([...skillStore.skills.filter(s => s.id !== id)]);
    skillStore.setIsSaving(false);
    skillStore.setSelectedSkill(null);
  }

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
          deleteSkill={deleteSkill}
        />
      </Container>
    </>
  );
}

export default observer(App);
