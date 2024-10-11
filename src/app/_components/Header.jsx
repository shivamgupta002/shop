"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { useState } from 'react';
import AOS from 'aos';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <AppBar position="static" sx={{color:"white",backgroundColor:"black"}} data-aos="fade-down"
    data-aos-duration="2000">
      <Container>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gupta Radio Service
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color="inherit">
              <a href="/">Home</a>              
            </Button>
            <Button color="inherit">          
              <a href="/about">About</a>              
            </Button>
            <Button color="inherit">
              <a href="/services">Services</a>
            </Button>
            <Button color="inherit">
              <a href="/contact">Contact</a>
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleMenuClose} >Home</MenuItem>
              <MenuItem onClick={handleMenuClose} >About</MenuItem>
              <MenuItem onClick={handleMenuClose} >Services</MenuItem>
              <MenuItem onClick={handleMenuClose} >Contact</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
