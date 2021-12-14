import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { Skill } from "../models/skill";
import NavBar from "./NavBar";
import SkillsManagement from "../../features/skills/management/SkillsManagement";

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
  }

  useEffect(() => {
    axios.get<Skill[]>("http://localhost:5000/api/skills").then((response) => {
      setSkills(response.data);
    });
  }, []);

  return (
    <>
      <NavBar openForm={openForm} />
      <Container style={{ marginTop: "2em" }}>
        <SkillsManagement
          skills={skills}
          isInEditMode={isInEditMode}
          setIsInEditMode={setIsInEditMode}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          openForm={openForm}
          closeForm={closeForm}
        />
      </Container>
    </>
  );
}

export default App;
