import React from 'react'
import General from '../components/General'
import { Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';




function GeneralPage() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/body')
    }

    return (
        <Container>
            <General />           
        </Container>
    )
}


export default GeneralPage

