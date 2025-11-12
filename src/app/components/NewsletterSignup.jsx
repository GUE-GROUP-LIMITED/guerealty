'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert,
  Card,
  CardContent
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PublicIcon from '@mui/icons-material/Public';
import InsightsIcon from '@mui/icons-material/Insights';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    interests: [],
    frequency: 'weekly'
  });
  const [submitted, setSubmitted] = useState(false);

  const locations = [
    'Nigeria', 'United States', 'United Kingdom', 'Canada', 'Germany',
    'France', 'Netherlands', 'Australia', 'South Africa', 'UAE', 'Other'
  ];

  const interestOptions = [
    { id: 'residential', label: 'Residential Properties', icon: '🏠' },
    { id: 'commercial', label: 'Commercial Real Estate', icon: '🏢' },
    { id: 'land', label: 'Land Investment', icon: '🌍' },
    { id: 'diaspora', label: 'Diaspora Investment Tips', icon: '✈️' },
    { id: 'market-analysis', label: 'Market Analysis', icon: '📊' },
    { id: 'legal-updates', label: 'Legal & Regulatory Updates', icon: '⚖️' },
    { id: 'construction', label: 'Construction Progress', icon: '🏗️' },
    { id: 'investment-plans', label: 'Investment Opportunities', icon: '💰' }
  ];

  const handleInterestChange = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Newsletter subscription:', formData);
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <TrendingUpIcon />,
      title: "Market Insights",
      description: "Get exclusive market analysis and investment trends delivered to your inbox"
    },
    {
      icon: <NotificationsActiveIcon />,
      title: "First Access",
      description: "Be the first to know about new property listings and investment opportunities"
    },
    {
      icon: <PublicIcon />,
      title: "Diaspora Focus",
      description: "Specialized content for overseas investors with actionable investment strategies"
    },
    {
      icon: <InsightsIcon />,
      title: "Expert Advice",
      description: "Tips and advice from our team of real estate professionals and legal experts"
    }
  ];

  if (submitted) {
    return (
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={8}
            sx={{
              p: 8,
              textAlign: 'center',
              borderRadius: 4,
              background: 'rgba(255,255,255,0.95)'
            }}
          >
            <Box sx={{ fontSize: '4rem', mb: 3 }}>🎉</Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="success.main">
              Welcome to GUE REALTY Insights!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Thank you for subscribing! You'll receive your first newsletter within 24 hours with the latest market insights and investment opportunities.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => setSubmitted(false)}
              sx={{ px: 4, py: 1.5 }}
            >
              Subscribe Another Email
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
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
            📧 Stay Informed with GUE REALTY Insights
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
            Get exclusive market insights, new property alerts, and expert investment advice delivered to your inbox
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Benefits Section */}
          <Grid item xs={12} lg={5}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
              What You'll Receive
            </Typography>

            <Stack spacing={3} mb={4}>
              {benefits.map((benefit, index) => (
                <Card key={index} elevation={2} sx={{ borderRadius: 3 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" alignItems="flex-start" spacing={3}>
                      <Box
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                          p: 2,
                          borderRadius: 2,
                          minWidth: 56,
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {benefit.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>

            <Alert severity="info" sx={{ borderRadius: 2 }}>
              <Typography variant="body2">
                📊 <strong>Join 10,000+ investors</strong> who already receive our weekly insights.
                Unsubscribe anytime with one click.
              </Typography>
            </Alert>
          </Grid>

          {/* Subscription Form */}
          <Grid item xs={12} lg={7}>
            <Paper elevation={8} sx={{ p: 6, borderRadius: 4 }}>
              <Box textAlign="center" mb={4}>
                <EmailIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Subscribe Now
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Customize your subscription to get content that matters to you
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {/* Name Fields */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </Grid>

                  {/* Location */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Your Location</InputLabel>
                      <Select
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        required
                      >
                        {locations.map((location) => (
                          <MenuItem key={location} value={location}>{location}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Newsletter Frequency */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Newsletter Frequency</InputLabel>
                      <Select
                        value={formData.frequency}
                        onChange={(e) => setFormData(prev => ({ ...prev, frequency: e.target.value }))}
                      >
                        <MenuItem value="weekly">Weekly Digest</MenuItem>
                        <MenuItem value="biweekly">Bi-weekly Updates</MenuItem>
                        <MenuItem value="monthly">Monthly Newsletter</MenuItem>
                        <MenuItem value="alerts">Property Alerts Only</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Interest Selection */}
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="medium" gutterBottom>
                      What interests you most? (Select all that apply)
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {interestOptions.map((option) => (
                        <Chip
                          key={option.id}
                          icon={<span>{option.icon}</span>}
                          label={option.label}
                          onClick={() => handleInterestChange(option.id)}
                          variant={formData.interests.includes(option.id) ? 'filled' : 'outlined'}
                          color={formData.interests.includes(option.id) ? 'primary' : 'default'}
                          sx={{
                            cursor: 'pointer',
                            '& .MuiChip-icon': { fontSize: '1rem' }
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<NotificationsActiveIcon />}
                      sx={{
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        mt: 2
                      }}
                    >
                      Subscribe to GUE REALTY Insights
                    </Button>
                  </Grid>

                  {/* Privacy Note */}
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                      🔒 Your privacy is important to us. We'll never share your email with third parties.
                      View our <strong>Privacy Policy</strong> for more details.
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Social Proof removed — metrics are withheld until verified */}
        <Box sx={{ mt: 8 }}>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              Audience and performance metrics are withheld pending verification. We will publish verified
              figures here once they have been independently confirmed.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
