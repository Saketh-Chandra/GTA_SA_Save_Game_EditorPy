import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
    setCurrentPageIndex,
} from '../features/navigateSlice';

const Navigation = () => {
    const dispatch = useDispatch();
    const { currentPageIndex } = useSelector((state) => state.navigate);
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
    const navigate = useNavigate();
    // const [currentPageIndex, setCurrentPageIndex] = React.useState(0);

    const goToNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            dispatch(setCurrentPageIndex(currentPageIndex + 1));
            navigate(pages[currentPageIndex + 1].path);
        }
    };

    const goToPreviousPage = () => {
        if (currentPageIndex > 0) {
            dispatch(setCurrentPageIndex(currentPageIndex - 1));
            navigate(pages[currentPageIndex - 1].path);
        }
    };

    return (
        //    set the button to the bottom of the page
        <Container sx={
            {

                display: 'flex',
                justifyContent: 'space-between',
                padding: 2,

            }
        }>
            <Button variant="contained" color="primary" onClick={goToPreviousPage} disabled={currentPageIndex === 0}>
                Previous
            </Button>
            <Button variant="contained" color="primary" onClick={goToNextPage} disabled={currentPageIndex === pages.length - 1}>
                Next
            </Button>
        </Container>
    );
};

export default Navigation;
