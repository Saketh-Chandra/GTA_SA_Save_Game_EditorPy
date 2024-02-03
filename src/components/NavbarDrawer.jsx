import React from 'react'

import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    ListItemButton,
} from '@mui/material';

import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
function NavbarDrawer({menu, drawerOpen, toggleDrawer}) {
    return (
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
    )
}

export default NavbarDrawer