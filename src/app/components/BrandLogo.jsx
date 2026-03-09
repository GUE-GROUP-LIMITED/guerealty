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
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
    >
      <Box
        sx={{
          width: isMobile ? 40 : 48,
          height: isMobile ? 40 : 48,
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="GUE REALTY LIMITED"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Box>
        <Typography
          variant={isMobile ? "h6" : "h6"}
          fontWeight="bold"
          sx={{
            color: 'white',
            lineHeight: 1,
            letterSpacing: '-0.5px',
            fontSize: isMobile ? '1.1rem' : '1.25rem'
          }}
        >
          GUE REALTY
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: isMobile ? '0.7rem' : '0.75rem',
            lineHeight: 1,
            fontWeight: isMobile ? 500 : 400
          }}
        >
          Real Estate Activities
        </Typography>
      </Box>
    </Box>
  );
}