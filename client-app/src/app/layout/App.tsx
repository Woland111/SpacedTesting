import { useEffect } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import SkillsManagement from '../../features/skills/management/SkillsManagement';
import LoadingIndicator from './LoadingIndicator';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import SkillEdit from '../../features/skills/edit/SkillEdit';
import SkillDetails from '../../features/skills/details/SkillDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '2em' }}>
              {/* */}
              <Route exact path='/skills' component={SkillsManagement} />
              <Route
                key={location.key}
                path={['/createSkill', '/editSkill/:id']}
                component={SkillEdit}
              />
              <Route path='/skills/:id' component={SkillDetails} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
