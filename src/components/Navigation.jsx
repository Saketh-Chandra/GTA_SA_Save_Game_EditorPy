import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Container, MobileStepper, useTheme } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const Navigation = ({menu}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    
    const pages = menu.flat()
    const isMenuPage = pages.some((page) => page.link === location.pathname)
   
    const currentIndex = pages.findIndex((page) => page.link === location.pathname);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1);
        navigate(pages[nextIndex].link)
    }
    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1);
        navigate(pages[previousIndex].link)

    }



    return (

        isMenuPage &&
        <Container >
            <MobileStepper
                variant="dots"
                steps={pages.length}
                position="static"
                activeStep={currentIndex}

                nextButton={
                    <Button size="small" onClick={handleNext} disabled={currentIndex === (pages.length - 1)}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handlePrevious} disabled={currentIndex === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Container>
    );
};

export default Navigation;
