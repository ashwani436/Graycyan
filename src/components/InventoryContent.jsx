import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  Chip,
} from '@mui/material';
import { Edit, InfoOutlined } from '@mui/icons-material';
import PRODUCT_IMG from '../assets/productbase.png'
import QR_CODE_IMG from '../assets/qrcode.png'

// Replace with your actual image paths
// const PRODUCT_IMG = '/assets/images/productbase.png';
const QR_IMG = '/assets/images/qr-code.png';

// Reusable component for each property line
const PropertyLine = ({ label, value, valueColor }) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      sx={{
        color: '#b4b8d5',
        fontFamily: "'Open Sans', Arial, sans-serif",
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: 1,
        letterSpacing: 0,
        mb: 0.5,
      }}
    >
      {label}
    </Typography>
    <Box
      sx={{
        fontFamily: "'Open Sans', Arial, sans-serif",
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: '14px',
        lineHeight: 1.2,
        letterSpacing: 0,
        color: valueColor || '#fff',
      }}
    >
      {value}
    </Box>
  </Box>
);


export default function ProductBasePropertiesCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        marginTop: 5,
        bgcolor: '#1c1d1e',
        color: '#fff',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        fontFamily: "'Open Sans', Arial, sans-serif",
      }}
    >
      {/* Card Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <InfoOutlined sx={{ color: '#b4b8d5' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '18px' }}>
            Product Base Properties
          </Typography>
        </Box>
        <IconButton size="small" sx={{ color: '#b4b8d5' }}>
          <Edit sx={{ fontSize: '20px' }} />
        </IconButton>
      </Box>

      {/* <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} /> */}

      {/* Card Body with Equal 4-Column Layout */}
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={3}>
          
          {/* Column 1: Image & Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ height: '100%' }}>
              <Box
                sx={{
                  borderRadius: 2,
                  border: `1px solid gray`,
                  p: 2,
                  mb: 2,
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 140,
                  minWidth: 290,
                  width: '100%',
        
                }}
              >
                <img
                  src={PRODUCT_IMG}
                  alt="Surface Mount"
                  style={{ 
                    width: '100%', 
                    maxWidth: '200px',
                    height: '130px',
                    objectFit: 'contain' 
                  }}
                />

                 <Typography 
                sx={{ 
                  fontWeight: 600, 
                  fontSize: '15px',
                  marginTop: 4,
                  textAlign: 'center',
                  mb: 1.5
                }}
              >
                Surface Mount
              </Typography>
              </Box>
              
             
            </Box>
          </Grid>

          {/* Column 2: First Property Group */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ height: '100%' }}>
              <PropertyLine 
                label="Inventory Class*" 
                value={
                  <Chip
                    label="Pre Production"
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: '#43c881',
                      bgcolor:'#0B93A366',
                      color: '#dbe5e0',
                      fontWeight: 700,
                      fontSize: '12px',
                      height: '24px',
                      '.MuiChip-label': {
                        px: '8px'
                      }
                    }}
                  />
                }
              />
              <PropertyLine label="Part Number*" value="022134" />
              <PropertyLine label="Line*" value="Carbide" />
              
              <Box>
                <Typography
                  sx={{
                    color: '#b4b8d5',
                    fontWeight: 600,
                    fontSize: '12px',
                    mb: 0.5,
                    textTransform: 'uppercase',
                  }}
                >
                  QR Code
                </Typography>
                <Box
                  sx={{
                    bgcolor: '#fff',
                    p: 0.5,
                    borderRadius: 1,
                    width: 50,
                    height: 50,
                  }}
                >
                  <img src={QR_CODE_IMG} alt="QR Code" style={{ width: '100%' }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Column 3: Middle Property Group (The "box") */}
          <Grid item xs={12} sm={6} md={3}>
              <PropertyLine label="SKU(ID)" value="2876512" />
              <PropertyLine label="Category*" value="Lighting" />
              <PropertyLine label="Series" value="Surface Mount" />
          </Grid>

          {/* Column 4: Last Property Group */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ height: '100%' }}>
              <PropertyLine label="Product Type*" value="Spare Part" />
              <PropertyLine label="Family*" value="Illumination" />
              <PropertyLine label="Warranty" value="05 Years 10WAR-02" />
            </Box>
          </Grid>
           <Box mt={4}>
        <Typography variant="h6" color="grey.300" gutterBottom>
          Description
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mb: 3 }}>
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid volutpa.
        </Typography>

        <Typography variant="h6" color="grey.300" gutterBottom>
          Long Description
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mb: 3 }}>
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
        </Typography>

        <Typography variant="h6" color="grey.300" gutterBottom>
          Marketing Description
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
        </Typography>
      </Box>
        </Grid>
      </CardContent>

    </Card>
  );
}
