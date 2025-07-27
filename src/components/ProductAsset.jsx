import React, { useState } from 'react';
import { 
  Card, 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  IconButton, 
  useMediaQuery, 
  useTheme
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';

import productTracking from '../assets/trackingDetails.png'
import addIcon from '../assets/addIcon.png'
import opened from '../assets/opened.png'
import pioneer from '../assets/pioneer.png';

const assetData = [
  {
    id: 1,
    image: pioneer, // Replace with your actual image paths
    imageInfo: 'Front view',
    imageUrl: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 2,
    image: pioneer,
    imageInfo: 'Back View',
    imageUrl: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 3,
    image: pioneer,
    imageInfo: 'Top angle view',
    imageUrl: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 4,
    image: pioneer,
    imageInfo: 'Bottom angle View',
    imageUrl: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 5,
    image: pioneer,
    imageInfo: 'Left angle View',
    imageUrl: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
];

// Mobile Card Component
const MobileAssetCard = ({ asset }) => {
  return (
    <Card sx={{
      mb: 2,
      bgcolor: '#373A44',
      border: '1px solid #4A4D5A',
      borderRadius: 2,
      color: '#fff',
    }}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography sx={{ 
            color: '#b997ff', 
            fontWeight: 600, 
            fontSize: 14 
          }}>
            #{asset.id}
          </Typography>
          <img 
            src={asset.image} 
            alt={asset.imageInfo}
            style={{ 
              width: 50, 
              height: 40, 
              objectFit: 'cover', 
              borderRadius: 4 
            }}
          />
        </Box>
        
        <Typography sx={{ 
          color: '#FFF', 
          fontSize: 12, 
          mb: 1,
          fontFamily: 'Open Sans'
        }}>
          <strong>Image Info:</strong> {asset.imageInfo}
        </Typography>
        
        <Typography sx={{ 
          color: '#8A8FA3', 
          fontSize: 11, 
          mb: 2,
          wordBreak: 'break-all'
        }}>
          {asset.imageUrl}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <IconButton size="small" sx={{ color: '#b997ff' }}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#b997ff' }}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#ff5370' }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default function ProductAssetManagement() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={{
      bgcolor: '#373A44',
      borderRadius: 2.5,
      p: 2,
      mb: 2,
      mt: 2,
      color: '#fff',
      boxShadow: 'none',
    }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb:3 }}>
                     <IconButton size="small" sx={{ color: '#C346DD', background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)'}}>
                          <img src={productTracking} alt="productTracking" />
                         </IconButton>
                   <Typography className='card-heading'>
                      Product Asset Management
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

      {/* Mobile View */}
      {isMobile ? (
        <Box>
          {assetData.map((asset) => (
            <MobileAssetCard key={asset.id} asset={asset} />
          ))}
        </Box>
      ) : (
        /* Desktop Table View */
        <TableContainer sx={{ 
          bgcolor: 'transparent',
          border: '1px solid #4A4D5A',
          borderRadius: 2
        }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#4C4381' }}>
                <TableCell sx={{ 
                  color: '#FFF', 
                  fontWeight: 600,
                  fontSize: 12,
                  fontFamily: 'Open Sans',
                  borderBottom: 'none',
                  py: 1.5
                }}>
                  S.No.
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', 
                  fontWeight: 600,
                  fontSize: 12,
                  fontFamily: 'Open Sans',
                  borderBottom: 'none',
                  py: 1.5
                }}>
                  Image
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', 
                  fontWeight: 600,
                  fontSize: 12,
                  fontFamily: 'Open Sans',
                  borderBottom: 'none',
                  py: 1.5
                }}>
                  Image Info
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', 
                  fontWeight: 600,
                  fontSize: 12,
                  fontFamily: 'Open Sans',
                  borderBottom: 'none',
                  py: 1.5
                }}>
                  Image URL
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', 
                  fontWeight: 600,
                  fontSize: 12,
                  fontFamily: 'Open Sans',
                  borderBottom: 'none',
                  py: 1.5,
                  textAlign: 'center'
                }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assetData.map((asset, index) => (
                <TableRow 
                  key={asset.id}
                  sx={{ 
                    backgroundColor: index % 2 === 0 ? '#50526A' : '#252832',
                    '&:hover': {
                      backgroundColor: 'rgba(185, 151, 255, 0.1)'
                    }
                  }}
                >
                  <TableCell sx={{ 
                    color: '#FFF', 
                    borderBottom: '1px solid #4A4D5A',
                    fontSize: 12,
                    fontFamily: 'Open Sans',
                    py: 1.5
                  }}>
                    {asset.id}
                  </TableCell>
                  <TableCell sx={{ 
                    borderBottom: '1px solid #4A4D5A',
                    py: 0.5
                  }}>
                    <img 
                      src={asset.image} 
                      alt={asset.imageInfo}
                      style={{ 
                        width: 45, 
                        height: 35, 
                        objectFit: 'cover', 
                        borderRadius: 4,
                        border: '1px solid #4A4D5A'
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#FFF', 
                    borderBottom: '1px solid #4A4D5A',
                    fontSize: 12,
                    fontFamily: 'Open Sans',
                    py: 1.5
                  }}>
                    {asset.imageInfo}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#ffffff', 
                    borderBottom: '1px solid #4A4D5A',
                    // textDecoration:'',
                    fontSize: 11,
                    fontFamily: 'Open Sans',
                    py: 1.5,
                    maxWidth: 300
                  }}>
                    <Typography sx={{ 
                      overflow: 'hidden',
                      textDecorationLine:'initial',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      fontSize: 11
                    }}>
                      {asset.imageUrl}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ 
                    borderBottom: '1px solid #4A4D5A',
                    py: 1.5,
                    textAlign: 'center'
                  }}>
                    <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center' }}>
                    
                      <IconButton size="small" sx={{ color: '#b997ff' }}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#ff5370' }}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      
    </Card>

    
  );
}
