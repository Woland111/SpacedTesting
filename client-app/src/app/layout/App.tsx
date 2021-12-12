import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
import { Skill } from "../models/skill";

function App() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    axios.get<Skill[]>("http://localhost:5000/api/skills").then((response) => {
      setSkills(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" content="Spaced Testing" icon="university" />
      <List>
        {skills.map(skill => (
          <List.Item key={skill.id}>{skill.question}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
