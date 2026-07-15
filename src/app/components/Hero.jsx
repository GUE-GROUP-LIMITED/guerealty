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
        backgroundImage: {
          xs: 'linear-gradient(98deg, rgba(8,15,36,0.90) 0%, rgba(8,15,36,0.76) 42%, rgba(26,122,60,0.56) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80")',
          md: 'linear-gradient(98deg, rgba(8,15,36,0.84) 0%, rgba(8,15,36,0.68) 42%, rgba(26,122,60,0.50) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80")',
        },
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
        background: {
          xs: 'linear-gradient(180deg, rgba(10,16,35,0.24) 0%, rgba(10,16,35,0.30) 100%)',
          md: 'linear-gradient(180deg, rgba(10,16,35,0.18) 0%, rgba(10,16,35,0.24) 100%)',
        },
        zIndex: 1,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          px={2}
          py={{ xs: 5, md: 6 }}
          sx={{
            maxWidth: 860,
            mt: { xs: 0.5, md: 0 },
          }}
        >

          {/* Eyebrow */}
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            background: 'rgba(9,16,36,0.34)',
            border: '1px solid rgba(255,255,255,0.30)',
            px: 2, py: 0.75, borderRadius: '20px', mb: 2.5,
          }}>
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#22A050', animation: 'pulse 2s infinite',
              '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
            <Typography sx={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', color: 'rgba(255,255,255,0.96)', textShadow: '0 1px 1px rgba(0,0,0,0.30)' }}>
              GUE REALTY LIMITED · RC 8371222 · A GUE GROUP COMPANY
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h1"
            fontWeight={{ xs: 750, md: 800 }}
            sx={{
              mb: 2.25,
              fontSize: { xs: '2.1rem', sm: '2.7rem', md: '3.35rem', lg: '3.95rem' },
              lineHeight: { xs: 1.08, md: 1.03 },
              letterSpacing: { xs: '-0.01em', md: '-0.02em' },
              textShadow: { xs: '0 1px 1px rgba(0,0,0,0.20)', md: '0 1px 2px rgba(0,0,0,0.24)' },
              maxWidth: 780,
              textWrap: 'balance',
            }}
          >
            Real Estate Solutions<br/>
            <Box
              component="em"
              sx={{
                fontStyle: 'normal',
                color: '#4DC87C',
                display: 'inline-block',
                mt: { xs: 0.25, md: 0.35 },
                textShadow: '0 1px 1px rgba(0,0,0,0.18)',
              }}
            >
              Built for Nigeria.
            </Box>
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: 640,
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.96)',
              textShadow: '0 1px 1px rgba(0,0,0,0.22)',
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
                  background: 'rgba(9,16,36,0.34)',
                  border: '1px solid rgba(255,255,255,0.30)',
                  color: 'white',
                  fontWeight: 650,
                  fontSize: '0.78rem',
                  textShadow: '0 1px 1px rgba(0,0,0,0.25)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': { background: 'rgba(9,16,36,0.48)' },
                }}
              />
            ))}
          </Stack>

          {/* CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mb: 6 }}
          >
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
                border: '1px solid rgba(255,255,255,0.20)',
                '&:hover': {
                  boxShadow: '0 10px 30px rgba(26,122,60,0.45)',
                },
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
                borderColor: 'rgba(255,255,255,0.86)',
                borderWidth: 2,
                color: 'white',
                backgroundColor: 'rgba(9,16,36,0.30)',
                backdropFilter: 'blur(8px)',
                '&:hover': {
                  borderColor: 'white', borderWidth: 2,
                  backgroundColor: 'rgba(9,16,36,0.44)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Stack>

          {/* Company status box */}
          <Box sx={{
            maxWidth: 680,
            background: 'rgba(9,16,36,0.40)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.22)',
            borderRadius: 3,
            p: 3,
            borderLeft: '4px solid #1A7A3C',
          }}>
            <Typography variant="body1" color="white" fontWeight={700} sx={{ mb: 0.5, textShadow: '0 1px 1px rgba(0,0,0,0.26)' }}>
              GUE Realty Limited — Operational & Active
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.65, textShadow: '0 1px 1px rgba(0,0,0,0.20)' }}>
              RC 8371222 · Registered 26 March 2025 · Subsidiary of Gue Group Limited (RC 7501599).
              Currently managing school assets and land acquired for residential and commercial development.
              Visit <Box component="a" href="https://www.guegroup.com" target="_blank" rel="noreferrer"
                sx={{ color: '#6AE3A1', textDecoration: 'underline', textDecorationColor: 'rgba(106,227,161,0.75)' }}>guegroup.com</Box> for group information.
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}