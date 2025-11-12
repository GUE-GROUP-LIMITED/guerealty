'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Paper,
  IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function TeamProfiles() {
  // No public team profiles while company is not trading. Keep a short placeholder message.
  const teamMembers = [];

  const getRandomColor = (index) => {
    const colors = ['primary', 'secondary', 'success', 'info', 'warning'];
    return colors[index % colors.length];
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80") center/cover',
          opacity: 0.03,
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
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
            👥 Meet Our Expert Team
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
            Our experienced professionals are dedicated to making your real estate journey successful and stress-free
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" textAlign="center">
              Public team profiles will be published when GUE REALTY LIMITED commences trading. For now,
              corporate information is available via the parent company: www.gueplc.com.
            </Typography>
          </Grid>
        </Grid>

        {/* Company Stats */}
        <Paper
          elevation={6}
          sx={{
            mt: 8,
            p: 6,
            borderRadius: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Company metrics will be published once operations begin
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
