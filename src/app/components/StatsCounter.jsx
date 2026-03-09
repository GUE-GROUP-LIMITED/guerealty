'use client';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function StatsCounter() {
  const [affiliateCount, setAffiliateCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
    
    const affiliatesRef = collection(db, 'affiliates');
    const unsubscribe = onSnapshot(affiliatesRef, (snapshot) => {
      setAffiliateCount(snapshot.size);
    });

    return () => unsubscribe();
  }, []);

  // Statistics and live counts are updated progressively as figures are verified.
  return (
    <Box py={4} display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ p: 4, minWidth: 240, textAlign: 'center' }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Company Status
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          Operational — managing active real estate assets and development land
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Portfolio metrics are updated as new verified figures become available.
        </Typography>
      </Paper>
    </Box>
  );
}