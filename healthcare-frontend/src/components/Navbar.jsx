import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Chat with Doctor', path: '/chat' },
    { text: 'Find Doctors', path: '/doctors' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
        <img 
          src="/favicon.png" 
          alt="HealthCare Pro Logo"
          style={{ 
            height: '40px',
            width: '40px',
            marginRight: '8px',
            objectFit: 'contain'
          }}
        />
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          HealthCare Pro
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={Link} 
            to={item.path}
            sx={{ 
              color: 'text.primary', 
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'white'
              }
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem 
          component={Link} 
          to="/chat"
          sx={{ 
            backgroundColor: 'primary.main',
            color: 'white',
            textDecoration: 'none',
            mt: 2,
            borderRadius: 1,
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          <ListItemText 
            primary="Free Consultation" 
            sx={{ textAlign: 'center' }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: 1 }}>
        <Toolbar>
          {/* Logo Image */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img 
              src="/favicon.png" 
              alt="HealthCare Pro Logo"
              style={{ 
                height: '40px',
                width: '40px',
                objectFit: 'contain'
              }}
            />
          </Box>
          
          {/* App Name */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            HealthCare Pro
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      color: 'white'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/chat"
                sx={{
                  borderRadius: 2,
                  px: 3,
                  fontWeight: 'bold'
                }}
              >
                Free Consultation
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240 
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;