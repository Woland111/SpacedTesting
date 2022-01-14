import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default observer(function NavBar() {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item header exact as={NavLink} to='/'>
                    <img src="/assets/app_icon.png" alt="app icon" style={{ marginRight: 10 }}></img>
                    Spaced Testing
                </Menu.Item>
                <Menu.Item name='Skills' as={NavLink} to='/skills' />
                <Menu.Item>
                    <Button as={NavLink} to='/createSkill' positive content='Create Skill'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
})