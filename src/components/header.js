import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import AuthDrawer from './AuthDrawer/authDrawer';

const Header = () => {
    // State which manages auth drawer
    const [openAuthDrawer, setOpenAuthDrawer] = useState(false);

    // State which manages authentication
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);

    useEffect(() => {
        setIsAuthenticatedUser(sessionStorage.getItem("isAuthenticated"));
    }, [openAuthDrawer])

    // Handler which opens auth drawer
    const loginOrSignupClickHandler = () => {
        setOpenAuthDrawer(true);
    }

    // Logout handler
    const logoutHandler = () => {
        sessionStorage.clear();
        setIsAuthenticatedUser(false);
    }

    // Handler which closes auth drawer
    const closeAuthDrawerHandler = () => {
        setOpenAuthDrawer(false);
    }

    return (
        <React.Fragment>
            {openAuthDrawer && <AuthDrawer openAuthDrawer={openAuthDrawer} onClose={closeAuthDrawerHandler} />}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SuperNova
                        </Typography>
                        {isAuthenticatedUser ?
                            <>Hi User! <Button color="inherit" onClick={logoutHandler}>Logout</Button></> :
                            <Button color="inherit" onClick={loginOrSignupClickHandler}>Login/Signup</Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
}

export default Header;