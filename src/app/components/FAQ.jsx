'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Grid,
  Chip,
  Stack,
  Button,
  Card,
  CardContent
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import GavelIcon from '@mui/icons-material/Gavel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqCategories = [
    {
      title: "Diaspora Investment",
      icon: <PublicIcon />,
      color: "primary",
      faqs: [
        {
          question: "Can I invest in Nigerian real estate while living abroad?",
          answer: "GUE REALTY LIMITED is newly registered and is currently exploring partnerships and investment opportunities. When investment products and diaspora services are available we will publish verified details and guidance. For corporate information in the meantime, please consult our parent company at https://www.gueplc.com."
        },
        {
          question: "How do I verify properties and avoid scams from abroad?",
          answer: "We provide comprehensive verification including: 1) Legal document verification, 2) Virtual property tours with live video calls, 3) Third-party property inspections, 4) Escrow payment services, 5) Property title insurance, and 6) Regular construction progress updates for ongoing projects."
        },
        {
          question: "What currencies do you accept for payment?",
          answer: "We accept payments in USD, GBP, EUR, CAD, and NGN. We work with licensed international payment processors and provide competitive exchange rates. All payments are secured through escrow accounts until property documentation is completed."
        },
        {
          question: "How do I handle property management while abroad?",
          answer: "GUE REALTY LIMITED offers comprehensive property management services including tenant sourcing, rent collection, maintenance, insurance, and regular property reports. We handle everything so you can enjoy passive income without the stress of day-to-day management."
        }
      ]
    },
    {
      title: "Legal & Documentation",
      icon: <GavelIcon />,
      color: "success",
      faqs: [
        {
          question: "What legal documents do I need as a foreign investor?",
          answer: "For foreign investors, you need: 1) Valid international passport, 2) Proof of income/bank statements, 3) Power of Attorney (if using a representative), 4) Tax identification number, and 5) Investment purpose declaration. We guide you through obtaining all required documents."
        },
        {
          question: "How long does the property transfer process take?",
          answer: "For completed properties: 30-45 days. For off-plan properties: 60-90 days after construction completion. We expedite the process through our legal partnerships and ensure all documentation meets international standards for diaspora investors."
        },
        {
          question: "Are there restrictions on foreign property ownership in Nigeria?",
          answer: "No restrictions! Foreign nationals can own property in Nigeria. However, land ownership requires Nigerian citizenship, but you can obtain 99-year renewable leasehold rights. We structure investments to maximize your ownership rights and investment security."
        },
        {
          question: "What happens if there are legal disputes?",
          answer: "Specific dispute-resolution procedures and professional indemnity arrangements will be published when they have been finalized and verified. We recommend prospective clients obtain independent legal advice and verify any protections before committing to an investment."
        }
      ]
    },
    {
      title: "Investment & Returns",
      icon: <TrendingUpIcon />,
      color: "warning",
      faqs: [
        {
          question: "What returns can I expect from Nigerian real estate?",
          answer: "Historical returns show: Rental yields of 8-15% annually, Capital appreciation of 10-25% per year in prime locations, and Total returns of 18-40% annually. Lagos and Abuja consistently outperform other markets. We provide detailed market analysis for each investment opportunity."
        },
        {
          question: "What are the minimum investment amounts?",
          answer: "Minimum investments: Land plots from $15,000, Apartments from $35,000, Houses from $75,000, Commercial properties from $150,000. We also offer fractional ownership starting from $5,000 through our investment plans."
        },
        {
          question: "How do I receive rental income abroad?",
          answer: "We transfer rental income monthly via: International wire transfers, Digital payment platforms (Wise, Remitly), Cryptocurrency (where legal), or Reinvestment into new properties. All transfers comply with Nigerian CBN regulations and international banking standards."
        },
        {
          question: "What are the tax implications of investing from abroad?",
          answer: "Nigeria has double taxation agreements with many countries. You may be eligible for tax credits in your home country. We provide annual investment statements and work with international tax advisors to optimize your tax position."
        }
      ]
    },
    {
      title: "Security & Trust",
      icon: <SecurityIcon />,
      color: "error",
      faqs: [
        {
          question: "How do I know GUE REALTY LIMITED is legitimate and trustworthy?",
          answer: "GUE REALTY LIMITED is registered (RC 8371222). Additional licensing, memberships, insurance and track-record information will be published here once verified. For group-level corporate history please visit https://www.gueplc.com."
        },
        {
          question: "What guarantees do you provide for my investment?",
          answer: "Any guarantees or protection mechanisms will be published when finalized and verifiable. Until then, no specific guarantees should be assumed — always review contract terms and seek independent legal advice before investing."
        },
        {
          question: "How do I verify the progress of construction projects?",
          answer: "We provide: Weekly construction photos and videos, Monthly progress reports, Quarterly site inspections by independent surveyors, Live virtual site tours on request, and Real-time project dashboards accessible 24/7 from anywhere in the world."
        },
        {
          question: "What happens if GUE REALTY LIMITED faces business challenges?",
          answer: "Your investments are protected through: Client asset segregation (your funds are never mixed with company funds), Insurance coverage for business continuity, Regulatory oversight by Nigerian authorities, and Partnership with international firms for additional security. Your property ownership is independent of GUE REALTY LIMITED's business status."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      title: "WhatsApp Consultation",
      description: "Get instant answers via WhatsApp",
      action: "Start Chat",
      icon: "💬"
    },
    {
      title: "Video Call Appointment",
      description: "Schedule a detailed discussion",
      action: "Book Call",
      icon: "📹"
    },
    {
      title: "Email Support",
      description: "Send detailed questions",
      action: "Email Us",
      icon: "📧"
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            ❓ Frequently Asked Questions
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Get answers to the most common questions from our diaspora investors and first-time property buyers
          </Typography>
        </Box>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <Box key={categoryIndex} mb={6}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: `${category.color}.light`
              }}
            >
              <Box
                sx={{
                  backgroundColor: `${category.color}.main`,
                  color: 'white',
                  p: 3,
                  textAlign: 'center'
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                  {category.icon}
                  <Typography variant="h4" fontWeight="bold">
                    {category.title}
                  </Typography>
                </Stack>
              </Box>

              <Box sx={{ p: 2 }}>
                {category.faqs.map((faq, faqIndex) => (
                  <Accordion
                    key={`${categoryIndex}-${faqIndex}`}
                    expanded={expanded === `panel${categoryIndex}-${faqIndex}`}
                    onChange={handleChange(`panel${categoryIndex}-${faqIndex}`)}
                    sx={{
                      '&:before': { display: 'none' },
                      boxShadow: 'none',
                      '&.Mui-expanded': {
                        margin: 'auto',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: 'grey.50',
                        borderRadius: 2,
                        mb: 1,
                        '&.Mui-expanded': {
                          backgroundColor: 'primary.light',
                          color: 'primary.contrastText'
                        }
                      }}
                    >
                      <Typography variant="h6" fontWeight="medium">
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, py: 2 }}>
                      <Typography
                        variant="body1"
                        sx={{ lineHeight: 1.7, color: 'text.secondary' }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Paper>
          </Box>
        ))}

        {/* Still Have Questions Section */}
        <Paper
          elevation={8}
          sx={{
            p: 6,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <ContactSupportIcon sx={{ fontSize: 60, mb: 3 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Still Have Questions?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Our expert team is ready to provide personalized answers to your specific questions
          </Typography>

          <Grid container spacing={3} maxWidth="md" sx={{ mx: 'auto' }}>
            {contactOptions.map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      {option.icon}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {option.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                      {option.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'white',
                          color: 'primary.main'
                        }
                      }}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
