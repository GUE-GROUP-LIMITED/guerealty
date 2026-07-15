import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export const metadata = {
  title: "About",
  description:
    "Learn about GUE Realty Limited, our mission, vision, and credentials in real estate marketing, investment, development, appraisal, and property management.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
            backgroundImage: {
              xs: 'linear-gradient(98deg, rgba(8,15,36,0.92) 0%, rgba(8,15,36,0.82) 44%, rgba(26,122,60,0.56) 100%), linear-gradient(180deg, rgba(10,16,35,0.30) 0%, rgba(10,16,35,0.36) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80")',
              md: 'linear-gradient(98deg, rgba(8,15,36,0.84) 0%, rgba(8,15,36,0.70) 44%, rgba(26,122,60,0.50) 100%), linear-gradient(180deg, rgba(10,16,35,0.20) 0%, rgba(10,16,35,0.26) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80")',
            },
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
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
            <Box
              sx={{
                display: 'inline-block',
                px: 2,
                py: 0.7,
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.30)',
                backgroundColor: 'rgba(9,16,36,0.34)',
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: '0.72rem', letterSpacing: '0.1em', fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.96)', textShadow: '0 1px 1px rgba(0,0,0,0.35)' }}>
                ABOUT · GUE REALTY LIMITED
              </Typography>
            </Box>
            <Typography
              variant="h2"
              fontWeight={{ xs: 760, md: 800 }}
              sx={{
                mb: 2.25,
                maxWidth: 860,
                letterSpacing: { xs: '-0.015em', md: '-0.025em' },
                lineHeight: { xs: 1.08, md: 1.12 },
                textShadow: { xs: '0 1px 1px rgba(0,0,0,0.26)', md: '0 1px 2px rgba(0,0,0,0.28)' },
                textWrap: 'balance',
              }}
            >
              Building Trust Through Structured Real Estate Delivery
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: 860, color: 'rgba(255,255,255,0.96)', lineHeight: 1.75, fontWeight: 400, textShadow: '0 1px 1px rgba(0,0,0,0.22)' }}
            >
              GUE Realty Limited is an active subsidiary of GUE Group Limited, focused on practical,
              value-driven property services including marketing, investment, development, appraisal, and management.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 9 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '1px solid #E2E8F0',
                borderRadius: 3,
                '&:hover': {
                  borderColor: '#1A7A3C',
                  boxShadow: '0 12px 30px rgba(26,43,94,0.14)',
                },
              }}
            >
              <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#1A7A3C', letterSpacing: '0.09em', mb: 1.5 }}>
                // Mission
              </Typography>
              <Typography variant="h5" fontWeight={800} mb={1.5} sx={{ color: '#1A2B5E' }}>Mission</Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                Deliver innovative real estate marketing, investment, development, appraisal,
                and management solutions that connect buyers, sellers, and investors.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '1px solid #E2E8F0',
                borderRadius: 3,
                '&:hover': {
                  borderColor: '#1A2B5E',
                  boxShadow: '0 12px 30px rgba(26,43,94,0.14)',
                },
              }}
            >
              <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#CC2020', letterSpacing: '0.09em', mb: 1.5 }}>
                // Vision
              </Typography>
              <Typography variant="h5" fontWeight={800} mb={1.5} sx={{ color: '#1A2B5E' }}>Vision</Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                Build a trusted real estate platform that enhances property value and drives
                sustainable growth in the real estate sector.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={4} sx={{ color: '#1A2B5E' }}>
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
              <Paper
                elevation={0}
                sx={{ p: 3, border: '1px solid #E2E8F0', borderRadius: 3 }}
              >
                <Typography variant="overline" sx={{ color: '#4A5568', letterSpacing: '0.07em' }}>{item.label}</Typography>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#1A2B5E' }}>{item.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
