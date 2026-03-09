'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Chip,
  Stack,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PropertySearch({ onSearch = () => {} }) {
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    priceRange: [10000000, 200000000],
    bedrooms: '',
    bathrooms: '',
    status: '',
    features: []
  });

  const [expanded, setExpanded] = useState(false);

  const locations = [
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Kano',
    'Ibadan',
    'Kaduna',
    'Benin City',
    'Warri',
    'Calabar',
    'Enugu'
  ];

  const propertyTypes = [
    'Residential',
    'Commercial',
    'Land',
    'Apartment',
    'Villa',
    'Duplex',
    'Bungalow',
    'Office Space',
    'Shop',
    'Warehouse'
  ];

  const propertyFeatures = [
    'Swimming Pool',
    'Gym',
    'Security',
    'Parking',
    'Garden',
    'Balcony',
    'Air Conditioning',
    'Generator',
    'Elevator',
    'CCTV',
    'Fence',
    'Bore Hole'
  ];

  const handleSearch = () => {
    onSearch(searchParams);
    console.log('Search params:', searchParams);
  };

  const handleFeatureToggle = (feature) => {
    setSearchParams(prev => ({
      ...prev,
      features: prev.features.includes(feature) 
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const clearFilters = () => {
    setSearchParams({
      location: '',
      propertyType: '',
      priceRange: [10000000, 200000000],
      bedrooms: '',
      bathrooms: '',
      status: '',
      features: []
    });
  };

  const formatPrice = (value) => {
    if (value >= 1000000) {
      return `₦${(value / 1000000).toFixed(0)}M`;
    }
    return `₦${value.toLocaleString()}`;
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        textAlign="center" 
        gutterBottom
        sx={{ mb: 2 }}
      >
        🔍 Property Search
      </Typography>
      <Typography 
        variant="h6" 
        textAlign="center" 
        color="text.secondary" 
        sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
      >
        Explore available managed assets and development opportunities by location, budget, and features.
      </Typography>

  <Paper elevation={6} sx={{ p: 4, borderRadius: 3, maxWidth: 'lg', mx: 'auto' }}>
        {/* Quick Search Bar */}
          <Box textAlign="center" sx={{ py: 6 }}>
            <Typography variant="body1" color="text.secondary">
              Search controls are being expanded as additional listings are onboarded.
            </Typography>
          </Box>

        {/* Advanced Filters */}
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <FilterListIcon />
              <Typography variant="h6" fontWeight="medium">
                Advanced Filters
              </Typography>
              {searchParams.features.length > 0 && (
                <Chip 
                  label={`${searchParams.features.length} filters`} 
                  size="small" 
                  color="primary" 
                />
              )}
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              {/* Price Range */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" fontWeight="medium" gutterBottom>
                  Price Range: {formatPrice(searchParams.priceRange[0])} - {formatPrice(searchParams.priceRange[1])}
                </Typography>
                <Slider
                  value={searchParams.priceRange}
                  onChange={(e, newValue) => setSearchParams(prev => ({ ...prev, priceRange: newValue }))}
                  valueLabelDisplay="auto"
                  valueLabelFormat={formatPrice}
                  min={5000000}
                  max={500000000}
                  step={5000000}
                />
              </Grid>

              {/* Bedrooms & Bathrooms */}
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Bedrooms</InputLabel>
                      <Select
                        value={searchParams.bedrooms}
                        onChange={(e) => setSearchParams(prev => ({ ...prev, bedrooms: e.target.value }))}
                      >
                        <MenuItem value="">Any</MenuItem>
                        <MenuItem value="1">1+</MenuItem>
                        <MenuItem value="2">2+</MenuItem>
                        <MenuItem value="3">3+</MenuItem>
                        <MenuItem value="4">4+</MenuItem>
                        <MenuItem value="5">5+</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Bathrooms</InputLabel>
                      <Select
                        value={searchParams.bathrooms}
                        onChange={(e) => setSearchParams(prev => ({ ...prev, bathrooms: e.target.value }))}
                      >
                        <MenuItem value="">Any</MenuItem>
                        <MenuItem value="1">1+</MenuItem>
                        <MenuItem value="2">2+</MenuItem>
                        <MenuItem value="3">3+</MenuItem>
                        <MenuItem value="4">4+</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* Property Status */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Property Status</InputLabel>
                  <Select
                    value={searchParams.status}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, status: e.target.value }))}
                  >
                    <MenuItem value="">All Status</MenuItem>
                    <MenuItem value="available">Available</MenuItem>
                    <MenuItem value="ongoing">Under Construction</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Property Features */}
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight="medium" gutterBottom>
                  Property Features
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {propertyFeatures.map((feature) => (
                    <Chip
                      key={feature}
                      label={feature}
                      onClick={() => handleFeatureToggle(feature)}
                      variant={searchParams.features.includes(feature) ? 'filled' : 'outlined'}
                      color={searchParams.features.includes(feature) ? 'primary' : 'default'}
                      sx={{ cursor: 'pointer' }}
                    />
                  ))}
                </Box>
              </Grid>

              {/* Action Buttons */}
              <Grid item xs={12}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleSearch}
                    startIcon={<SearchIcon />}
                    sx={{ flex: 1 }}
                  >
                    Apply Filters
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={clearFilters}
                    sx={{ flex: 1 }}
                  >
                    Clear All Filters
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Paper>

      {/* Search Results Summary */}
      <Card sx={{ mt: 4, maxWidth: 'lg', mx: 'auto' }}>
        <CardContent sx={{ textAlign: 'center', py: 3 }}>
          <Typography variant="h6" gutterBottom>
            🎯 Search Tips
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Use location filters to find properties in your preferred area, set price ranges that fit your budget, 
            and select features that matter most to you. Our advanced search helps you find exactly what you're looking for.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
