"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

const highlights = [
  { icon: '🏢', label: 'Real Estate Marketing' },
  { icon: '📈', label: 'Property Investment' },
  { icon: '🏗️', label: 'Development' },
  { icon: '📋', label: 'Appraisal' },
  { icon: '🔑', label: 'Asset Management' },
];

export default function Hero() {
  return (
    <Box
      position="relative"
      minHeight="720px"
      display="flex"
      alignItems="center"
      sx={{
        background: `
          linear-gradient(150deg, rgba(15,26,58,0.88) 0%, rgba(26,122,60,0.72) 100%),
          url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80") center/cover no-repeat
        `,
        color: 'common.white',
        overflow: 'hidden',
      }}
    >
      {/* Brand gradient line at top */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4, zIndex: 3,
        background: 'linear-gradient(90deg, #CC2020 0%, #1A7A3C 50%, #1A2B5E 100%)',
      }} />

      {/* Dark vignette overlay */}
      <Box position="absolute" inset={0} sx={{
        background: 'linear-gradient(150deg, rgba(15,26,58,0.55) 0%, rgba(26,43,94,0.35) 100%)',
        zIndex: 1,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box px={2} py={6}>

          {/* Eyebrow */}
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.20)',
            px: 2, py: 0.75, borderRadius: '20px', mb: 3,
          }}>
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#22A050', animation: 'pulse 2s infinite',
              '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
            <Typography sx={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>
              GUE REALTY LIMITED · RC 8371222 · A GUE GROUP COMPANY
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h1"
            fontWeight={800}
            sx={{
              mb: 3,
              fontSize: { xs: '2.2rem', md: '3.2rem', lg: '3.8rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              maxWidth: 760,
            }}
          >
            Real Estate Solutions<br/>
            <Box component="em" sx={{ fontStyle: 'normal', color: '#4DC87C' }}>Built for Nigeria.</Box>
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: 640,
              fontWeight: 400,
              lineHeight: 1.7,
              opacity: 0.92,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            GUE Realty Limited connects buyers, sellers, and investors through innovative real estate marketing,
            investment, development, appraisal, and asset management — enhancing property value and driving
            sustainable growth across Nigeria.
          </Typography>

          {/* Service pills */}
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 5, gap: 1 }}>
            {highlights.map((h) => (
              <Chip
                key={h.label}
                label={`${h.icon} ${h.label}`}
                sx={{
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { background: 'rgba(255,255,255,0.18)' },
                }}
              />
            ))}
          </Stack>

          {/* CTAs */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
            <Button
              component={Link}
              href="/properties"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 5, py: 1.75,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: 3,
                boxShadow: '0 8px 28px rgba(26,122,60,0.40)',
              }}
            >
              View Properties
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                px: 5, py: 1.75,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: 3,
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 2,
                color: 'white',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'white', borderWidth: 2,
                  backgroundColor: 'rgba(255,255,255,0.12)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Stack>

          {/* Company status box */}
          <Box sx={{
            maxWidth: 680,
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 3,
            p: 3,
            borderLeft: '4px solid #1A7A3C',
          }}>
            <Typography variant="body1" color="white" fontWeight={700} sx={{ mb: 0.5 }}>
              GUE Realty Limited — Operational & Active
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.88, lineHeight: 1.65 }}>
              RC 8371222 · Registered 26 March 2025 · Subsidiary of Gue Group Limited (RC 7501599).
              Currently managing school assets and land acquired for residential and commercial development.
              Visit <Box component="a" href="https://www.guegroup.com" target="_blank" rel="noreferrer"
                sx={{ color: '#4DC87C', textDecoration: 'underline' }}>guegroup.com</Box> for group information.
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
