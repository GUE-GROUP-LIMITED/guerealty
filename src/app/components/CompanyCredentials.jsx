'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Stack,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CertificateIcon from '@mui/icons-material/CardMembership';
import AwardIcon from '@mui/icons-material/EmojiEvents';
import ShieldIcon from '@mui/icons-material/Shield';
import PublicIcon from '@mui/icons-material/Public';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function CompanyCredentials() {
  // Display official company registration details (factual) but avoid implying
  // operational status. Additional certifications/partnerships/awards will be
  // published when verified and available.
  const registrations = [
    {
      title: 'Corporate Registration',
      number: 'RC - 8371222',
      status: 'Registered',
      icon: <BusinessIcon sx={{ color: 'white' }} />,
      description: (
        <>
          <div><strong>Date of Registration:</strong> Mar 26, 2025</div>
          <div><strong>Nature of Business:</strong> Real Estate Activities</div>
          <div style={{ marginTop: 8 }}>GUE REALTY LIMITED is an active subsidiary of GUE GROUP LIMITED, currently managing real estate assets including schools
            and acquired land for development. Additional memberships, insurance and strategic partnerships are published as verification is completed.
          </div>
        </>
      ),
    },
  ];

  const certifications = [];

  const partnerships = [];

  const awards = [];

  const insurances = [];

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
            🏛️ Company Credentials & Trust
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
            GUE REALTY LIMITED is an active subsidiary of GUE GROUP LIMITED. Official registrations, memberships,
            insurance and partnerships are published as verification and approvals are completed.
          </Typography>
        </Box>

        {/* Official Registrations */}
        <Box mb={8}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Official Registrations
          </Typography>
          <Grid container spacing={4}>
            {registrations.map((reg, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={6}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" alignItems="flex-start" spacing={3}>
                      <Box
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                          p: 2,
                          borderRadius: 3,
                          minWidth: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {reg.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {reg.title}
                        </Typography>
                        <Typography variant="body1" color="primary.main" fontWeight="bold" gutterBottom>
                          {reg.number}
                        </Typography>
                        <Chip
                          label={reg.status}
                          color="success"
                          size="small"
                          icon={<VerifiedIcon />}
                          sx={{ mb: 2 }}
                        />
                        <Typography component="div" variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                          {reg.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Professional Certifications & Insurance */}
        <Grid container spacing={6} mb={8}>
          <Grid item xs={12} lg={6}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center" mb={3}>
                <CertificateIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Professional Certifications
                </Typography>
              </Box>
              <List>
                {certifications.map((cert, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={cert} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center" mb={3}>
                <ShieldIcon sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Insurance Coverage
                </Typography>
              </Box>
              <List>
                {insurances.map((insurance, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <SecurityIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={insurance} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Awards & Recognition */}
        <Box mb={8}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Awards & Recognition
          </Typography>
          <Grid container spacing={3}>
            {awards.map((award, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  elevation={4}
                  sx={{
                    textAlign: 'center',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <AwardIcon sx={{ fontSize: 40, color: 'warning.main', mb: 2 }} />
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {award.year}
                    </Typography>
                    <Typography variant="body1" fontWeight="medium" gutterBottom>
                      {award.title}
                    </Typography>
                    <Chip label={award.category} color="primary" size="small" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Strategic Partnerships */}
        <Paper elevation={8} sx={{ p: 6, borderRadius: 4, background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)', color: 'white' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Trusted Partnerships
          </Typography>
          <Grid container spacing={4}>
            {partnerships.map((partner, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Box textAlign="center">
                  <Avatar
                    src={partner.logo}
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: 'white',
                      border: '3px solid rgba(255,255,255,0.3)'
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {partner.name}
                  </Typography>
                  <Chip
                    label={partner.type}
                    variant="outlined"
                    sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Trust Guarantee */}
        <Box textAlign="center" mt={8}>
          <Paper
            elevation={6}
            sx={{
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(145deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%)',
              border: '2px solid',
              borderColor: 'success.main'
            }}
          >
            <VerifiedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
              Registered Company (Operational)
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              GUE REALTY LIMITED is registered (RC: 8371222) and operational. Certifications, partnerships and
              insurance disclosures are updated as they are verified for public publication.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
