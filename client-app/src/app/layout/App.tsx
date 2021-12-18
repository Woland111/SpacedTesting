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

function App() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>(
    undefined
  );

  const openForm = (skill?: Skill) => {
    setSelectedSkill(skill);
    setIsInEditMode(true);
  };

  const closeForm = () => {
    setSelectedSkill(undefined);
    setIsInEditMode(false);
  };

  const updateSkill = (skill: Skill) => {
    setSkills([...skills.filter((s) => s.id !== skill.id), skill]);
    setIsInEditMode(false);
    setSelectedSkill(skill);
    skillsApi.update(skill);
  };

  const createSkill = (skill: Skill) => {
    skill.id = uuid();
    setIsInEditMode(false);
    setSkills([...skills, skill]);
    setSelectedSkill(skill);
    skillsApi.create(skill);
  };

  const deleteSkill = (id: string) => {
    setSkills([...skills.filter(s => s.id !== id)]);
    skillsApi.delete(id);
  }

  useEffect(() => {
    skillsApi.readAll().then(response => setSkills(response));
  }, []);

  return (
    <>
      <NavBar openForm={openForm} />
      <Container style={{ marginTop: '2em' }}>
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
        />
      </Container>
    </>
  );
}

export default App;
