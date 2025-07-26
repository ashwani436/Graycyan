import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import { Edit } from '@mui/icons-material';

const TrackingDetailItem = ({ batchNumber, serialNumber }) => (
  <Box
    sx={{
      bgcolor: '#1c1d1e',
      borderRadius: 2,
      p: 2,
      display: 'flex',
      flexDirection: 'row',
      gap: 1.5,
      justifyContent:'space-between',
      border: '1px solid #6c6d74',
      width: '100%',
    }}
  >
    <Box>
      <Typography
        sx={{
          fontFamily: "'Open Sans', Arial, sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          color: '#8892b0',
          mb: 0.5,
          lineHeight: 1,
        }}
      >
        Batch Number
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Open Sans', Arial, sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          color: '#ffffff',
          lineHeight: 1.2,
        }}
      >
        {batchNumber}
      </Typography>
    </Box>
    
    <Box>
      <Typography
        sx={{
          fontFamily: "'Open Sans', Arial, sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          color: '#8892b0',
          mb: 0.5,
          lineHeight: 1,
        }}
      >
        Serial Number
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Open Sans', Arial, sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          color: '#ffffff',
          lineHeight: 1.2,
        }}
      >
        {serialNumber}
      </Typography>
    </Box>
  </Box>
);

export default function ProductTrackingDetails() {
  const trackingData = [
    { batchNumber: '2873416', serialNumber: '1124532' },
    { batchNumber: '2873416', serialNumber: '1124532' },
    { batchNumber: '2873416', serialNumber: '1124532' },
    { batchNumber: '2873416', serialNumber: '1124532' },
    { batchNumber: '2873416', serialNumber: '1124532' },
    { batchNumber: '2873416', serialNumber: '1124532' },
  ];

  return (
    <Card
      sx={{
        bgcolor: '#1c1d1e',
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        fontFamily: "'Open Sans', Arial, sans-serif",
        maxWidth: "100%",
        mx: 'auto',
        mt: 2,
      }}
    >
      {/* Card Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 3,
          borderBottom: '1px solid #2a2f4a',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: '#64ffda',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#1e2139',
              }}
            >
              📋
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '18px',
              fontFamily: "'Open Sans', Arial, sans-serif",
              color: '#ffffff',
              letterSpacing: '0.5px',
            }}
          >
            Product Tracking Details
          </Typography>
        </Box>
        
        <IconButton 
          size="small" 
          sx={{ 
            color: '#8892b0',
            '&:hover': {
              color: '#64ffda',
              bgcolor: 'rgba(100, 255, 218, 0.04)',
            }
          }}
        >
          <Edit fontSize="small" />
        </IconButton>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ p: 3 }}>
        {/* Mobile: Center-aligned container for single column */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {trackingData.map((item, index) => (
            <Box key={index} sx={{ width: '100%', maxWidth: 400 }}>
              <TrackingDetailItem 
                batchNumber={item.batchNumber}
                serialNumber={item.serialNumber}
              />
            </Box>
          ))}
        </Box>

        {/* Desktop: Grid layout with 4 items per row */}
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-start'
          }}
        >
          {trackingData.map((item, index) => (
            <Grid 
              item 
              xs={12} 
              md={3} 
              key={index}
            >
              <TrackingDetailItem 
                batchNumber={item.batchNumber}
                serialNumber={item.serialNumber}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
