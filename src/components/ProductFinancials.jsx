import React from 'react';
import { Card, Box, Typography, useMediaQuery, IconButton } from '@mui/material';

import productTracking from '../assets/trackingDetails.png'
import edit from '../assets/edit.png'
import opened from '../assets/opened.png'


export default function ProductFinancials() {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Card sx={{
      bgcolor: '#23243b',
      borderRadius: 2.5,
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
               Product Financials
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
        <InfoItem label="Material Cost" value="$175.23" />
        <InfoItem label="Labor Cost" value="$291.46" />
        <InfoItem label="Process Cost" value="$66.21" />
        <InfoItem label="Misc. Cost" value="$15.49" />
        <InfoItem label="Last Price" value="$1,875.23" />
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
