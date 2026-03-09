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
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,100,215,0.35) 100%), url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80") center/cover',
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2} sx={{ color: 'common.white', position: 'relative', zIndex: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ maxWidth: 900, mx: 'auto', color: 'rgba(255,255,255,0.92)', position: 'relative', zIndex: 1 }}
          >
            Submit your enquiry through our secure form for partnerships, portfolio requests,
            and investment discussions.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" fontWeight="bold" mb={1}>Send an Enquiry</Typography>
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

                  <Button type="submit" variant="contained" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Enquiry'}
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" fontWeight="bold" mb={2}>Before You Submit</Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography fontWeight="bold">What should I include in my message?</Typography>
                  <Typography color="text.secondary">Yes. We manage operating assets including schools and maintain acquired development land.</Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">How quickly will you respond?</Typography>
                  <Typography color="text.secondary">Most enquiries are acknowledged within one business day.</Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">Do you work with partners and investors?</Typography>
                  <Typography color="text.secondary">Yes. We engage development, operating, and investment partners on structured terms.</Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">Company Profile</Typography>
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
