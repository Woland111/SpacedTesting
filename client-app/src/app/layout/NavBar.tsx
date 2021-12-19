import { observer } from 'mobx-react-lite';
import { Button, Container, Menu } from 'semantic-ui-react';
import { Skill } from '../models/skill';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const { skillStore } = useStore();
    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/app_icon.png" alt="app icon" style={{ marginRight: 10 }}></img>
                    Spaced Testing
                </Menu.Item>
                <Menu.Item name='Skills'/>
                <Menu.Item>
                    <Button positive content='Create Skill' onClick={() => skillStore.openForm(null)}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
})