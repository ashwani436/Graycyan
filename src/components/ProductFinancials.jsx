import React from 'react';
import { Card, Box, Typography, useMediaQuery } from '@mui/material';

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
      <Typography variant="subtitle1" sx={{ color: '#b997ff', mb: 2, fontWeight: 600 }}>
        Product Financials
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
