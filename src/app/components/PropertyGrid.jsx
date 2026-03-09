// components/PropertyGrid.jsx
'use client';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Link from 'next/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

export default function PropertyGrid({ properties = [], limit = null }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issue by setting proper limit after client mount
  useEffect(() => {
    setIsClient(true);
    if (limit !== null) {
      setVisibleCount(limit);
    }
  }, [limit]);

  // Do NOT expose or render dummy/sample property data on the public site.
  // If real `properties` are passed in, render them. Otherwise render neutral placeholders
  // that avoid exposing unverified sample inventory.
  const displayProperties = properties.length > 0 ? properties : [];

  // Filter properties based on active filter
  const filteredProperties = activeFilter === 'all'
    ? displayProperties
    : displayProperties.filter(property => property.type === activeFilter);

  // Slice to show limited properties initially
  const displayedProperties = filteredProperties.slice(0, visibleCount);

  // Property types for filters
  const propertyTypes = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'land', label: 'Land' },
    { id: 'ongoing', label: 'Ongoing Projects' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'success';
      case 'sold': return 'error';
      case 'ongoing': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Box>
      {/* Section Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" color="text.primary" mb={2}>
          Properties
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
          GUE REALTY LIMITED manages active real estate assets, including schools, and has acquired land for
          development. Listings are published as each opportunity is verified for release.
        </Typography>
      </Box>

      {/* Filters hidden until listings are available */}

      {/* Property Grid */}
      <Grid container spacing={4}>
            {displayedProperties.length > 0 ? (
              displayedProperties.map((property) => (
                <Grid item xs={12} sm={6} lg={4} key={property.id}>
                  <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="220"
                      // keep image but guard against missing images
                      image={property.images && property.images[0] ? property.images[0] : undefined}
                      alt={property.title || 'Property image'}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Status and Type */}
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Chip
                    label={property.status.toUpperCase()}
                    color={getStatusColor(property.status)}
                    size="small"
                  />
                  <Chip
                    icon={<HomeIcon />}
                    label={property.type}
                    variant="outlined"
                    size="small"
                  />
                </Box>

                {/* Title and Price */}
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {property.title}
                </Typography>
                <Typography 
                  variant="h5" 
                  color="primary.main" 
                  fontWeight="bold"
                  mb={1}
                >
                  ₦{property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Typography>

                {/* Location */}
                <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="action" sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {property.location}
                  </Typography>
                </Box>

                {/* Features */}
                <Box mb={3}>
                  <Box display="flex" flexWrap="wrap" gap={0.5}>
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <Chip 
                        key={idx} 
                        label={feature} 
                        size="small" 
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </Box>

                {/* Action Button */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  disabled
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
          ))
        ) : (
          // Render neutral placeholders when there are no real properties
          [1, 2, 3].map((p) => (
            <Grid item xs={12} sm={6} lg={4} key={`placeholder-${p}`}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: 0.95,
                }}
              >
                <Box sx={{ height: 220, background: 'linear-gradient(135deg,#f5f7fa,#e8eefc)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="h6" color="text.secondary">Image placeholder</Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Chip label="AVAILABLE ON REQUEST" size="small" color="warning" />
                  <Typography variant="h6" fontWeight="bold" mb={1} mt={2}>
                    Portfolio details available on request
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    We currently manage real estate assets and development land. Contact us for verified
                    opportunities that match your requirements.
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth size="large" disabled sx={{ py: 1.5, fontWeight: 600, textTransform: 'none', borderRadius: 2 }}>
                    Contact for Access
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* Load More Button */}
      {!limit && visibleCount < filteredProperties.length && (
        <Box textAlign="center" mt={6}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setVisibleCount(prev => prev + 6)}
            sx={{
              px: 4,
              py: 1.5,
              borderWidth: 2,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderWidth: 2,
              }
            }}
          >
            Load More Properties
          </Button>
        </Box>
      )}
    </Box>
  );
}