"use client";
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const links = {
  Company: [
    { label: 'Home',       href: '/' },
    { label: 'About',      href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Services',   href: '/services' },
    { label: 'Contact',    href: '/contact' },
  ],
  Services: [
    { label: 'Real Estate Marketing', href: '/services' },
    { label: 'Property Investment',   href: '/services' },
    { label: 'Development',           href: '/services' },
    { label: 'Appraisal',             href: '/services' },
    { label: 'Asset Management',      href: '/services' },
  ],
  Group: [
    { label: 'Gue Group Limited',       href: 'https://www.guegroup.com',     external: true },
    { label: 'Gue Cyber (Nigeria)',      href: 'https://www.guecyber.ng',      external: true },
    { label: 'GUE Engineering Limited', href: 'https://www.gueengineering.com',external: true },
    { label: 'Gue Cyber (Belgium)',      href: 'https://www.guecyber.com',     external: true },
  ],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(160deg, #0F1A3A 0%, #1A2B5E 100%)',
        color: 'white',
        pt: 8, pb: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #CC2020 0%, #1A7A3C 55%, transparent 100%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="GUE Realty Limited"
                sx={{ width: 52, height: 52, objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(34,160,80,0.30))' }}
              />
              <Box>
                <Typography sx={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.1 }}>
                  GUE <Box component="em" sx={{ fontStyle: 'normal', color: '#22A050' }}>Realty</Box>
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', opacity: 0.72, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.04em' }}>
                  Real Estate · Development · Investment
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.78, lineHeight: 1.7, mb: 1.5, maxWidth: 280 }}>
              GUE Realty Limited provides real estate marketing, investment, development, appraisal, and management
              services across Nigeria.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.60, fontSize: '0.72rem', fontFamily: "'JetBrains Mono',monospace", lineHeight: 1.6 }}>
              RC 8371222 · Tax ID: 2521508949024<br/>
              Registered 26 Mar 2025 · Nigeria<br/>
              Subsidiary of Gue Group Limited (RC 7501599)
            </Typography>
          </Grid>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <Grid key={heading} size={{ xs: 6, md: 2.6 }}>
              <Typography
                sx={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.68rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.55, mb: 2 }}
              >
                {heading}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    sx={{
                      color: 'rgba(255,255,255,0.80)', textDecoration: 'none',
                      fontSize: '0.85rem', transition: 'color 0.2s',
                      '&:hover': { color: '#22A050' },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom bar */}
        <Box sx={{
          borderTop: '1px solid rgba(255,255,255,0.10)',
          mt: 6, pt: 3,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1,
        }}>
          <Typography variant="body2" sx={{ opacity: 0.60, fontSize: '0.72rem' }}>
            © 2026 GUE Realty Limited · All rights reserved
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.60, fontSize: '0.72rem' }}>
            <Link href="https://www.guegroup.com" target="_blank" rel="noreferrer"
              sx={{ color: 'inherit', textDecoration: 'underline', '&:hover': { color: '#22A050' } }}>
              guegroup.com
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
