"use client";
// components/Hero.jsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box
      position="relative"
      minHeight="700px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,100,215,0.8) 100%),
          url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80") center/cover
        `,
        color: 'common.white',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for better text readability */}
      <Box
        position="absolute"
        inset={0}
        sx={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,100,215,0.3) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" px={2}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 600,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              letterSpacing: '1px'
            }}
          >
            GUE REALTY LIMITED
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontStyle: 'italic',
              textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
            }}
          >
            Infrastructure • Project Finance • Real Estate • ESG Compliant
          </Typography>

          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              mb: 4,
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            GUE REALTY LIMITED
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.95,
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Notice: GUE REALTY LIMITED is a newly registered subsidiary of the GUE Group and is currently exploring partnerships and investment opportunities.
            This website is informational only. Services, properties and investment offerings will be published when
            the company starts operations. For information about the parent group, visit www.gueplc.com.
          </Typography>

          {/* Services Highlight */}
          <Box
            sx={{
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: 'primary.main',
              padding: '20px 32px',
              borderRadius: '16px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                textAlign: 'center',
                mb: 1,
                fontSize: '1.3rem'
              }}
            >
              🏢 Complete Real Estate Solutions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                lineHeight: 1.4,
                fontSize: '1.1rem'
              }}
            >
              From Development to Investment • Marketing to Management • Professional Appraisal Services
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 8 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white !important',
                color: '#0064d7 !important',
                px: 5,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: '50px',
                minWidth: '200px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                textDecoration: 'none',
                border: 'none !important',
                background: 'white !important',
                backgroundImage: 'none !important',
                backgroundSize: 'auto !important',
                backgroundRepeat: 'no-repeat !important',
                backgroundPosition: '0% 0% !important',
                backgroundAttachment: 'scroll !important',
                backgroundOrigin: 'padding-box !important',
                backgroundClip: 'border-box !important',
                textShadow: 'none !important',
                // Override Material-UI's variant styles completely
                '--variant-containedBg': 'white !important',
                '--variant-containedColor': '#0064d7 !important',
                '&.MuiButton-contained': {
                  backgroundColor: 'white !important',
                  color: '#0064d7 !important',
                  backgroundImage: 'none !important',
                },
                '&:hover': {
                  backgroundColor: '#f8f9fa !important',
                  color: '#0052cc !important',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  backgroundImage: 'none !important',
                },
                '&:focus': {
                  backgroundColor: 'white !important',
                  color: '#0064d7 !important',
                  backgroundImage: 'none !important',
                }
              }}
            >
                Coming Soon
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white !important',
                borderWidth: '2px !important',
                color: 'white !important',
                px: 5,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: '50px',
                minWidth: '200px',
                backgroundColor: 'transparent !important',
                backdropFilter: 'blur(10px)',
                background: 'transparent !important',
                backgroundImage: 'none !important',
                backgroundSize: 'auto !important',
                backgroundRepeat: 'no-repeat !important',
                backgroundPosition: '0% 0% !important',
                backgroundAttachment: 'scroll !important',
                backgroundOrigin: 'padding-box !important',
                backgroundClip: 'border-box !important',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6) !important',
                // Override Material-UI's variant styles
                '--variant-outlinedColor': 'white !important',
                '--variant-outlinedBorder': 'white !important',
                '&.MuiButton-outlined': {
                  color: 'white !important',
                  borderColor: 'white !important',
                  backgroundColor: 'transparent !important',
                  backgroundImage: 'none !important',
                },
                '&:hover': {
                  borderColor: 'white !important',
                  borderWidth: '2px !important',
                  backgroundColor: 'rgba(255,255,255,0.15) !important',
                  color: 'white !important',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 32px rgba(255,255,255,0.2)',
                  backgroundImage: 'none !important',
                },
                '&:focus': {
                  backgroundColor: 'transparent !important',
                  color: 'white !important',
                  borderColor: 'white !important',
                  backgroundImage: 'none !important',
                }
              }}
            >
              Learn More
            </Button>
          </Stack>

          {/* Company status notice (replaces operational stats while company is not trading) */}
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '16px',
              p: 3,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            <Typography variant="h6" color="white" textAlign="center" fontWeight="bold">
              GUE REALTY LIMITED is newly registered and is currently exploring partnerships and investment opportunities.
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.9)" textAlign="center" sx={{ mt: 1 }}>
              This site is informational only. Services, property listings and company metrics will be
              published when the company commences operations. For parent company information visit www.gueplc.com.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}