import { useEffect } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import SkillsManagement from '../../features/skills/management/SkillsManagement';
import LoadingIndicator from './LoadingIndicator';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { skillStore } = useStore();

  useEffect(() => {
    skillStore.loadSkills();
  }, [skillStore]);

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '2em' }}>
        {skillStore.isLoading && <LoadingIndicator />}
        <SkillsManagement />
      </Container>
    </>
  );
}

export default observer(App);
