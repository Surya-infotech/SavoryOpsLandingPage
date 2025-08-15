import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Box
} from '@mui/material';

const ContactDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    restaurantName: '',
    locations: '',
    message: ''
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      restaurantName: '',
      locations: '',
      message: ''
    });
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      className="contact-dialog"
    >
      <DialogTitle className="dialog-title">
        Get Started with SavoryOps
      </DialogTitle>
      
      <DialogContent className="dialog-content">
        <Box className="form-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange('email')}
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="Restaurant Name"
                  variant="outlined"
                  value={formData.restaurantName}
                  onChange={handleChange('restaurantName')}
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="Number of Locations"
                  variant="outlined"
                  value={formData.locations}
                  onChange={handleChange('locations')}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="Message (Optional)"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange('message')}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      
      <DialogActions className="dialog-actions">
        <Button onClick={onClose} className="form-cancel-button">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          className="form-submit-button"
        >
          Submit Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
