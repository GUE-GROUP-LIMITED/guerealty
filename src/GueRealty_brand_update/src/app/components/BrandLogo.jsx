"use client";
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BrandLogo({ variant = 'desktop' }) {
  const isMobile = variant === 'mobile';

  return (
    <Box
      component={Link}
      href="/"
      display="flex"
      alignItems="center"
      sx={{
        cursor: 'pointer',
        textDecoration: 'none',
        gap: isMobile ? 1.2 : 1.5,
        transition: 'transform 0.2s ease',
        '&:hover': { transform: 'scale(1.04)' },
      }}
    >
      {/* Logo image */}
      <Box
        sx={{
          width:  isMobile ? 42 : 52,
          height: isMobile ? 42 : 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          filter: 'drop-shadow(0 0 6px rgba(26,122,60,0.25))',
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="GUE Realty Limited logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Wordmark */}
      <Box>
        <Typography
          fontWeight={800}
          sx={{
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            fontFamily: "'Syne', sans-serif",
            fontSize: isMobile ? '1.05rem' : '1.2rem',
          }}
        >
          GUE <Box component="em" sx={{ color: '#22A050', fontStyle: 'normal' }}>Realty</Box>
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: isMobile ? '0.62rem' : '0.68rem',
            lineHeight: 1,
            fontWeight: 500,
            letterSpacing: '0.04em',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Real Estate · Development · Investment
        </Typography>
      </Box>
    </Box>
  );
}
