import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  MedicalServices,
  People,
  LocalHospital,
  EventAvailable,
  Lightbulb,
  Medication,
  Favorite,
  Psychology,
  Science,
  Vaccines,
  Home,
  Call,
  Close,
  CheckCircle,
  AccessTime,
  Security,
  Schedule,
  Notifications,
  TrendingUp
} from '@mui/icons-material';

const SimpleServices = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
  };

  const serviceDetails = {
    'AI Symptom Checker': {
      features: [
        'Instant symptom analysis powered by advanced AI',
        'Personalized health recommendations',
        'Symptom severity assessment',
        'Next steps guidance based on symptoms',
        'Integration with medical databases'
      ],
      benefits: [
        'Get immediate insights about your symptoms',
        'Understand when to seek medical help',
        'Save time with preliminary assessments',
        'Track symptom patterns over time'
      ]
    },
    'Doctor Consultation': {
      features: [
        'Video consultations with certified doctors',
        'Specialist referrals when needed',
        'Prescription services',
        'Medical record review',
        'Follow-up appointment scheduling'
      ],
      benefits: [
        'Consult from the comfort of your home',
        'Access to specialists across various fields',
        'Reduced waiting times',
        'Continuity of care with preferred doctors'
      ]
    },
    'Emergency Assistance': {
      features: [
        '24/7 emergency hotline',
        'GPS-enabled ambulance dispatch',
        'Emergency contact notification',
        'Hospital bed availability check',
        'Real-time tracking of emergency services'
      ],
      benefits: [
        'Immediate response in critical situations',
        'Coordination with nearest medical facilities',
        'Peace of mind knowing help is always available',
        'Professional guidance during emergencies'
      ]
    },
    'Appointment Booking': {
      features: [
        'Real-time doctor availability',
        'Multiple booking channels (app, web, phone)',
        'Appointment reminders',
        'Waitlist management',
        'Rescheduling and cancellation options'
      ],
      benefits: [
        'Book appointments anytime, anywhere',
        'Reduce waiting room time',
        'Choose preferred time slots',
        'Manage all appointments in one place'
      ]
    },
    'Health Tips': {
      features: [
        'Personalized daily health tips',
        'Seasonal wellness guides',
        'Exercise and nutrition advice',
        'Mental health resources',
        'Preventive care information'
      ],
      benefits: [
        'Stay informed about health best practices',
        'Prevent illnesses through proactive care',
        'Improve overall wellness',
        'Access evidence-based health information'
      ]
    },
    'Medication Reminder': {
      features: [
        'Customizable reminder schedules',
        'Multiple medication tracking',
        'Refill alerts',
        'Dosage tracking history',
        'Family member management'
      ],
      benefits: [
        'Never miss a medication dose',
        'Improve treatment adherence',
        'Track medication effectiveness',
        'Share progress with healthcare providers'
      ]
    }
  };

  const services = [
    {
      title: 'AI Symptom Checker',
      description: 'Get instant symptom analysis using AI technology',
      icon: <MedicalServices sx={{ fontSize: 40 }} />,
      color: '#2196F3',
      detailIcon: <Psychology />
    },
    {
      title: 'Doctor Consultation',
      description: 'Book appointments with certified specialists',
      icon: <People sx={{ fontSize: 40 }} />,
      color: '#4CAF50',
      detailIcon: <People />
    },
    {
      title: 'Emergency Assistance',
      description: '24/7 emergency support and ambulance services',
      icon: <LocalHospital sx={{ fontSize: 40 }} />,
      color: '#F44336',
      detailIcon: <LocalHospital />
    },
    {
      title: 'Appointment Booking',
      description: 'Easy online booking with real-time availability',
      icon: <EventAvailable sx={{ fontSize: 40 }} />,
      color: '#FF9800',
      detailIcon: <EventAvailable />
    },
    {
      title: 'Health Tips',
      description: 'Daily health tips and wellness guides',
      icon: <Lightbulb sx={{ fontSize: 40 }} />,
      color: '#9C27B0',
      detailIcon: <Lightbulb />
    },
    {
      title: 'Medication Reminder',
      description: 'Never miss a dose with smart reminders',
      icon: <Medication sx={{ fontSize: 40 }} />,
      color: '#00BCD4',
      detailIcon: <Medication />
    }
  ];

  const handleContactSupport = () => {
    navigate('/contact');
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Services
        </Typography>
        
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ 
                p: 3, 
                height: '100%', 
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderTop: `4px solid ${service.color}`,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
                <Box sx={{ 
                  color: service.color,
                  mb: 2
                }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={() => handleLearnMore(service)}
                  sx={{ 
                    borderColor: service.color,
                    color: service.color,
                    '&:hover': {
                      borderColor: service.color,
                      backgroundColor: `${service.color}10`
                    }
                  }}
                >
                  Learn More
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Need help? Our team is available 24/7
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            startIcon={<Call />}
            onClick={handleContactSupport}
          >
            Contact Support
          </Button>
        </Box>

      
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          {selectedService && (
            <>
              <DialogTitle sx={{ 
                m: 0, 
                p: 3, 
                backgroundColor: selectedService.color,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {selectedService.icon}
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {selectedService.title}
                  </Typography>
                </Box>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                  }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers sx={{ p: 4 }}>
                <Typography variant="body1" paragraph color="text.secondary">
                  {selectedService.description}
                </Typography>
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ color: selectedService.color, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle /> Key Features
                    </Typography>
                    <List>
                      {serviceDetails[selectedService.title]?.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <TrendingUp sx={{ color: selectedService.color, fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ color: selectedService.color, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Favorite /> Benefits
                    </Typography>
                    <List>
                      {serviceDetails[selectedService.title]?.benefits.map((benefit, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircle sx={{ color: selectedService.color, fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, p: 3, bgcolor: `${selectedService.color}10`, borderRadius: 2 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: selectedService.color }}>
                    <AccessTime sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Availability
                  </Typography>
                  <Typography variant="body2">
                    {selectedService.title === 'Emergency Assistance' 
                      ? 'Available 24/7, 365 days a year'
                      : 'Available during business hours, with some services accessible 24/7'}
                  </Typography>
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 3, justifyContent: 'space-between' }}>
                <Button 
                  onClick={handleCloseDialog}
                  variant="outlined"
                  sx={{ borderColor: selectedService.color, color: selectedService.color }}
                >
                  Close
                </Button>
                <Button 
                  variant="contained"
                  sx={{ backgroundColor: selectedService.color, '&:hover': { backgroundColor: selectedService.color } }}
                  onClick={() => {
                    handleCloseDialog();
                    handleContactSupport();
                  }}
                  startIcon={<Call />}
                >
                  Contact Now
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default SimpleServices;