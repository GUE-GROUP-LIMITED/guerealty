"use client";
// components/Contact.jsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // The form will be submitted to Formspree
    // You'll need to replace 'YOUR_FORM_ID' with your actual Formspree form ID
    const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 50%, #e8f4fd 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80") center/cover',
          opacity: 0.05,
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Enhanced Section Header */}
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
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Contact & Corporate Enquiries
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            GUE REALTY LIMITED is an active subsidiary of GUE GROUP LIMITED. We manage real estate assets including
            schools and have acquired land for development. For group information please visit www.guegroup.com.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Consolidated Contact Information Card */}
          <Grid item xs={12} lg={5}>
            <Paper
              elevation={12}
              sx={{
                p: 6,
                borderRadius: 4,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: 'linear-gradient(90deg, #0064d7 0%, #004ba8 100%)',
                }
              }}
            >
              {/* Header */}
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: '0 12px 32px rgba(0,100,215,0.3)',
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                  GUE REALTY LIMITED
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Active subsidiary of GUE GROUP LIMITED, managing schools and development land assets.
                </Typography>
              </Box>

              <Stack spacing={4}>
                {/* Address */}
                <Box>
                  <Box display="flex" alignItems="flex-start" gap={3}>
                    <Box
                      sx={{
                        backgroundColor: '#ff6b6b',
                        color: 'white',
                        p: 2,
                        borderRadius: 3,
                        minWidth: 56,
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(255,107,107,0.3)',
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: 24 }} />
                    </Box>
                    <Box flex={1}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#ff6b6b' }}>
                        📍 Registered Address
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, mb: 1 }}>
                        Registered entity — official address and registration details will be published
                        once available.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ mx: -2 }} />

                {/* Phone & Email */}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box
                        sx={{
                          backgroundColor: '#4ecdc4',
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 6px 18px rgba(78,205,196,0.3)',
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#4ecdc4' }}>
                          📱 Phone
                        </Typography>
                        <Typography variant="body1" color="text.primary" fontWeight={600}>
                          +234 (0) 704 695 2003
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box
                        sx={{
                          backgroundColor: '#45b7d1',
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 6px 18px rgba(69,183,209,0.3)',
                        }}
                      >
                        <EmailIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#45b7d1' }}>
                          ✉️ Email
                        </Typography>
                        <Typography variant="body1" color="text.primary" fontWeight={600}>
                          info@guerealtyltd.com
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ mx: -2 }} />

                {/* Business Hours */}
                <Box>
                  <Box display="flex" alignItems="flex-start" gap={3}>
                    <Box
                      sx={{
                        backgroundColor: '#f093fb',
                        color: 'white',
                        p: 2,
                        borderRadius: 3,
                        minWidth: 56,
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(240,147,251,0.3)',
                      }}
                    >
                      <AccessTimeIcon sx={{ fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#f093fb' }}>
                        🕐 Business Hours
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM<br />
                        <strong>Saturday:</strong> 9:00 AM - 4:00 PM<br />
                        <strong>Sunday:</strong> Closed
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Stack>

              {/* Quick Action Buttons */}
              <Box sx={{ mt: 5, pt: 4, borderTop: '2px dashed rgba(0,100,215,0.2)' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<PhoneIcon />}
                      sx={{
                        py: 1.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #44a08d 0%, #4ecdc4 100%)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      Call Now
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<EmailIcon />}
                      sx={{
                        py: 1.5,
                        borderRadius: 3,
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        borderWidth: 2,
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      Send Email
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Enhanced Contact Form */}
          <Grid item xs={12} lg={7}>
            <Paper
              elevation={12}
              sx={{
                p: 6,
                borderRadius: 4,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: 'linear-gradient(90deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)',
                }
              }}
            >
              <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                  💬 Send Us a Message
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Fill out the form below and we'll get back to you within 24 hours with personalized assistance for your real estate needs.
                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleSubmit}
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Tell us about your property needs, investment goals, or any questions you have. Our team will provide personalized recommendations based on your requirements..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 2.5,
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        borderRadius: 3,
                        textTransform: 'none',
                        background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
                        boxShadow: '0 8px 24px rgba(0,100,215,0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #004ba8 0%, #0064d7 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 32px rgba(0,100,215,0.4)',
                        }
                      }}
                    >
                      🚀 Send Message & Get Expert Advice
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Enhanced Call to Action */}
        <Box
          textAlign="center"
          sx={{
            mt: 10,
            p: 8,
            background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
            color: 'white',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80") center/cover',
              opacity: 0.1,
              zIndex: 1,
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              � Ready to Drive Sustainable Infrastructure Development?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, maxWidth: '800px', mx: 'auto', lineHeight: 1.7 }}>
              Partner with GUE REALTY LIMITED to access innovative infrastructure finance solutions and ESG-compliant investment opportunities that create lasting value for communities across Africa.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent="center"
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                📅 Schedule Free Consultation
              </Button>
              <Button
                variant="contained"
                size="large"
                href="#properties"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  fontWeight: 700,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                  }
                }}
              >
                🏘️ Explore Premium Properties
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
