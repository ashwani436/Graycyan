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
const DesktopTableRow = ({ vehicle }) => {
  return (
    <TableRow 
      sx={{ 
        '&:nth-of-type(odd)': { 
          backgroundColor: 'rgba(255, 255, 255, 0.05)' 
        },
        '&:hover': {
          backgroundColor: 'rgba(187, 134, 252, 0.1)'
        }
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
        <Chip 
          label={vehicle.trim}
          size="small"
          sx={{ 
            backgroundColor: '#bb86fc',
            color: 'white',
            fontWeight: 'bold'
          }}
        />
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
          <DirectionsCar sx={{ color: 'white', fontSize: 18 }} />
        </Box>
        <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
          Product Vehicles
        </Typography>
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
            backgroundColor: '#2d2d2d',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1a1a1a' }}>
                <TableCell sx={{ 
                  color: '#bb86fc', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #bb86fc'
                }}>
                  Identifier
                </TableCell>
                <TableCell sx={{ 
                  color: '#bb86fc', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #bb86fc'
                }}>
                  Make
                </TableCell>
                <TableCell sx={{ 
                  color: '#bb86fc', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #bb86fc'
                }}>
                  Model
                </TableCell>
                <TableCell sx={{ 
                  color: '#bb86fc', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #bb86fc'
                }}>
                  Year
                </TableCell>
                <TableCell sx={{ 
                  color: '#bb86fc', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #bb86fc'
                }}>
                  Trim
                </TableCell>
                <TableCell sx={{ 
                  color: '#bb86fc', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #bb86fc'
                }}>
                  Trim Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleData.map((vehicle, index) => (
                <DesktopTableRow key={`${vehicle.id}-${index}`} vehicle={vehicle} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ProductVehiclesTable;
