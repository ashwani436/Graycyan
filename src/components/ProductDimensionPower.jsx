import React from 'react';
import { Card, Box, Typography, useMediaQuery } from '@mui/material';

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
      <Typography variant="subtitle1" sx={{ color: '#b997ff', mb: 2, fontWeight: 600 }}>
        Product Dimension and Power
      </Typography>
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
