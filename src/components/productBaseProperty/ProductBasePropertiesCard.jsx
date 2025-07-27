import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material';
import PRODUCT_IMG from '../../assets/productbase.png'
import QR_CODE_IMG from '../../assets/qrcode.png'
import settingbase from '../../assets/settingbase.png'
import edit from '../../assets/edit.png'
import refresh from '../../assets/refresh.png'
import exportsImg from '../../assets/export.png'
import opened from '../../assets/opened.png'
import './ProductBasePropertiesCard.css';

const PropertyLine = ({ label, value, valueColor }) => (
  <div className="property-line">
    <div className="property-label">{label}</div>
    <div className="property-value" style={{ color: valueColor || '#fff' }}>
      {value}
    </div>
  </div>
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
          <Typography className="card-heading">
            Product Base Properties
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', ml: 'auto' }}>
          <IconButton size="small" sx={{ color: '#b4b8d5' }}>
            <img src={refresh} alt="refresh" />
          </IconButton>
          {!isMobile && (<IconButton size="small" sx={{ color: '#b4b8d5' }}>
            <img src={exportsImg} alt="export" />
          </IconButton>)}
         {!isMobile && ( <IconButton size="small" sx={{ color: '#b4b8d5' }}>
            <img src={edit} alt="edit" />
          </IconButton>)}
          <IconButton size="small" sx={{ color: '#b4b8d5' }}>
            <img src={opened} alt="opened" />
          </IconButton>
        </Box>
      </Box>

      {/* Card Body */}
  <CardContent sx={{ p: 3, pt: 0 }}>
  {/* Mobile Image Section - Only visible on mobile */}
  <div className="mobile-image-section">
    <div className="product-image-container">
      <img
        src={PRODUCT_IMG}
        alt="Surface Mount"
        className="product-image"
      />
      <div className="product-title">Surface Mount</div>
    </div>
  </div>

  {/* Main Content Grid */}
  <div className="properties-grid">
    {/* Column 1: Image (Desktop) */}
    <div className="property-column image-column">
      {/* Desktop Image - Only visible on desktop */}
      <div className="desktop-image-container">
        <img
          src={PRODUCT_IMG}
          alt="Surface Mount"
          className="product-image"
        />
        <div className="product-title">Surface Mount</div>
      </div>
    </div>

    {/* Column 2: First Property Group */}
    <div className="property-column">
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
              fontWeight: 600,
              fontSize: { xs: '8px', sm: '12px' },
              height: { xs: '18px', sm: '24px' },
              '.MuiChip-label': {
                px: { xs: '4px', sm: '8px' }
              }
            }}
          />
        }
      />
      <PropertyLine label="Part Number*" value="022134" />
      <PropertyLine label="Line*" value="Carbide" />
      
      <div className="qr-code-section">
        <div className="property-label">QR CODE</div>
        <div className="qr-code-container">
          <img src={QR_CODE_IMG} alt="QR Code" className="qr-code-image" />
        </div>
      </div>
    </div>

    {/* Column 3: Second Property Group */}
    <div className="property-column">
      <PropertyLine label="SKU(ID)" value="2876512" />
      <PropertyLine label="Category*" value="Lighting" />
      <PropertyLine label="Series" value="Surface Mount" />
    </div>

    {/* Column 4: Third Property Group */}
    <div className="property-column">
      <PropertyLine label="Product Type*" value="Spare Part" />
      <PropertyLine label="Family*" value="Illumination" />
      <PropertyLine label="Warranty" value="05 Years 10WAR-02" />
    </div>
  </div>

  {/* Description Section */}
  <div className="description-section">
    <div className="description-item">
      <div className="description-label">Description</div>
      <div className="description-text">
        Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid volutpa.
      </div>
    </div>

    <div className="description-item">
      <div className="description-label">Long Description</div>
      <div className="description-text">
        Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
      </div>
    </div>

    <div className="description-item">
      <div className="description-label">Marketing Description</div>
      <div className="description-text">
        Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
      </div>
    </div>
  </div>
</CardContent>

    </Card>
  );
}
