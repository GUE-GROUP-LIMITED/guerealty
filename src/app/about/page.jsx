import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function AboutPage() {
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
              'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,100,215,0.35) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80") center/cover',
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2} sx={{ color: 'common.white', position: 'relative', zIndex: 1 }}>
            About GUE REALTY LIMITED
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ maxWidth: 900, mx: 'auto', color: 'rgba(255,255,255,0.92)', position: 'relative', zIndex: 1 }}
          >
            GUE REALTY LIMITED is an active subsidiary of GUE GROUP LIMITED, registered for
            Real Estate Activities and focused on practical, value-driven property services.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" fontWeight="bold" mb={2}>Mission</Typography>
              <Typography color="text.secondary">
                Deliver innovative real estate marketing, investment, development, appraisal,
                and management solutions that connect buyers, sellers, and investors.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" fontWeight="bold" mb={2}>Vision</Typography>
              <Typography color="text.secondary">
                Build a trusted real estate platform that enhances property value and drives
                sustainable growth in the real estate sector.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Credentials Snapshot
        </Typography>
        <Grid container spacing={3}>
          {[
            { label: 'Company', value: 'GUE REALTY LIMITED' },
            { label: 'Parent Group', value: 'GUE GROUP LIMITED' },
            { label: 'Registration', value: 'RC - 8371222' },
            { label: 'Date of Registration', value: 'Mar 26, 2025' },
            { label: 'Nature of Business', value: 'Real Estate Activities' },
            { label: 'Focus', value: 'Marketing, Investment, Development, Appraisal, Management' },
          ].map((item) => (
            <Grid key={item.label} size={{ xs: 12, sm: 6 }}>
              <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="overline" color="text.secondary">{item.label}</Typography>
                <Typography variant="h6" fontWeight="bold">{item.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
