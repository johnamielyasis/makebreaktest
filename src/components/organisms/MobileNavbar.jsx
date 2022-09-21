import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const MobileNavbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HOME
            </Typography>
            <Button style={{ 
                background: "#D9D9D9",
                color: "black"
                }}>
                    ?
                </Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
};

export default MobileNavbar;
