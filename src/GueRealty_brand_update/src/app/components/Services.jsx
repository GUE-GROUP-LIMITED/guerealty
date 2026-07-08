"use client";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HandshakeIcon from '@mui/icons-material/Handshake';

const services = [
  {
    id: 1,
    icon: <CampaignIcon sx={{ fontSize: 40, color: '#1A2B5E' }} />,
    title: 'Real Estate Marketing',
    description: 'Connecting buyers and sellers through targeted property marketing — digital listings, site visits, client matching, and negotiation support for residential and commercial properties.',
    features: ['Property Listings', 'Buyer & Seller Matching', 'Digital Marketing', 'Negotiation Support'],
    color: '#1A2B5E',
  },
  {
    id: 2,
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#1A7A3C' }} />,
    title: 'Property Investment',
    description: 'Connecting investors with high-potential real estate assets — land, residential, and commercial properties — with guidance on acquisition, portfolio building, and returns.',
    features: ['Land Acquisition', 'Investment Advisory', 'Portfolio Management', 'ROI Analysis'],
    color: '#1A7A3C',
  },
  {
    id: 3,
    icon: <ConstructionIcon sx={{ fontSize: 40, color: '#CC2020' }} />,
    title: 'Property Development',
    description: 'End-to-end real estate development from land acquisition through to project completion, focusing on residential and commercial properties that serve real community needs.',
    features: ['Site Planning', 'Construction Oversight', 'Contractor Management', 'Project Delivery'],
    color: '#CC2020',
  },
  {
    id: 4,
    icon: <AssessmentIcon sx={{ fontSize: 40, color: '#D4A017' }} />,
    title: 'Property Appraisal',
    description: 'Professional valuation and appraisal services for residential, commercial, and land assets — accurate, independent assessments for sales, purchase, finance, and legal purposes.',
    features: ['Market Valuation', 'Due Diligence', 'Comparative Analysis', 'Appraisal Reports'],
    color: '#D4A017',
  },
  {
    id: 5,
    icon: <ManageAccountsIcon sx={{ fontSize: 40, color: '#1A2B5E' }} />,
    title: 'Property Management',
    description: 'Professional management of residential and commercial assets — tenant relations, maintenance coordination, rent collection, and compliance — protecting and growing property value.',
    features: ['Tenant Management', 'Maintenance Coordination', 'Rent Collection', 'Asset Reporting'],
    color: '#1A2B5E',
  },
  {
    id: 6,
    icon: <HandshakeIcon sx={{ fontSize: 40, color: '#1A7A3C' }} />,
    title: 'Diaspora Property Services',
    description: 'Trusted property acquisition, management, and investment services for Nigerians abroad — giving the diaspora a safe and transparent route to own and grow property at home.',
    features: ['Remote Acquisition', 'Title Verification', 'Transparent Documentation', 'Local Management'],
    color: '#1A7A3C',
  },
];

export default function Services() {
  return (
    <Box sx={{ py: 9, backgroundColor: '#F5F7FA' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Box sx={{
            display: 'inline-block',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            color: '#1A7A3C',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            borderBottom: '2px solid #CC2020',
            paddingBottom: '3px',
            mb: 1.5,
          }}>
            // Our Services
          </Box>
          <Typography variant="h2" fontWeight={800} sx={{ color: '#1A2B5E', mb: 2, letterSpacing: '-0.025em' }}>
            Complete Real Estate Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto', lineHeight: 1.7, fontWeight: 400 }}>
            From marketing a single property to managing a full portfolio — GUE Realty delivers professional real
            estate services rooted in the MEMART objects of the company.
          </Typography>
        </Box>

        {/* Service cards */}
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: '100%',
                  border: '1px solid #E2E8F0',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  },
                  '&:hover': {
                    boxShadow: '0 10px 32px rgba(26,43,94,0.14)',
                    transform: 'translateY(-4px)',
                    borderColor: service.color,
                  },
                }}
              >
                <Box mb={2}>{service.icon}</Box>
                <Typography variant="h5" fontWeight={700} sx={{ color: '#1A2B5E', mb: 1.5 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5 }}>
                  {service.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {service.features.map((f) => (
                    <Chip
                      key={f}
                      label={f}
                      size="small"
                      sx={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        backgroundColor: `${service.color}12`,
                        color: service.color,
                        border: `1px solid ${service.color}30`,
                        borderRadius: '6px',
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Group strip */}
        <Box sx={{
          mt: 8, p: 4, borderRadius: 3,
          background: 'linear-gradient(135deg, #1A2B5E 0%, #0F1A3A 100%)',
          color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 3, flexWrap: 'wrap',
        }}>
          <Box>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 0.75, letterSpacing: '-0.02em' }}>
              GUE Realty Limited · A Gue Group Company
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, maxWidth: 520, lineHeight: 1.65 }}>
              RC 8371222 · Tax ID: 2521508949024 · Registered 26 March 2025 · Nigeria.
              Operating under Gue Group Limited (RC 7501599).
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', flexShrink: 0 }}>
            <Box
              component="a"
              href="/contact"
              sx={{
                px: 3, py: 1.25, borderRadius: 2, fontSize: '0.875rem', fontWeight: 700,
                background: 'linear-gradient(135deg, #1A7A3C, #22A050)',
                color: 'white', textDecoration: 'none',
                '&:hover': { opacity: 0.9 },
              }}
            >
              Get in Touch
            </Box>
            <Box
              component="a"
              href="https://www.guegroup.com"
              target="_blank"
              rel="noreferrer"
              sx={{
                px: 3, py: 1.25, borderRadius: 2, fontSize: '0.875rem', fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.30)',
                color: 'white', textDecoration: 'none',
                '&:hover': { background: 'rgba(255,255,255,0.10)' },
              }}
            >
              Gue Group →
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
