import React from 'react';
import { Card, Typography, Box, Grid, IconButton } from '@mui/material';
import productTracking from '../assets/trackingDetails.png'
import edit from '../assets/edit.png'
import opened from '../assets/opened.png'


export default function ProductMetadataAttributes() {
  const items = [
    { label: "Foot Type", value: "E-Z" },
    { label: "Foot Distance", value: "51.25 cm, 52.75 cm, 68.34 cm" },
    { label: "Technology", value: "SmartLED, Linear Super-LED, TRIO" },
    { label: "Height", value: "17.8 cm, 24.9 cm, 32.4 cm" },
    { label: "Hardware", value: "22 AWG, 33 AWG, 37 AWG" },
  ];

  return (
    <Card
      sx={{
        bgcolor: '#23243b',
        borderRadius: 2.5,
        p: 2,
        mb: 2,
        mt: 2,
        boxShadow: 'none',
      }}
    >
      {/* Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb:3 }}>
        <IconButton size="small" sx={{ color: '#C346DD', background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)'}}>
             <img src={productTracking} alt="productTracking" />
            </IconButton>
      <Typography variant="subtitle1" sx={{ color: '#b997ff', fontWeight: 600 }}>
           Product Metadata Attributes
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

      {/* Responsive Grid */}
      <Grid container spacing={2}>
        {items.map(({ label, value }, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box>
              {/* Label */}
              <Typography
                sx={{
                  color: '#FFF',
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: '100%',
                  mb: 0.5,
                }}
              >
                {label}
              </Typography>

              {/* Value */}
              <Typography
                sx={{
                  color: '#FFF',
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: '120%',
                }}
              >
                {value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
