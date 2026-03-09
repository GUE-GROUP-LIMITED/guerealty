import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function PropertiesPage() {
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
              'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,100,215,0.35) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80") center/cover',
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2} sx={{ color: 'common.white', position: 'relative', zIndex: 1 }}>
            Properties
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ maxWidth: 900, mx: 'auto', color: 'rgba(255,255,255,0.92)', position: 'relative', zIndex: 1 }}
          >
            Our portfolio includes managed school assets and acquired land earmarked for
            residential and commercial development, supported by appraisal and management services.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>Portfolio Focus</Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Managed School Properties',
              body: 'Operational education-focused properties under active asset management.',
              image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80'
            },
            {
              title: 'Acquired Development Land',
              body: 'Land bank positioned for staged residential and commercial project delivery.',
              image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80'
            },
            {
              title: 'Upcoming Project Releases',
              body: 'Opportunities are released with clear marketing, investment, and management pathways.',
              image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
            }
          ].map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardMedia component="img" height="220" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={1}>{item.title}</Typography>
                  <Typography color="text.secondary">{item.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ pb: 10 }}>
        <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>Request a portfolio brief</Typography>
          <Typography color="text.secondary" mb={3}>
            Get current availability, location summaries, and engagement options from our team.
          </Typography>
          <Button variant="contained" href="/contact" size="large">Request Details</Button>
        </Paper>
      </Container>
    </main>
  );
}
