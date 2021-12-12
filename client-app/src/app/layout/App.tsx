import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { List } from "semantic-ui-react";
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
    <div>
      <NavBar/>
      <List>
        {skills.map(skill => (
          <List.Item key={skill.id}>{skill.question}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
