"use client";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';

export default function ContactPage() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mnjgjgbn';
  const endpointConfigured = Boolean(formspreeEndpoint);

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    enquiryType: 'Partnership',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!endpointConfigured) {
      setStatus({
        type: 'warning',
        message: 'Form endpoint is not configured yet. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment.',
      });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: '', message: '' });

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Unable to submit form');
      }

      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been submitted successfully.' });
      setFormData({
        fullName: '',
        company: '',
        phone: '',
        enquiryType: 'Partnership',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Submission failed. Please try again shortly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

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
              xs: 'linear-gradient(98deg, rgba(8,15,36,0.92) 0%, rgba(8,15,36,0.82) 44%, rgba(26,122,60,0.56) 100%), linear-gradient(180deg, rgba(10,16,35,0.30) 0%, rgba(10,16,35,0.36) 100%), url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80")',
              md: 'linear-gradient(98deg, rgba(8,15,36,0.84) 0%, rgba(8,15,36,0.70) 44%, rgba(26,122,60,0.50) 100%), linear-gradient(180deg, rgba(10,16,35,0.20) 0%, rgba(10,16,35,0.26) 100%), url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80")',
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
            <Box sx={{
              display: 'inline-block',
              px: 2,
              py: 0.7,
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.30)',
              backgroundColor: 'rgba(9,16,36,0.34)',
              mb: 2.5,
            }}>
              <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.96)', textShadow: '0 1px 1px rgba(0,0,0,0.35)' }}>
                CONTACT · GUE REALTY LIMITED
              </Typography>
            </Box>
            <Typography
              variant="h2"
              fontWeight={{ xs: 760, md: 800 }}
              sx={{
                mb: 2.25,
                maxWidth: 820,
                letterSpacing: { xs: '-0.015em', md: '-0.025em' },
                lineHeight: { xs: 1.08, md: 1.12 },
                textShadow: { xs: '0 1px 1px rgba(0,0,0,0.26)', md: '0 1px 2px rgba(0,0,0,0.28)' },
                textWrap: 'balance',
              }}
            >
              Let&apos;s Discuss Your Property Goals
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: 900, color: 'rgba(255,255,255,0.96)', lineHeight: 1.75, fontWeight: 400, textShadow: '0 1px 1px rgba(0,0,0,0.22)' }}
            >
              Submit your enquiry through our secure form for partnerships, portfolio requests,
              and investment discussions.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', border: '1px solid #E2E8F0', borderRadius: 3 }}>
              <Typography variant="h5" fontWeight={800} mb={1} sx={{ color: '#1A2B5E' }}>Send an Enquiry</Typography>
              <Typography color="text.secondary" mb={3}>
                Complete this form and our team will respond with the appropriate next steps.
              </Typography>

              {status.message && (
                <Alert severity={status.type} sx={{ mb: 3 }}>
                  {status.message}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <TextField
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Company / Organization"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                  />
                  <TextField
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    select
                    label="Enquiry Type"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="Partnership">Partnership</MenuItem>
                    <MenuItem value="Property Enquiry">Property Enquiry</MenuItem>
                    <MenuItem value="Investment">Investment</MenuItem>
                    <MenuItem value="General">General</MenuItem>
                  </TextField>
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    minRows={5}
                    fullWidth
                  />
                  <TextField
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    sx={{ display: 'none' }}
                  />

                  <Button type="submit" variant="contained" color="secondary" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Enquiry'}
                  </Button>
                </Stack>
              </Box>
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
                background: 'linear-gradient(165deg, rgba(26,43,94,0.03) 0%, rgba(26,122,60,0.05) 100%)',
              }}
            >
              <Typography variant="h5" fontWeight={800} mb={2} sx={{ color: '#1A2B5E' }}>Before You Submit</Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography fontWeight={700} sx={{ color: '#1A2B5E' }}>What should I include in my message?</Typography>
                  <Typography color="text.secondary">Yes. We manage operating assets including schools and maintain acquired development land.</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} sx={{ color: '#1A2B5E' }}>How quickly will you respond?</Typography>
                  <Typography color="text.secondary">Most enquiries are acknowledged within one business day.</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} sx={{ color: '#1A2B5E' }}>Do you work with partners and investors?</Typography>
                  <Typography color="text.secondary">Yes. We engage development, operating, and investment partners on structured terms.</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} sx={{ color: '#1A2B5E' }}>Company Profile</Typography>
                  <Typography color="text.secondary">RC: 8371222 · Nature of Business: Real Estate Activities.</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
