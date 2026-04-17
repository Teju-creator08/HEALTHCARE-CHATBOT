import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
         
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              HealthCare Pro
            </Typography>
            <Typography variant="body2" paragraph>
              Your trusted healthcare partner providing AI-powered medical assistance 
              and connecting you with the best healthcare professionals.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/chat" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>
              AI Chatbot
            </Link>
            <Link href="/doctors" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>
              Find Doctors
            </Link>
            <Link href="/services" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/contact" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>
              Contact Us
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Typography variant="body2" display="block" sx={{ mb: 1 }}>
              AI Symptom Checker
            </Typography>
            <Typography variant="body2" display="block" sx={{ mb: 1 }}>
              Doctor Consultation
            </Typography>
            <Typography variant="body2" display="block" sx={{ mb: 1 }}>
              Emergency Assistance
            </Typography>
            <Typography variant="body2" display="block" sx={{ mb: 1 }}>
              Health Tips & Blog
            </Typography>
            <Typography variant="body2" display="block" sx={{ mb: 1 }}>
              Appointment Booking
            </Typography>
          </Grid>

         
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                 123 Medical Street, Health City 
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                +1-234-567-8900
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                support@healthcarepro.com
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Emergency: 24/7 Available
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} HealthCare Pro. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Disclaimer: This is for educational purposes only. Always consult a real doctor for medical issues.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;