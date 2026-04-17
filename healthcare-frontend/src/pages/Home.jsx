import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Paper,
  Avatar,
  IconButton,
  Chip,
  Fade,
  Zoom,
  Slide,
  useScrollTrigger,
  Fab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import SickIcon from '@mui/icons-material/Sick'; 
import WhatshotIcon from '@mui/icons-material/Whatshot'; 
import CoronavirusIcon from '@mui/icons-material/Coronavirus'; 
import RestaurantIcon from '@mui/icons-material/Restaurant'; 
import SpaIcon from '@mui/icons-material/Spa'; 
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'; 
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra'; 
import GrassIcon from '@mui/icons-material/Grass';
import WarningIcon from '@mui/icons-material/Warning'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HearingIcon from '@mui/icons-material/Hearing'; 
import NoFoodIcon from '@mui/icons-material/NoFood'; 

const Home = () => {
  const navigate = useNavigate();
  const [animated, setAnimated] = useState(false);
  
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setAnimated(true);
  }, []);

  const features = [
    {
      icon: <ChatIcon fontSize="large" />,
      title: "AI Health Assistant",
      description: "Instant symptom analysis with our intelligent chatbot",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      link: "/chat",
      delay: 0
    },
    {
      icon: <SearchIcon fontSize="large" />,
      title: "Find Doctors",
      description: "Connect with certified specialists in your area",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      link: "/doctors",
      delay: 100
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: "24/7 Support",
      description: "Round-the-clock medical assistance available",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      link: "/contact",
      delay: 200
    },
    {
      icon: <HealthAndSafetyIcon fontSize="large" />,
      title: "Health Tips",
      description: "Daily preventive care and wellness advice",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      link: "/services",
      delay: 300
    }
  ];

  
  const symptoms = [
    { 
      name: "Headache", 
      icon: <SickIcon />, 
      color: "#1976d2",
      description: "Migraine, tension headaches"
    },
    { 
      name: "Fever", 
      icon: <WhatshotIcon />, 
      color: "#dc004e",
      description: "High temperature, chills"
    },
    { 
      name: "Cough", 
      icon: <CoronavirusIcon />, 
      color: "#2e7d32",
      description: "Dry or wet cough"
    },
    { 
      name: "Stomach Pain", 
      icon: <SickIcon />, 
      color: "#ed6c02",
      description: "Abdominal discomfort"
    },
    { 
      name: "Skin Rash", 
      icon: <SpaIcon />, 
      color: "#9c27b0",
      description: "Itching, redness, irritation"
    },
    { 
      name: "Joint Pain", 
      icon: <AccessibilityNewIcon />, 
      color: "#0288d1",
      description: "Arthritis, swelling, stiffness"
    },
    { 
      name: "Back Pain", 
      icon: <AirlineSeatReclineExtraIcon />, 
      color: "#d32f2f",
      description: "Lower back, sciatica"
    },
    { 
      name: "Allergy", 
      icon: <GrassIcon />, 
      color: "#7b1fa2",
      description: "Seasonal, food allergies"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Patients Helped", icon: <GroupsIcon /> },
    { value: "200+", label: "Expert Doctors", icon: <MedicalServicesIcon /> },
    { value: "24/7", label: "Availability", icon: <AccessTimeIcon /> },
    { value: "98%", label: "Satisfaction Rate", icon: <TrendingUpIcon /> }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      feedback: "The AI assistant accurately suggested I see a neurologist for my migraines. Life-changing!",
      role: "Patient",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      feedback: "Found the perfect dermatologist for my skin condition within minutes. Highly recommended!",
      role: "Teacher",
      avatar: "PS"
    },
    {
      name: "Dr. Arvind Patel",
      feedback: "As a doctor, I appreciate how this platform helps patients find the right specialist.",
      role: "Cardiologist",
      avatar: "AP"
    }
  ];

  const faqs = [
    {
      question: "Is the AI chatbot diagnosis accurate?",
      answer: "Our AI chatbot provides preliminary guidance based on symptoms. While it's highly accurate for common conditions, it's not a substitute for professional medical diagnosis. Always consult a doctor for serious symptoms."
    },
    {
      question: "How quickly can I connect with a doctor?",
      answer: "You can get instant recommendations through our AI assistant. For direct consultations, most doctors are available within 24-48 hours. Emergency cases are prioritized."
    },
    {
      question: "Is my medical data secure?",
      answer: "Yes, we use bank-level encryption and comply with all healthcare data protection regulations. Your conversations and data are completely confidential."
    },
    {
      question: "Is this service free?",
      answer: "Yes, our AI chatbot and doctor search services are completely free. Some doctors may charge consultation fees for direct appointments."
    },
    {
      question: "Can I use this for emergency situations?",
      answer: "For emergencies like chest pain, difficulty breathing, or severe bleeding, call emergency services immediately (112/911). Our platform is for non-emergency guidance."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account is needed to use our AI chatbot or search doctors. However, creating an account allows you to save your chat history and book appointments."
    }
  ];

  const handleSymptomClick = (symptom) => {
    navigate(`/chat?query=${symptom.toLowerCase()}`);
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: { xs: 10, md: 15 },
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            animation: 'parallax 20s linear infinite'
          }
        }}
      >
        <style jsx="true">{`
          @keyframes parallax {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in={animated} timeout={1000}>
                <Box>
                  <Chip 
                    label="AI-Powered Healthcare" 
                    icon={<PsychologyIcon />}
                    sx={{ 
                      mb: 3, 
                      bgcolor: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      fontWeight: 'bold',
                      animation: 'fadeInUp 0.5s ease-out'
                    }}
                  />
                  <Typography 
                    variant="h1" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      animation: 'fadeInUp 0.6s ease-out'
                    }}
                  >
                    Your Health, 
                    <Box component="span" sx={{ color: '#ffeb3b' }}> Our Priority</Box>
                  </Typography>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      mb: 4, 
                      opacity: 0.9,
                      animation: 'fadeInUp 0.7s ease-out'
                    }}
                  >
                    Experience the future of healthcare with AI-powered medical assistance 
                    and instant access to top specialists.
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      gap: 3, 
                      flexWrap: 'wrap',
                      animation: 'fadeInUp 0.8s ease-out'
                    }}
                  >
                    <Button
                      variant="contained"
                      component={Link}
                      to="/chat"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        px: 5,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: 3,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        '&:hover': {
                          bgcolor: '#f5f5f5',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
                        },
                        transition: 'all 0.3s'
                      }}
                    >
                      Start Free Consultation
                    </Button>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/doctors"
                      size="large"
                      startIcon={<PlayCircleIcon />}
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: 3,
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255,255,255,0.15)',
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s'
                      }}
                    >
                      Specialist Doctors
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Zoom in={animated} timeout={1500}>
                <Box
                  sx={{
                    position: 'relative',
                    animation: 'float 6s ease-in-out infinite'
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
                    alt="Healthcare"
                    sx={{
                      width: '100%',
                      borderRadius: 4,
                      boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                      border: '8px solid rgba(255,255,255,0.1)'
                    }}
                  />
                  
                  <Paper 
                    elevation={10}
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      p: 2,
                      borderRadius: 3,
                      bgcolor: 'white',
                      color: 'primary.main',
                      width: 150,
                      animation: 'float 4s ease-in-out infinite 1s'
                    }}
                  >
                    <Typography variant="h6" align="center">
                      <PsychologyIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      AI Assistant
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                      Always Available
                    </Typography>
                  </Paper>
                  <Paper 
                    elevation={10}
                    sx={{
                      position: 'absolute',
                      bottom: -20,
                      left: -20,
                      p: 2,
                      borderRadius: 3,
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: 150,
                      animation: 'float 4s ease-in-out infinite 2s'
                    }}
                  >
                    <Typography variant="h6" align="center">
                      <MedicalServicesIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      200+ Doctors
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ opacity: 0.9 }}>
                      Expert Specialists
                    </Typography>
                  </Paper>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
       
        <Slide direction="up" in={animated} timeout={800}>
          <Paper 
            elevation={3}
            sx={{
              p: 4,
              mb: 8,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid item key={index} xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      mb: 2
                    }}>
                      {React.cloneElement(stat.icon, { fontSize: 'large' })}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Slide>

        
        <Box sx={{ mb: 10 }}>
          <Typography 
            variant="h2" 
            textAlign="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Our Services
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Comprehensive healthcare solutions powered by AI technology
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Zoom in={animated} timeout={800 + feature.delay}>
                  <Card 
                    component={Link}
                    to={feature.link}
                    sx={{ 
                      height: '100%', 
                      textAlign: 'center',
                      transition: 'all 0.4s',
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 4,
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.02)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                        '& .feature-icon': {
                          transform: 'scale(1.1) rotate(5deg)'
                        },
                        '& .feature-button': {
                          opacity: 1,
                          transform: 'translateY(0)'
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ py: 5, px: 3 }}>
                      <Box 
                        className="feature-icon"
                        sx={{
                          width: 90,
                          height: 90,
                          borderRadius: '50%',
                          background: feature.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 25px',
                          transition: 'transform 0.4s',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                        }}
                      >
                        {React.cloneElement(feature.icon, { 
                          sx: { 
                            fontSize: 40,
                            color: 'white'
                          } 
                        })}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        {feature.description}
                      </Typography>
                      <Box 
                        className="feature-button"
                        sx={{ 
                          opacity: 0,
                          transform: 'translateY(20px)',
                          transition: 'all 0.3s'
                        }}
                      >
                        <Button 
                          endIcon={<KeyboardArrowRightIcon />}
                          sx={{ 
                            color: 'primary.main',
                            fontWeight: 'bold'
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

       
        <Paper 
          elevation={3}
          sx={{ 
            p: { xs: 3, md: 5 }, 
            mb: 10, 
            borderRadius: 4,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
              Common Symptoms
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Click on any symptom to start instant consultation with our AI health assistant
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {symptoms.map((symptom, index) => (
              <Grid item key={index} xs={6} sm={4} md={3}>
                <Zoom in={animated} timeout={800 + index * 100}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '2px solid transparent',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'white',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: `0 15px 30px ${symptom.color}30`,
                        borderColor: symptom.color,
                        bgcolor: `${symptom.color}08`,
                        '& .symptom-icon-wrapper': {
                          transform: 'scale(1.1)',
                          bgcolor: `${symptom.color}15`
                        },
                        '& .symptom-name': {
                          color: symptom.color
                        }
                      }
                    }}
                    onClick={() => handleSymptomClick(symptom.name)}
                  >
                    <Box
                      className="symptom-icon-wrapper"
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.3s',
                        bgcolor: `${symptom.color}10`
                      }}
                    >
                      <Box 
                        sx={{ 
                          fontSize: 32,
                          color: symptom.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {React.cloneElement(symptom.icon, { 
                          sx: { fontSize: 32 }
                        })}
                      </Box>
                    </Box>
                    <Typography 
                      className="symptom-name"
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        color: '#333',
                        mb: 1,
                        transition: 'all 0.3s'
                      }}
                    >
                      {symptom.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: '0.8rem',
                        mb: 2
                      }}
                    >
                      {symptom.description}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: symptom.color,
                        fontWeight: 'medium',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      Get help now 
                      <ArrowForwardIcon sx={{ fontSize: 14, ml: 0.5 }} />
                    </Typography>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
          
        
          <Box 
            sx={{ 
              mt: 6,
              p: 3,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%)',
              color: 'white',
              textAlign: 'center',
              animation: 'pulse 2s infinite'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <WarningIcon sx={{ fontSize: 24, mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Emergency Symptoms
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Chest pain, difficulty breathing, severe bleeding, or loss of consciousness require immediate emergency care.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>
              Call emergency services immediately: 112 / 911
            </Typography>
          </Box>
        </Paper>

      
        <Box sx={{ mb: 10 }}>
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
            What Our Users Say
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Join thousands of satisfied patients
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Fade in={animated} timeout={1000 + index * 200}>
                  <Paper 
                    elevation={2}
                    sx={{ 
                      p: 4, 
                      borderRadius: 4,
                      height: '100%',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          width: 60, 
                          height: 60,
                          mr: 2,
                          fontWeight: 'bold'
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                      "{testimonial.feedback}"
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Box key={star} sx={{ color: '#ffc107', mr: 0.5 }}>
                          ★
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

     
        <Box sx={{ mb: 10 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <QuestionAnswerIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Find answers to common questions about our healthcare services
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 900, margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={index}
                elevation={1}
                sx={{ 
                  mb: 2,
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    margin: 0,
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    bgcolor: 'background.paper',
                    minHeight: 70,
                    '&.Mui-expanded': {
                      minHeight: 70,
                      bgcolor: 'primary.light',
                      color: 'white',
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        color: 'white'
                      }
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#f8f9fa', py: 3 }}>
                  <Typography variant="body1" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

      
        <Paper 
          elevation={0}
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: 4,
            p: { xs: 4, md: 8 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            }
          }}
        >
          <LocalHospitalIcon sx={{ fontSize: 80, mb: 3, opacity: 0.8 }} />
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Ready to Take Control of Your Health?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: 800, margin: '0 auto' }}>
            Join 10,000+ users who trust our AI-powered healthcare platform for instant medical guidance and specialist connections.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              component={Link}
              to="/chat"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                borderRadius: 3,
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.3s'
              }}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/services"
              size="large"
              startIcon={<VerifiedUserIcon />}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 5,
                py: 2,
                fontSize: '1.2rem',
                borderRadius: 3,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.3s'
              }}
            >
              Learn More
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 4, opacity: 0.8 }}>
            <SecurityIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
            Your data is 100% secure and private
          </Typography>
        </Paper>
      </Container>

      <Zoom in={trigger}>
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1000
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Zoom>

     
      <style jsx="true">{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </Box>
  );
};

export default Home;