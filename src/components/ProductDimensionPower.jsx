import React from 'react';
import { Card, Box, Typography, useMediaQuery, IconButton } from '@mui/material';

import productTracking from '../assets/trackingDetails.png'
import edit from '../assets/edit.png'
import opened from '../assets/opened.png'

export default function ProductDimensionPower() {
  const isMobile = useMediaQuery('(max-width:900px)');
  return (
    <Card sx={{
      bgcolor: '#23243b',
      borderRadius: 2.5,
      mt:2,
      p: 2,
      mb: 2,
      color: '#fff',
      boxShadow: 'none',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb:3 }}>
        <IconButton size="small" sx={{ color: '#C346DD', background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)'}}>
             <img src={productTracking} alt="productTracking" />
            </IconButton>
      <Typography variant="subtitle1" sx={{ color: '#b997ff', fontWeight: 600 }}>
        Product Dimension and Power
      </Typography>
       <Box sx={{ display: 'flex', gap: '10px', ml: 'auto' }}>
                <IconButton size="small" sx={{ color: '#b4b8d5' }}>
                  <img src={edit} alt="edit" />
                </IconButton>
                <IconButton size="small" sx={{ color: '#b4b8d5' }}>
                  <img src={opened} alt="opened" />
                </IconButton>
              </Box>
      </Box>

      
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: isMobile ? 2 : 6,
        }}
      >
        <InfoItem label="Height" value="31.75 cm" />
        <InfoItem label="Width" value="52 cm" />
        <InfoItem label="Depth" value="19.5 cm" />
        <InfoItem label="Weight" value="63 kg" />
        <InfoItem label="Voltage" value="12 V" />
        <InfoItem label="Power Rating" value="300 W" />
      </Box>
    </Card>
  );
}

function InfoItem({ label, value }) {
  return (
    <Box>
      <Typography sx={{ color: '#bfcbe8', fontSize: 13 }}>{label}</Typography>
      <Typography sx={{ fontWeight: 700, fontSize: 16, mt: 0.5 }}>{value}</Typography>
    </Box>
  );
}
