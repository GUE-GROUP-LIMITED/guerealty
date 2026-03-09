import {
  Box,
  Container,
  Typography,
  Grid,
  Link
} from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: 'grey.900', color: 'common.white', py: 7 }}>
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
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  Real Estate Activities: Marketing, Investment, Development, Appraisal & Management
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.75 }}>
              RC Number: 8371222 · Date of Registration: Mar 26, 2025 · Nature of Business: Real Estate Activities.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Home
              </Link>
              <Link href="/about" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                About
              </Link>
              <Link href="/properties" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Properties
              </Link>
              <Link href="/services" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Services
              </Link>
              <Link href="/contact" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact & Group */}
          <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Contact
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85, mb: 1 }}>
                  Phone: +234 (0) 704 695 2003
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85, mb: 1 }}>
                  Mon–Fri: 8:00 AM – 6:00 PM
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85, mb: 2 }}>
                  Please use our contact form for all enquiries.
                </Typography>

                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, mt: 2.5 }}>
                  Parent Company
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Link href="https://www.guegroup.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'underline' }}>
                    GUE GROUP LIMITED
                  </Link>
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.75, mb: 1 }}>
                  GUE REALTY LIMITED is an active subsidiary of GUE GROUP LIMITED, currently managing schools and
                  acquired land for property development. Visit the parent company site for group-level updates.
                </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 5, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2026 GUE REALTY LIMITED. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}