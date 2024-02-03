import React from 'react'
import Garage from '../components/Garage'
import { Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';


function GaragePage() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/savefiledownload')
    }

    const handlePrevious = () => {
        navigate('/body')

    }

    return (
        <Container style={{ display: 'flex' ,  marginBottom: "4rem",
        marginTop: "4rem"
        }}>
           
           
        

            <Garage />

        </Container>
    )
}


export default GaragePage

