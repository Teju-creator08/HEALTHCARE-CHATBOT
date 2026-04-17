import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
  IconButton
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DoctorCard = ({ doctor }) => {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: '0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 6
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={doctor.image || 'https://via.placeholder.com/150'}
        alt={doctor.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography variant="h6" component="div" color="primary">
            {doctor.name}
          </Typography>
          <Chip 
            label={doctor.specialization} 
            color="primary" 
            size="small" 
            variant="outlined"
          />
        </Box>
        
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={doctor.rating} readOnly precision={0.5} size="small" />
          <Typography variant="body2" color="text.secondary" ml={1}>
            ({doctor.rating})
          </Typography>
          <Typography variant="body2" color="text.secondary" ml="auto">
            Exp: {doctor.experience}
          </Typography>
        </Box>
        
        <Box mb={2}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <PhoneIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
            {doctor.contact}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <EmailIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
            {doctor.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <LocationOnIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
            {doctor.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <AccessTimeIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
            {doctor.availability}
          </Typography>
        </Box>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="success.main">
            {doctor.fee}
          </Typography>
          <Button 
            variant="contained" 
            size="small"
            startIcon={<PhoneIcon />}
            sx={{ borderRadius: 2 }}
          >
            Call Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;