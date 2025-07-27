import React from 'react';
import { Card, Box, Typography, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import settingbase from '../assets/settingbase.png'
import productTracking from '../assets/trackingDetails.png'
import edit from '../assets/edit.png'
import opened from '../assets/opened.png'

export default function ProductAlternates({ alternates, title }) {
  return (
    <Card
      sx={{
        bgcolor: '#373A44',
        borderRadius: 2.5,
        p: 2,
        mb: 2,
        mt:2,
        color: '#fff',
        boxShadow: 'none',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Top Icons Row */}
        {/* Top-left Icon */}
    
        {/* Title, centered with flex-grow */}
             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb:3 }}>
                            <IconButton size="small" sx={{ color: '#C346DD', background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)'}}>
                                 <img src={productTracking} alt="productTracking" />
                                </IconButton>
                          <Typography className='card-heading'>
                            {title}
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
      {/* Grid of cards */}
      <Grid
        container
        spacing={{ xs: 2, md: 2.5 }}
        columns={{ xs: 2, sm: 3, md: 9 }}
      >
        {alternates.map((alt) => (
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            key={alt.name}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            <Box
              sx={{
                bgcolor: '#373A44',
                border: '1px solid gray',
                borderRadius: 2,
                px: 1,
                py: 1,
                width: '100%',
                minWidth: { xs: 80, md: 100 },
                maxWidth: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <img
                src={alt.img}
                alt={alt.name}
                style={{
                  width: 74,
                  height: 47,
                  objectFit: 'contain',
                  marginBottom: 9,
                  display: 'block'
                }}
              />
              <Typography sx={{
                fontSize: 13,
                color: '#e8e8fa',
                textAlign: 'center',
                fontWeight: 500,
                whiteSpace: 'nowrap'
              }}>
                {alt.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
