import React from 'react';
import { Card, Box, Typography, useMediaQuery } from '@mui/material';

export default function ProductMetadataAttributes() {
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
      <Typography variant="subtitle1" sx={{ color: '#b997ff', mb: 2, fontWeight: 600 }}>
        Product Metadata Attributes
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
        <InfoItem label="Foot Type" value="E-Z" />
        <InfoItem label="Foot Distance" value="51.25 cm, 52.75 cm, 68.34 cm" />
        <InfoItem label="Technology" value="SmartLED, Linear Super-LED, TRIO" />
        <InfoItem label="Height" value="17.8 cm, 24.9 cm, 32.4 cm" />
        <InfoItem label="Hardware" value="22 AWG, 33 AWG, 37 AWG" />
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
