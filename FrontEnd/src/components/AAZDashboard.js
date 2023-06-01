import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Courses from '../Screens/AdminDashboardScreens/Courses';
import Student from '../Screens/AdminDashboardScreens/Student';
import Teacher from '../Screens/AdminDashboardScreens/Teacher';
import Institute from '../Screens/AdminDashboardScreens/Institute';
import { AutoStories, Business, Person, School } from '@mui/icons-material';
import EditStudent from '../Screens/AdminDashboardScreens/StudentScreens/EditStudent';

const drawerWidth = 240;

function AAZDashboard( props ) {
    const { window } = props;
    const [ mobileOpen, setMobileOpen ] = React.useState( false );

    const menuList = [
        {
            route: "teacher",
            displayName: "Teacher",
            icon: <Person color='info' />
        },
        {
            route: "institute",
            displayName: "Institute",
            icon: <Business color='info' />

        },
        {
            route: "student",
            displayName: "Student",
            icon: <School color='info' />

        },
        {
            route: "course",
            displayName: "Course",
            icon: <AutoStories color='info' />

        },
    ]

    const handleDrawerToggle = () => {
        setMobileOpen( !mobileOpen );
    };

    const navigate = useNavigate();

    const handleChange = ( route ) => {
        navigate( route )
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                { menuList.map( ( x, i ) => (
                    <ListItem key={ i } disablePadding>
                        <ListItemButton onClick={ () => handleChange( x.route ) }>
                            <ListItemIcon>
                                { x.icon }
                            </ListItemIcon>
                            <ListItemText primary={ x.displayName } />
                        </ListItemButton>
                    </ListItem>
                ) ) }
            </List>


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={ { display: 'flex' } }>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={ {
                    backgroundColor: "black",
                    width: { sm: `calc(100% - ${ drawerWidth }px)` },
                    ml: { sm: `${ drawerWidth }px` },
                } }
            >
                <Toolbar>
                    <IconButton
                        color="default"
                        aria-label="open drawer"
                        edge="start"
                        onClick={ handleDrawerToggle }
                        sx={ { mr: 2, display: { sm: 'none' } } }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
                <Drawer
                    container={ container }
                    variant="temporary"
                    open={ mobileOpen }
                    onClose={ handleDrawerToggle }
                    ModalProps={ {
                        keepMounted: true, // Better open performance on mobile.
                    } }
                    sx={ {
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    } }
                >
                    { drawer }
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={ {
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    } }
                    open
                >
                    { drawer }
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={ { flexGrow: 1, p: 3, width: { sm: `calc(100% - ${ drawerWidth }px)` } } }
            >
                <Toolbar />

                <Routes>
                    <Route path="course" element={ <Courses /> } />
                    <Route path="student/*" element={ <Student /> } />
                    <Route path="teacher" element={ <Teacher /> } />
                    <Route path="isntitute" element={ <Institute /> } />
                </Routes>
            </Box>
        </Box>

    );
}

AAZDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AAZDashboard;