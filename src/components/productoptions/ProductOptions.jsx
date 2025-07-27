import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Collapse,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';

import productTracking from '../../assets/trackingDetails.png'
import addIcon from '../../assets/addIcon.png'
import edit from '../../assets/edit.png'
import opened from '../../assets/opened.png'

// Styled components
const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#2F323C',
  borderRadius: '12px',
  padding: theme.spacing(2),
  color: 'white',
  maxWidth: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
  }
}));


const SectionBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  }
}));

const ColorButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'selected'
})(({ theme, color, selected }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: color,
  cursor: 'pointer',
  border: selected ? '3px solid #9c27b0' : '2px solid transparent',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    border: '2px solid #9c27b0',
  },
  [theme.breakpoints.down('sm')]: {
    width: '35px',
    height: '35px',
  }
}));

const DimensionChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#3a3d4d',
  color: 'white',
  margin: theme.spacing(0.5),
  '&.Mui-selected': {
    backgroundColor: '#9c27b0',
  },
  '&:hover': {
    backgroundColor: '#4a4d5d',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    height: '28px',
  }
}));

const ControlChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#3a3d4d',
  color: 'white',
  margin: theme.spacing(0.5),
  '&.Mui-selected': {
    backgroundColor: '#9c27b0',
  },
  '&:hover': {
    backgroundColor: '#4a4d5d',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    height: '28px',
  }
}));

const ProductOptions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(true);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedDimension, setSelectedDimension] = useState(0);
  const [selectedControl, setSelectedControl] = useState(0);

  const colors = [
    '#ff6b35', // Orange
    '#2d3748', // Dark blue/gray
    '#e2e8f0', // Light gray
    '#e53e3e', // Red
    '#ffd89b'  // Light orange/yellow
  ];

  const dimensions = [
    { label: '12.4" × 18.4"', unit: 'cm' },
    { label: '22.4" × 28.4"', unit: 'cm' },
    { label: '42.4" × 48.6"', unit: 'cm' }
  ];

  const controls = ['WeCan', 'WeCanX'];

  return (
    <StyledContainer>
     
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb:3 }}>
                     <IconButton size="small" sx={{ color: '#C346DD', background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)'}}>
                          <img src={productTracking} alt="productTracking" />
                         </IconButton>
                   <Typography className="card-heading">
                     Product Options
                   </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', ml: 'auto' }}>
                             <IconButton size="small" sx={{ color: '#b4b8d5' }}>
                               <img src={addIcon} alt="edit" />
                             </IconButton>
                             <IconButton size="small" sx={{ color: '#b4b8d5' }}>
                               <img src={opened} alt="opened" />
                             </IconButton>
                           </Box>
                   </Box>
         
        
        
    

      <Collapse in={expanded}>
        {/* Colors Section */}
        <SectionBox>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 2 
          }}>
            <Typography 
              variant={isMobile ? "body2" : "body1"}
              sx={{ fontWeight: 500 }}
            >
              Colors*
            </Typography>
            <IconButton size="small" sx={{ color: '#9c27b0' }}>
             <img src={edit} alt="edit" />
            </IconButton>
          </Box>
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 1.5,
              flexWrap: 'wrap'
            }}
          >
            {colors.map((color, index) => (
              <ColorButton
                key={index}
                color={color}
                selected={selectedColor === index}
                onClick={() => setSelectedColor(index)}
              />
            ))}
          </Box>
        </SectionBox>

        {/* Dimensions Section */}
        <SectionBox>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 2 
          }}>
            <Typography 
              variant={isMobile ? "body2" : "body1"}
              sx={{ fontWeight: 500 }}
            >
              Dimensions*
            </Typography>
            <IconButton size="small" sx={{ color: '#9c27b0' }}>
               <img src={edit} alt="edit" />
            </IconButton>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 1,
            flexWrap: 'wrap'
          }}>
            {dimensions.map((dimension, index) => (
              <DimensionChip
                key={index}
                label={`${dimension.label} (${dimension.unit})`}
                clickable
                className={selectedDimension === index ? 'Mui-selected' : ''}
                onClick={() => setSelectedDimension(index)}
              />
            ))}
          </Box>
        </SectionBox>

        {/* Control Section */}
        <SectionBox className='section-boxstyles'>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
           
            mb: 2 
          }}>
            <Typography 
              variant={isMobile ? "body2" : "body1"}
              sx={{ fontWeight: 500 }}
            >
              Control
            </Typography>
            <IconButton size="small" sx={{ color: '#9c27b0' }}>
               <img src={edit} alt="edit" />
            </IconButton>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 1,
            flexWrap: 'wrap'
          }}>
            {controls.map((control, index) => (
              <ControlChip
                key={index}
                label={control}
                clickable
                className={selectedControl === index ? 'Mui-selected' : ''}
                onClick={() => setSelectedControl(index)}
              />
            ))}
          </Box>
        </SectionBox>
      </Collapse>
    </StyledContainer>
  );
};

export default ProductOptions;
