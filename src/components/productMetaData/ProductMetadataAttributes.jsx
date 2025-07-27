import React from 'react';
import { Card, Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './ProductMetadataCard.css'; // We'll create this CSS file
import productTracking from '../../assets/trackingDetails.png'
import edit from '../../assets/edit.png'
import opened from '../../assets/opened.png'

export default function ProductMetadataAttributes() {
  return (
    <Card sx={{
      bgcolor: '#1c1d1e',
      borderRadius: 2.5,
      p: 2, // Remove MUI padding to use custom CSS
      mb: 2,
      mt: 2,
      boxShadow: 'none',
      overflow: 'hidden'
    }}>
      {/* Header with MUI */}
    
       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb:3 }}>
              <IconButton size="small" sx={{ color: '#C346DD', background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)'}}>
                   <img src={productTracking} alt="productTracking" />
                  </IconButton>
            <Typography className="card-heading">
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
      

      {/* Content using HTML/CSS */}
      <div className="metadata-content">
        <div className="metadata-grid">
          <div className="metadata-item">
            <div className="metadata-label">Foot Type</div>
            <div className="metadata-value">E-Z</div>
          </div>
          
          <div className="metadata-item">
            <div className="metadata-label">Foot Distance</div>
            <div className="metadata-value">51.25cm, 52.75cm, 68.34cm</div>
          </div>
          
          <div className="metadata-item">
            <div className="metadata-label">Technology</div>
            <div className="metadata-value">SmartLED, Linear Super-LED, TRIO</div>
          </div>
          
          <div className="metadata-item">
            <div className="metadata-label">Height</div>
            <div className="metadata-value">17.8cm, 24.9cm, 32.4cm</div>
          </div>
          
          <div className="metadata-item">
            <div className="metadata-label">Hardware</div>
            <div className="metadata-value">22 AWG, 33 AWG, 37 AWG</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
