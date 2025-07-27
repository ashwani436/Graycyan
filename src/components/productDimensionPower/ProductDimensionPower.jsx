import React from 'react';
import { Card, Box, Typography, IconButton } from '@mui/material';
import productTracking from '../../assets/trackingDetails.png'
import edit from '../../assets/edit.png'
import opened from '../../assets/opened.png'
import './ProductDimensionPower.css'; // Import the CSS file

export default function ProductDimensionPower({items, title}) {
//   const items = [
//     { label: "Height", value: "31.75 cm" },
//     { label: "Width", value: "52 cm" },
//     { label: "Depth", value: "19.5 cm" },
//     { label: "Weight", value: "63 kg" },
//     { label: "Voltage", value: "12 V" },
//     { label: "Power Rating", value: "300 W" },
//   ];

  return (
    <Card sx={{
      bgcolor: '#1c1d1e',
      borderRadius: 2.5,
      mt: 2,
      p: 2,
      mb: 2,
      color: '#fff',
      boxShadow: 'none',
    }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <IconButton size="small" sx={{ 
          color: '#C346DD', 
          background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)',
          width: 28,
          height: 28
        }}>
          <img src={productTracking} alt="productTracking" style={{ width: 16, height: 16 }} />
        </IconButton>
       <Typography className="card-heading">
         {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: '10px', ml: 'auto' }}>
          <IconButton size="small" sx={{ color: '#b4b8d5' }}>
            <img src={edit} alt="edit"  />
          </IconButton>
          <IconButton size="small" sx={{ color: '#b4b8d5' }}>
            <img src={opened} alt="opened" style={{ width: 16, height: 16 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Content using CSS Grid */}
      <div className="dimension-grid">
        {items.map((item, index) => (
          <div key={index} className="dimension-item">
            <div className="dimension-label">{item.label}</div>
            <div className="dimension-value">{item.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
