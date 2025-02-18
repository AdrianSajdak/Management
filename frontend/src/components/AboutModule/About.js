import React from 'react';
import {Typography, Box } from '@mui/material';

const About = () => {
  return (
    <div>
      <Box sx={{
        padding: '20px',
        textAlign: 'center'
        }}>
        <Typography variant="h3" gutterBottom>
          MANAGEMENT APPLICATION
        </Typography>
        <Typography variant="h5">
          Management application created to help construction companies in their daily work:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem'
          }}
        >
          <Box sx={{ textAlign: 'center', bgcolor: 'violet.main', p: 2, borderRadius: 3 }}>
            <Typography variant="body1">
              Manage employees
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', bgcolor: 'violet.main', p: 2, borderRadius: 3 }}>
            <Typography variant="body1">
              Implement mathematical formulas for calculating constructions
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
