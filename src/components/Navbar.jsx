// Navbar.js
import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    ListItemButton,
} from '@mui/material';

import { Link, Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
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
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        GTA SA Save File Editor
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <>
                    {menu.map((menuList, index) => (
                        <React.Fragment key={index}>
                            <List key={`Nav-${index}`}>
                                {menuList.map((menuObj, inner_index) => (
                                    <ListItem key={`${index}-${inner_index}-${menuObj.text}`} disablePadding>
                                        <ListItemButton component={Link} to={menuObj.link}>
                                            <ListItemIcon>
                                                {menuObj.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={menuObj.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                        </React.Fragment>
                    ))}
                </>
                <List key={"external-links"}>
                    <ListItem key={"GitHub"} disablePadding>
                        <ListItemButton
                            component="a"
                            href="https://github.com/Saketh-Chandra/GTA_SA_Save_Game_EditorPy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Outlet />
            <Navigation />

        </div>

    );
};

export default Navbar;
