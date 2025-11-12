"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Link
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: 'grey.900', color: 'common.white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3
            }}>
              <Box sx={{
                width: 60,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}>
                <Box
                  component="img"
                  src="/logo.png"
                  alt="GUE REALTY LIMITED"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  GUE REALTY LIMITED
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Sustainable Infrastructure Finance & ESG-Compliant Development
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#home" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Home
              </Link>
              <Link href="#about" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                About
              </Link>
              <Link href="#properties" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Properties
              </Link>
              <Link href="#investment" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Investment Plans
              </Link>
              <Link href="#diaspora" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Diaspora Assurance
              </Link>
              <Link href="#contact" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Media & Contact */}
          <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Follow Parent Company
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Link href="https://www.gueplc.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'underline' }}>
                    GUE Group (parent company)
                  </Link>
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                  This site is for GUE REALTY LIMITED (newly registered, currently exploring partnerships and investment opportunities). For group-level
                  information, news and verified contacts, visit the parent company site linked above.
                </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
            © 2025 GUE REALTY LIMITED. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            RC Number: 8371222 | Licensed Real Estate Company | Insured & Bonded
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}