import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Chip,
  Paper
} from '@mui/material';
import DoctorCard from '../components/DoctorCard';
import SearchIcon from '@mui/icons-material/Search';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialization, setSpecialization] = useState('');

  useEffect(() => {
    
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:5000/doctors');
      const data = await response.json();
      setDoctors(data.doctors);
      setFilteredDoctors(data.doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const specializations = [
    "All Specialist",
    "Neurologist",
    "Cardiologist",
    "Dermatologist",
    "Orthopedic",
    "Pediatrician",
    "General Physician",
    "Gynecologist",
    "Gastroenterologist",
    "Psychiatrist",
    "ENT Specialist",
    "Endocrinologist",
    "Urologist",
    "Ophthalmologist",
    "Dentist",
    "Pulmonologist",
    "Oncologist",
    "Rheumatologist",
    "Nephrologist",
    "Hematologist",
    "Surgeon"
  ];

  useEffect(() => {
    let result = doctors;
    
    if (specialization && specialization !== 'All Specializations') {
      result = result.filter(doc => 
        doc.specialization.toLowerCase().includes(specialization.toLowerCase())
      );
    }
    
    if (searchTerm) {
      result = result.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredDoctors(result);
  }, [searchTerm, specialization, doctors]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom color="primary">
          Our Medical Specialists
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Connect with the best healthcare professionals
        </Typography>
      </Box>

      {/* Filters */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Doctors by Name, Specialization or Symptoms"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Specialization</InputLabel>
              <Select
                value={specialization}
                label="Specialization"
                onChange={(e) => setSpecialization(e.target.value)}
              >
                {specializations.map((spec, index) => (
                  <MenuItem key={index} value={spec}>
                    {spec}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Doctor Count */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">
          {filteredDoctors.length} Doctors Available
        </Typography>
        <Box>
          <Chip label="Neurologist" color="primary" variant="outlined" sx={{ mr: 1 }} />
          <Chip label="Cardiologist" color="secondary" variant="outlined" sx={{ mr: 1 }} />
          <Chip label="24/7 Available" color="success" variant="outlined" />
        </Box>
      </Box>

      {/* Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <Grid container spacing={3}>
          {filteredDoctors.map((doctor) => (
            <Grid item key={doctor.id} xs={12} sm={6} md={4}>
              <DoctorCard doctor={doctor} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box textAlign="center" py={8}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No doctors found matching your criteria
          </Typography>
          <Typography variant="body1">
            Try a different search term or specialization
          </Typography>
        </Box>
      )}

      
      <Paper elevation={1} sx={{ p: 3, mt: 6, bgcolor: '#f0f8ff' }}>
        <Grid container spacing={3} textAlign="center">
          <Grid item xs={6} md={3}>
            <Typography variant="h4" color="primary">50+</Typography>
            <Typography variant="body2">Specialists</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" color="primary">24/7</Typography>
            <Typography variant="body2">Emergency Support</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" color="primary">5000+</Typography>
            <Typography variant="body2">Patients Helped</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" color="primary">98%</Typography>
            <Typography variant="body2">Satisfaction Rate</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Doctors;