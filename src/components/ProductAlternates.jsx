import React from 'react';
import { Card, Box, Typography, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import settingbase from '../assets/settingbase.png'

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1.5,
          position: 'relative',
        }}
      >
        {/* Top-left Icon */}
       <Box 
                           sx={{ 
                             backgroundColor: '#bb86fc',
                             borderRadius: '50%',
                             width: 32,
                             height: 32,
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center'
                           }}
                         >
                           <img src={settingbase} sx={{ color: 'white', fontSize: 18 }} />
                         </Box>
        {/* Title, centered with flex-grow */}
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
            // color: '#b997ff',
            fontWeight: 600,
            // textAlign: 'center',
            
            ml:1, // adjusts for left icon width, tune as needed
            fontSize: 17,
          }}
        >
          {title}
        </Typography>
        {/* Top-right Icon */}
        <IconButton sx={{ color: "#b997ff", p: '6px' }}>
          <EditIcon />
        </IconButton>
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
