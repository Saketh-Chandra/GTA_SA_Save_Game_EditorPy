import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const messages = [
    "Oops! Page Not Found",
    "You've wandered into the world of GTA SA Editer.",
    "CJ can't find this page either. Better head back to the Home Page!",
    "Grove Street Families are looking for you! Quick, go back to safety!",
    "Looks like Smoke's up to no good with this page. Return to safety!",
    "Welcome to the San Andreas wilderness. Better find your way back to the Home Page!",
    "CJ is wondering how you got here. Follow the link back to safety!",
    "Tommy Vercetti is confused too. Head back to familiar territory!",
    "Wasted! But not really. Return to safety, GTA SA style!",
    "GTA SA Editer is glitching. Time to respawn on the Home Page!",
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function PageNotFound() {
    const [randomMessage] = useState(getRandomMessage());

    return (
        <Container style={{ marginTop: "2.5vh", textAlign: 'center' }}>
            <Typography variant="h5" color="error">
                {randomMessage}
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '20px' }}>
                Better head back to
                <Link to="/"> the Home Page</Link> before things get even crazier in the world of GTA SA Save File Editor!
            </Typography>
        </Container>
    );
}

export default PageNotFound;
