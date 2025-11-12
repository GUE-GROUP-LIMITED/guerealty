"use client";
// components/About.jsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';
import NatureIcon from '@mui/icons-material/Nature';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function About() {
  const fantasies = [
    {
      icon: <HomeIcon />,
      title: "Infrastructure Development",
      description: "Financing sustainable infrastructure projects that create lasting value for communities while delivering strong returns."
    },
    {
      icon: <HandshakeIcon />,
      title: "ESG-Compliant Partnerships",
      description: "Building trusted partnerships with developers and investors who share our commitment to environmental and social responsibility."
    },
    {
      icon: <TrendingUpIcon />,
      title: "Sustainable Investment Solutions",
      description: "Creating innovative financial products that enable investors to participate in Africa's infrastructure development while maintaining ESG standards."
    },
    {
      icon: <PublicIcon />,
      title: "International Capital Access",
      description: "Connecting global investors with African infrastructure opportunities through transparent, ESG-compliant investment vehicles."
    }
  ];

  const services = [
    { name: "Infrastructure Finance", color: "primary" },
    { name: "Project Finance", color: "secondary" },
    { name: "Real Estate Development", color: "success" },
    { name: "Asset Management", color: "info" },
    { name: "Leasing Solutions", color: "warning" },
    { name: "ESG Advisory", color: "error" }
  ];

  const values = [
    {
      icon: <SecurityIcon />,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and integrity in every transaction."
    },
    {
      icon: <NatureIcon />,
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and sustainable development for future generations."
    },
    {
      icon: <BusinessCenterIcon />,
      title: "ESG Excellence",
      description: "Fully integrated Environmental, Social, and Governance principles guide every investment and development decision."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: 'primary.main' }}
          >
            About GUE REALTY LIMITED
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 'md', mx: 'auto', lineHeight: 1.6 }}
          >
            GUE REALTY LIMITED is a newly registered subsidiary of the GUE Group. The company is currently exploring partnerships and investment opportunities.
            This site is for information only. Detailed services, projects and credentials will be published once
            the company begins operations.
          </Typography>
        </Box>

        {/* Informational placeholder */}
        <Box mb={10}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            What to expect
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            We are preparing our services and company information. Please check back later for full details.
          </Typography>
        </Box>

        {/* Mission & Vision Section */}
        <Grid container spacing={6} mb={8}>
          {/* Mission */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                backgroundColor: 'primary.main',
                color: 'white'
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <FlagIcon sx={{ fontSize: 40 }} />
                <Typography variant="h4" fontWeight="bold">
                  Mission
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                GUE REALTY LIMITED is committed to driving sustainable development across Africa through innovative
                infrastructure finance, real estate development, and asset management solutions. We focus on
                projects that create lasting value for communities while delivering strong returns for investors,
                all while maintaining the highest ESG standards.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: 'italic' }}>
                Our integrated approach to Infrastructure & Project Finance, Real Estate Development, and
                Leasing & Asset Finance enables us to deliver comprehensive solutions that address Africa's
                infrastructure needs while promoting environmental sustainability and social responsibility.
              </Typography>
            </Paper>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                backgroundColor: 'secondary.main',
                color: 'white'
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <VisibilityIcon sx={{ fontSize: 40 }} />
                <Typography variant="h4" fontWeight="bold">
                  Vision
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                To be Africa's leading ESG-compliant infrastructure and development finance company,
                creating sustainable communities and driving economic growth through innovative
                financial solutions and responsible development practices that benefit all stakeholders.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Services Section */}
        <Box mb={8}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Our Services
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {services.map((service, index) => (
              <Chip
                key={index}
                label={service.name}
                color={service.color}
                variant="filled"
                sx={{
                  fontSize: '1.1rem',
                  py: 2,
                  px: 3,
                  height: 'auto',
                  borderRadius: '25px',
                  fontWeight: 600,
                  '& .MuiChip-label': {
                    px: 2,
                    py: 1
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Values Section */}
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: 'grey.50'
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      p: 2,
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
