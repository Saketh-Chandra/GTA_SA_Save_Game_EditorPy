// Navbar.js
import React, { useState, lazy } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material';

import { Outlet } from 'react-router-dom';
// import Navigation from './Navigation';
// const General = lazy(() => import('./page/GeneralPage'));
const Navigation = lazy(() => import('./Navigation'));
const NavbarDrawer = lazy(() => import('./NavbarDrawer'));

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CarRepairIcon from '@mui/icons-material/CarRepair';



const menu = [
    [
        {
            link: '/',
            icon: <HomeIcon />,
            text: 'Home'
        },
        {
            link: '/body',
            icon: <FitnessCenterIcon />,
            text: 'Body'
        },
        {
            link: '/garage',
            icon: <CarRepairIcon />,
            text: 'Garage'
        },
        {
            link: '/savefiledownload',
            icon: <CloudDownloadIcon />,
            text: 'Save File Download'
        }
    ]

]


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        GTA SA Save File Editor
                    </Typography>
                </Toolbar>
            </AppBar>
            <Outlet />
            <NavbarDrawer
                menu={menu}
                drawerOpen={drawerOpen}
                toggleDrawer={toggleDrawer}
            />
            
            <Navigation menu={menu} />
            


        </div>

    );
};

export default Navbar;
