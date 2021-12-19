import { Button, Container, Menu } from 'semantic-ui-react';
import { Skill } from '../models/skill';

interface Props {
    openForm: (skill: Skill | null) => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/app_icon.png" alt="app icon" style={{ marginRight: 10 }}></img>
                    Spaced Testing
                </Menu.Item>
                <Menu.Item name='Skills'/>
                <Menu.Item>
                    <Button positive content='Create Skill' onClick={() => openForm(null)}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}