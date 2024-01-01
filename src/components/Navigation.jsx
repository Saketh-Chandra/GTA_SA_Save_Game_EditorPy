import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Container } from '@mui/material';



const Navigation = () => {
    const navigate = useNavigate();



    const pages = [
        {
            path: "/",

        },
        {
            path: "/body",

        },
        {
            path: "/garage",

        },
        {
            path: "/savefiledownload",

        }
    ]

    const location = useLocation();
    console.log(location.pathname);


    const isMenuPage = pages.some((page) => page.path === location.pathname)
    console.log(`isMenuPage: ${isMenuPage}`);

    const currentIndex = pages.findIndex((page) => page.path === location.pathname);
    console.log(`currentIndex: ${currentIndex}`);
    const nextIndex = (currentIndex + 1)
    const previousIndex = (currentIndex - 1)






    console.log(`currentIndex: ${currentIndex}`);
    console.log(`nextIndex: ${nextIndex}`);
    console.log(`previousIndex: ${previousIndex}`);




    const handleNext = () => {
        const nextIndex = (currentIndex + 1);
        navigate(pages[nextIndex].path)
    }
    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1);
        navigate(pages[previousIndex].path)

    }





    return (

        isMenuPage &&
        <Container style={{ display: 'flex', flexDirection: 'column', }}>

            <div style={{ marginTop: 'auto', padding: 16, display: 'flex', justifyContent: 'space-between' }}>
                <Button disabled={currentIndex === 0} variant="contained" color="primary" onClick={handlePrevious} style={{ marginLeft: 16 }}>
                    Previous
                </Button>
                <Button disabled={currentIndex === (pages.length - 1)} variant="contained" color="primary" onClick={handleNext} style={{ marginLeft: 16 }}>
                    Next
                </Button>
            </div>
        </Container>

    );
};

export default Navigation;
