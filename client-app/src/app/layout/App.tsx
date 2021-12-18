import { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Skill } from '../models/skill';
import NavBar from './NavBar';
import SkillsManagement from '../../features/skills/management/SkillsManagement';
import { v4 as uuid } from 'uuid';
import { executionAsyncResource } from 'async_hooks';
import httpRequests from '../api/agent';
import skillsApi from '../api/agent';
import LoadingIndicator from './LoadingIndicator';

function App() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const openForm = (skill?: Skill) => {
    setSelectedSkill(skill);
    setIsInEditMode(true);
  };

  const closeForm = () => {
    setSelectedSkill(undefined);
    setIsInEditMode(false);
  };

  const updateSkill = async (skill: Skill) => {
    setIsSaving(true);
    await skillsApi.update(skill);
    setSkills([...skills.filter((s) => s.id !== skill.id), skill]);
    setIsInEditMode(false);
    setSelectedSkill(skill);
    setIsSaving(false);
  };

  const createSkill = async (skill: Skill) => {
    setIsSaving(true);
    skill.id = uuid();
    await skillsApi.create(skill);
    setSkills([...skills, skill]);
    setIsSaving(false);
    setIsInEditMode(false);
    setSelectedSkill(skill);
  };

  const deleteSkill = async (id: string) => {
    setIsSaving(true);
    await skillsApi.delete(id);
    setSkills([...skills.filter(s => s.id !== id)]);
    setIsSaving(false);
    setSelectedSkill(undefined);
  }

  useEffect(() => {
    skillsApi.readAll().then(response => setSkills(response)).then(() => setIsLoading(false));
  }, []);

  return (
    <>
      <NavBar openForm={openForm} />
      <Container style={{ marginTop: '2em' }}>
        { isLoading && <LoadingIndicator /> }
        <SkillsManagement
          skills={skills}
          isInEditMode={isInEditMode}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          openForm={openForm}
          closeForm={closeForm}
          updateSkill={updateSkill}
          createSkill={createSkill}
          deleteSkill={deleteSkill}
          isSaving={isSaving}
        />
      </Container>
    </>
  );
}

export default App;
