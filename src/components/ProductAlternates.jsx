import React from 'react';
import { Card, Box, Typography, useMediaQuery, Grid } from '@mui/material';

const alternates = [
  { name: "Dual", img: "/images/dual.png" },
  { name: "Hands free", img: "/images/handsfree.png" },
  { name: "Scanlock", img: "/images/scanlock.png" },
  { name: "Single", img: "/images/single.png" },
  { name: "Core-R", img: "/images/core-r.png" },
  { name: "Core-S", img: "/images/core-s.png" },
  { name: "Summit", img: "/images/summit.png" },
  { name: "Surface Mount", img: "/images/surface-mount.png" },
  { name: "L10", img: "/images/l10.png" }
];

export default function ProductAlternates() {
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
        Product Alternates
      </Typography>
      <Grid container spacing={2}>
        {alternates.map((alt) => (
          <Grid item xs={6} sm={4} md={2} key={alt.name}>
            <Box
              sx={{
                bgcolor: '#16182c',
                borderRadius: 2,
                p: 1.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={alt.img}
                alt={alt.name}
                style={{ width: 50, height: 50, objectFit: 'contain', marginBottom: 8 }}
              />
              <Typography sx={{ fontSize: 13, color: '#e8e8fa' }}>{alt.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
