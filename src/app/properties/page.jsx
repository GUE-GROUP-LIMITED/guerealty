import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export const metadata = {
  title: "Properties",
  description:
    "View GUE Realty property focus areas including managed school assets, acquired development land, and upcoming residential and commercial opportunities.",
  alternates: {
    canonical: "/properties",
  },
};

export default function PropertiesPage() {
  return (
    <main>
      <Box
        sx={{
          py: { xs: 9, md: 11 },
          position: 'relative',
          overflow: 'hidden',
          color: 'common.white',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(150deg, rgba(15,26,58,0.86) 0%, rgba(26,122,60,0.62) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80") center/cover',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            zIndex: 2,
            background: 'linear-gradient(90deg, #CC2020 0%, #1A7A3C 50%, #1A2B5E 100%)',
          }}
        />
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.1em', mb: 2 }}>
              PROPERTIES · GUE REALTY
            </Typography>
            <Typography variant="h2" fontWeight={800} sx={{ mb: 2, letterSpacing: '-0.025em' }}>
              Portfolio Focus and Development Pipeline
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: 920, color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, fontWeight: 400 }}
            >
              Our portfolio includes managed school assets and acquired land earmarked for
              residential and commercial development, supported by appraisal and management services.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: '#1A2B5E' }}>Portfolio Focus</Typography>
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
              <Card elevation={0} sx={{ height: '100%', border: '1px solid #E2E8F0' }}>
                <CardMedia component="img" height="220" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight={700} mb={1} sx={{ color: '#1A2B5E' }}>{item.title}</Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{item.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ pb: 10 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 3,
            border: '1px solid #E2E8F0',
            background: 'linear-gradient(160deg, rgba(26,43,94,0.04) 0%, rgba(26,122,60,0.05) 100%)',
          }}
        >
          <Typography variant="h5" fontWeight={800} mb={1} sx={{ color: '#1A2B5E' }}>Request a portfolio brief</Typography>
          <Typography color="text.secondary" mb={3} sx={{ lineHeight: 1.7 }}>
            Get current availability, location summaries, and engagement options from our team.
          </Typography>
          <Button variant="contained" href="/contact" size="large">Request Details</Button>
        </Paper>
      </Container>
    </main>
  );
}
