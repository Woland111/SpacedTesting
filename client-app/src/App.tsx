import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import moment from 'moment';

function App() {

  const [learnings, setLearnings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/learnings').then(response => {
      setLearnings(response.data);
      console.log(response);
    });
    console.log(moment().add(10, 'days').toISOString());
  }, []);

  return (
    <div>
      <Header as="h2" content="Spaced Testing" icon="university" />
         <List>
          {learnings.map((learning: any) => (
            <List.Item key={learning.id}>
              {learning.question}
            </List.Item>
          ))}
        </List>
      
    </div>
  );
}

export default App;
