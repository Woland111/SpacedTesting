import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { Skill } from "../models/skill";
import NavBar from "./NavBar";

function App() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    axios.get<Skill[]>("http://localhost:5000/api/skills").then((response) => {
      setSkills(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '2em' }}>
        <List>
          {skills.map((skill) => (
            <List.Item key={skill.id}>{skill.question}</List.Item>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
