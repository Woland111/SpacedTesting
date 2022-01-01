import { useEffect } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import SkillsManagement from '../../features/skills/management/SkillsManagement';
import LoadingIndicator from './LoadingIndicator';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import SkillEdit from '../../features/skills/edit/SkillEdit';

function App() {
  

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '2em' }}>
        {/* */}
        <Route exact path="/" component={HomePage}/>
        <Route path="/skills" component={SkillsManagement}/>
        <Route path="/createSkill" component={SkillEdit}/>
      </Container>
    </>
  );
}

export default observer(App);
