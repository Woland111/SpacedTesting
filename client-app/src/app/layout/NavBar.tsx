import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/app_icon.png" alt="app icon" style={{ marginRight: 10 }}></img>
                    Spaced Testing
                </Menu.Item>
                <Menu.Item name='Skills'/>
                <Menu.Item>
                    <Button positive content='Create Skill'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}