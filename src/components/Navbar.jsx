// Navbar.js
import React, { useState } from 'react';
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
} from '@mui/material';

import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';


import ListItemButton from '@mui/material/ListItemButton';



import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TableChartIcon from '@mui/icons-material/TableChart';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

const menu = [
    [
        {
            link: '/',
            icon: <HomeIcon />,
            text: 'Home'
        },
        {
            link: '/payload-form',
            icon: <DescriptionIcon />,
            text: 'Payload Form'
        },
        {
            link: '/payload-table',
            icon: <TableChartIcon />,
            text: 'Payload Table'
        },
        {
            link: '/payload-upload',
            icon: <CloudUploadIcon />,
            text: 'Payload Upload'
        }
    ],
    [
        {
            link: '/',
            icon: <HomeIcon />,
            text: 'Home'
        },
        {
            link: '/',
            icon: <SettingsIcon />,
            text: 'Settings'
        },
        {
            link: '/',
            icon: <SettingsIcon />,
            text: 'Testing'
        },
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
                    {/* Drawer toggle button for small screens */}
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        GTA SA Save File Editor
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer for small screens */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <>
                    {menu.map((menuList, index) => (
                        <>
                            <List key={index}>
                                {/* {menuList.map((menuObj, index) => (
                                    <ListItem key={`${index}-${menuObj.text}`} disablePadding>
                                        <ListItemButton
                                            component={<Link to="/">{menuObj.link}</Link>}
                                        >
                                            <ListItemIcon>
                                                {menuObj.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={menuObj.text} />
                                        </ListItemButton>
                                        
                                    </ListItem>


                                ))} */}
                                <Link key="Home" to="/">
                                    Home
                                </Link>
                            </List>
                            <Divider />
                        </>
                    ))}
                </>
            </Drawer>
        </div>
    );
};

export default Navbar;
