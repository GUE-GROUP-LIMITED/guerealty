import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,100,215,0.45) 100%), url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80") center/cover',
          },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} textAlign="center" alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" fontWeight="bold" sx={{ maxWidth: 900, color: 'common.white' }}>
              GUE REALTY LIMITED
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 900, color: 'rgba(255,255,255,0.92)' }}>
              An active subsidiary of GUE GROUP LIMITED focused on Real Estate Activities,
              including real estate marketing, investment, development, appraisal, and management.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" href="/properties" size="large">View Properties</Button>
              <Button
                variant="outlined"
                href="/contact"
                size="large"
                sx={{ borderColor: 'common.white', color: 'common.white' }}
              >
                Speak With Our Team
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          What We Do
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Real Estate Marketing',
              body: 'Connecting buyers, sellers, and investors through structured property marketing.'
            },
            {
              title: 'Investment & Development',
              body: 'Real estate investment and development across managed assets and acquired land.'
            },
            {
              title: 'Appraisal & Management',
              body: 'Property appraisal and professional management to enhance asset value and performance.'
            }
          ].map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" fontWeight="bold" mb={1}>{item.title}</Typography>
                <Typography color="text.secondary">{item.body}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
          Portfolio Preview
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ maxWidth: 900, mx: 'auto', mb: 4 }}>
          A snapshot of the real estate categories we focus on across management and development.
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: 'Education Properties',
              description: 'Managed school assets and learning-focused facilities.',
              image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80'
            },
            {
              title: 'Residential Development',
              description: 'Land-backed residential projects in growth corridors.',
              image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80'
            },
            {
              title: 'Commercial Real Estate',
              description: 'Commercial property opportunities for investors and operators.',
              image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
            }
          ].map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardMedia component="img" height="220" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={1}>{item.title}</Typography>
                  <Typography color="text.secondary">{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}