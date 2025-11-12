// components/TestimonialSlider.jsx
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const timerRef = useRef(null);

  // No client testimonials available while the company is exploring partnerships and investment opportunities.
  const testimonials = [
    {
      id: 0,
      name: "Coming Soon",
      role: "",
      location: "",
      content: "Client testimonials will be published once GUE REALTY LIMITED has verified client engagements.",
      rating: 0,
      image: '',
      investment: ''
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timerRef.current);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Prevent hydration mismatch by not running animations until client-side
  if (!isClient) {
    return (
      <Box py={8} bgcolor="blue.50">
        <Box maxWidth="lg" mx="auto" px={2}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Client Success Stories
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" maxWidth="md" mx="auto">
              Hear from our satisfied clients about their GUE REALTY LIMITED experience
            </Typography>
          </Box>
          <Box position="relative" maxWidth="md" mx="auto" minHeight={350}>
            {/* Show first testimonial without animation during server render */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center">
                <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}>
                  {testimonials[0].name.charAt(0)}
                </Avatar>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {testimonials[0].name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {testimonials[0].role} • {testimonials[0].location}
                </Typography>
                <Rating value={testimonials[0].rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                  "{testimonials[0].content}"
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box py={8} bgcolor="blue.50">
      <Box maxWidth="lg" mx="auto" px={2}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Client Success Stories
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" maxWidth="md" mx="auto">
            Hear from our satisfied clients about their GUE REALTY LIMITED experience
          </Typography>
        </Box>
        <Box position="relative" maxWidth="md" mx="auto" minHeight={350}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                <Avatar
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  sx={{ width: 100, height: 100, mr: { md: 4 }, mb: { xs: 2, md: 0 } }}
                />
                <Box flex={1}>
                  <Stack direction="row" alignItems="center" mb={2}>
                    <Rating value={testimonials[currentIndex].rating} readOnly />
                  </Stack>
                  <Typography variant="h6" fontStyle="italic" color="text.primary" mb={2}>
                    "{testimonials[currentIndex].content}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonials[currentIndex].name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight="bold">
                    Investment: {testimonials[currentIndex].investment}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Dots */}
          <Stack direction="row" spacing={1} justifyContent="center" position="absolute" bottom={16} left={0} right={0}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  border: index === currentIndex ? '2px solid #0064d7' : 'none',
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </Stack>
          {/* Navigation Arrows */}
          <Button
            onClick={() => {
              setDirection(-1);
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              resetTimer();
            }}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              minWidth: 0,
              p: 1,
              bgcolor: 'white',
              borderRadius: '50%',
              boxShadow: 2,
              '&:hover': { bgcolor: 'blue.50' },
            }}
            aria-label="Previous testimonial"
          >
            <span style={{ fontSize: 24, color: '#0064d7' }}>{'‹'}</span>
          </Button>
          <Button
            onClick={() => {
              setDirection(1);
              setCurrentIndex((prev) => (prev + 1) % testimonials.length);
              resetTimer();
            }}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              minWidth: 0,
              p: 1,
              bgcolor: 'white',
              borderRadius: '50%',
              boxShadow: 2,
              '&:hover': { bgcolor: 'blue.50' },
            }}
            aria-label="Next testimonial"
          >
            <span style={{ fontSize: 24, color: '#0064d7' }}>{'›'}</span>
          </Button>
        </Box>
        {/* Video Testimonials CTA */}
        <Box textAlign="center" mt={8}>
          <Typography color="text.secondary" mb={2}>
            Want to see more success stories?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              </svg>
            }
          >
            Watch Video Testimonials
          </Button>
        </Box>
      </Box>
    </Box>
  );
}