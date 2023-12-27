import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import General from '../components/General';
import Body from '../components/Body';
import Weapon from '../components/Weapon';
import Garage from '../components/Garage';




const Home = () => {
    return (
        <Container style={{ marginTop: "2.5vh" }}>

            <General />
            <Body />
            <Weapon />
            <Garage />
            <Container
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: "2.5vh"
                }}>
                <Button variant="outlined" onClick={() => { window.main() }}>Generate Save File</Button>

            </Container>
        </Container>
    );
};

export default Home;
