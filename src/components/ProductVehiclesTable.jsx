import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
  IconButton,
  Collapse,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  DirectionsCar
} from '@mui/icons-material';
import carBase from '../assets/carimage.png'
import productTracking from '../assets/trackingDetails.png'
import addIcon from '../assets/addIcon.png'
import opened from '../assets/opened.png'


const vehicleData = [
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
];

// Mobile Card Component
const MobileVehicleCard = ({ vehicle }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card 
      sx={{ 
        mb: 2, 
        backgroundColor: '#2d2d2d',
        color: 'white',
        border: '1px solid #444'
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box flex={1}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <DirectionsCar sx={{ color: '#bb86fc', fontSize: 20 }} />
              <Typography variant="h6" sx={{ color: '#bb86fc' }}>
                {vehicle.make} {vehicle.model}
              </Typography>
            </Box>
            
            <Grid container spacing={1} sx={{ mb: 1 }}>
              <Grid item xs={6}>
                <Typography variant="body2" color="grey.400">
                  ID: <span style={{ color: 'white' }}>{vehicle.id}</span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="grey.400">
                  Year: <span style={{ color: 'white' }}>{vehicle.year}</span>
                </Typography>
              </Grid>
            </Grid>

            <Box mb={1}>
              <Chip 
                label={vehicle.trim}
                size="small"
                sx={{ 
                  backgroundColor: '#bb86fc',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            </Box>
          </Box>

          <IconButton 
            onClick={() => setExpanded(!expanded)}
            sx={{ color: '#bb86fc' }}
          >
            {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </Box>

        <Collapse in={expanded}>
          <Box sx={{ pt: 1, borderTop: '1px solid #444' }}>
            <Typography variant="body2" color="grey.300">
              <strong>Description:</strong> {vehicle.description}
            </Typography>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

// Desktop Table Row Component
const DesktopTableRow = ({ vehicle, index }) => {
  return (
    <TableRow 
      sx={{ 
        backgroundColor: index % 2 !== 0 ? '#50526A' : '#252832', // Even rows: #50526A, Odd rows: #252832
      }}
    >
      <TableCell sx={{ color: 'white', borderBottom: '1px solid #444' }}>
        {vehicle.id}
      </TableCell>
      <TableCell sx={{ color: 'white', borderBottom: '1px solid #444' }}>
        {vehicle.make}
      </TableCell>
      <TableCell sx={{ color: 'white', borderBottom: '1px solid #444' }}>
        {vehicle.model}
      </TableCell>
      <TableCell sx={{ color: 'white', borderBottom: '1px solid #444' }}>
        {vehicle.year}
      </TableCell>
      <TableCell sx={{ color: 'white', borderBottom: '1px solid #444' }}>
        {vehicle.trim}
      </TableCell>
      <TableCell sx={{ color: 'white', borderBottom: '1px solid #444', maxWidth: 300 }}>
        <Typography variant="body2" sx={{ 
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {vehicle.description}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

const ProductVehiclesTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      p: 2, 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh',
      color: 'white'
    }}>
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1} mb={3}>
       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
               <IconButton size="small" sx={{ color: '#C346DD', background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)'}}>
                   <img src={productTracking} alt="productTracking" />
                  </IconButton>
                <Typography className='card-heading'>
                 Product Vehicles
                </Typography>
              </Box>
              
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
          {vehicleData.map((vehicle, index) => (
            <MobileVehicleCard key={`${vehicle.id}-${index}`} vehicle={vehicle} />
          ))}
        </Box>
      ) : (
        /* Desktop View */
        <TableContainer 
          component={Paper} 
          sx={{ 
            backgroundColor: '#2F323C',
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#4C4381' }}> {/* Changed header background color */}
                <TableCell sx={{ 
                  color: '#FFF', // Changed text color to white for better contrast
                  fontWeight: 'bold',
                  borderBottom: '2px solid #4F4686'
                }}>
                  Identifier
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', // Changed text color to white for better contrast
                  fontWeight: 'bold',
                  borderBottom: '2px solid #4F4686'
                }}>
                  Make
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', // Changed text color to white for better contrast
                  fontWeight: 'bold',
                  borderBottom: '2px solid #4F4686'
                }}>
                  Model
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', // Changed text color to white for better contrast
                  fontWeight: 'bold',
                  borderBottom: '2px solid #4F4686'
                }}>
                  Year
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', // Changed text color to white for better contrast
                  fontWeight: 'bold',
                  borderBottom: '2px solid #4F4686'
                }}>
                  Trim
                </TableCell>
                <TableCell sx={{ 
                  color: '#FFF', // Changed text color to white for better contrast
                  fontWeight: 'bold',
                  borderBottom: '2px solid #4F4686'
                }}>
                  Trim Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleData.map((vehicle, index) => (
                <DesktopTableRow key={`${vehicle.id}-${index}`} vehicle={vehicle} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ProductVehiclesTable;
