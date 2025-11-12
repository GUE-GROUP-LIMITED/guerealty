// components/PropertyMap.jsx
'use client';

import dynamic from 'next/dynamic';
import L from 'leaflet';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';

// Dynamically import react-leaflet components to ensure they're only rendered client-side
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// Do not expose demo/sample properties publicly. Default to an empty list so the UI
// shows neutral copy until the company is ready to publish real listings.
export default function PropertyMap({ properties = [] }) {
  // Create a small div icon to avoid loading Leaflet's default image assets (marker-icon.png)
  // which aren't present in this project and cause 404s. Using a divIcon prevents image fetches.
  const defaultDivIcon = L.divIcon({
    className: 'custom-marker',
    html: '<span class="marker-dot" aria-hidden="true"></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 24]
  });
  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80") center/cover',
          opacity: 0.03,
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h2" 
            fontWeight="bold" 
            sx={{ 
              mb: 2,
              background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            🗺️ Explore Our Properties (Coming Soon)
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            GUE REALTY LIMITED is newly registered and is currently exploring partnerships and investment opportunities. Interactive property listings and map markers will be published as opportunities are formalized.
          </Typography>
        </Box>

        <Paper 
          elevation={16}
          sx={{ 
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.3)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #0064d7 0%, #004ba8 50%, #0064d7 100%)',
              zIndex: 1,
            }
          }}
        >
          {/* Map Container */}
          <Box sx={{ height: { xs: 400, sm: 500, md: 600 }, position: 'relative' }}>
            <MapContainer 
              center={[9.0765, 7.4165]} 
              zoom={12} 
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {properties.length > 0 && properties.map(property => (
                <Marker 
                  key={property._id} 
                  position={[property.location.coordinates.lat, property.location.coordinates.lng]}
                  icon={defaultDivIcon}
                >
                  <Popup>
                    <Box sx={{ p: 1, minWidth: 200 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.main">
                        {property.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Type:</strong> {property.type}
                      </Typography>
                      <Typography variant="h6" color="success.main" fontWeight="bold" gutterBottom>
                        ₦{property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </Typography>
                      <Button 
                        variant="contained" 
                        size="small" 
                        fullWidth
                        startIcon={<HomeIcon />}
                        disabled
                        sx={{ mt: 1 }}
                      >
                        Coming Soon
                      </Button>
                    </Box>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Box>

          {/* Map Controls/Info */}
          <Box sx={{ p: 4, backgroundColor: 'rgba(0,100,215,0.02)' }}>
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={3} 
              alignItems={{ xs: 'stretch', md: 'center' }}
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.main">
                  📍 Premium Locations Across Abuja
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {properties.length} verified properties in prime locations including Maitama, Gwarimpa, Wuse, and Central Area.
                </Typography>
              </Box>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<ExploreIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #004ba8 0%, #0064d7 100%)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  View All Properties
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LocationOnIcon />}
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    borderWidth: 2,
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  Schedule Site Visit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>

        {/* Additional Info */}
        <Box textAlign="center" mt={6}>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            💡 <strong>Interactive Map:</strong> Click on any marker to view property details when listings are published. Location details will be verified before public listing. Contact our team to register interest.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}