import React from 'react';
import { Container, } from '@mui/material';
import General from '../components/General';
import Body from '../components/Body';
import Weapon from '../components/Weapon';
import Garage from '../components/Garage';
import SaveFileDownload from '../components/SaveFileDownload';



const Home = () => {
    return (
        <Container style={{ marginTop: "2.5vh" }}>

            <General />
            <Body />
            <Weapon />
            <Garage />

            <SaveFileDownload />


        </Container>
    );
};

export default Home;
