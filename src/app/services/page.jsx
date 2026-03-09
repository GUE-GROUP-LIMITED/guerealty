import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function ServicesPage() {
  return (
    <main>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,100,215,0.35) 100%), url("https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80") center/cover',
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2} sx={{ color: 'common.white', position: 'relative', zIndex: 1 }}>
            Services & Investment
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ maxWidth: 900, mx: 'auto', color: 'rgba(255,255,255,0.92)', position: 'relative', zIndex: 1 }}
          >
            Our services are centered on Real Estate Activities, with delivery focused on
            marketing, investment, development, appraisal, and management.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {[
            'Real Estate Marketing',
            'Real Estate Investment',
            'Real Estate Development',
            'Property Appraisal',
            'Property Management',
            'Buyer, Seller & Investor Advisory',
          ].map((service) => (
            <Grid key={service} size={{ xs: 12, md: 6 }}>
              <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" fontWeight="bold">{service}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ pb: 10 }}>
        <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>Need a tailored engagement model?</Typography>
          <Typography color="text.secondary" mb={3}>
            Our team can discuss property marketing mandates, investment opportunities,
            development partnerships, appraisal requirements, and management mandates.
          </Typography>
          <Button variant="contained" href="/contact" size="large">Talk to Us</Button>
        </Paper>
      </Container>
    </main>
  );
}
