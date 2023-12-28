import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Container } from '@mui/material';

function SaveFileDownload() {
    const saveGameData = useSelector((state) => state.saveGame)
    const handleDownload = () => {
        window.main(JSON.stringify(saveGameData))
    }
    return (
        <Container
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: "2.5vh",
                marginBottom: "2.5vh"
            }}>
            <Button variant="outlined" onClick={handleDownload}>Generate Save File</Button>

        </Container>
    )
}

export default SaveFileDownload