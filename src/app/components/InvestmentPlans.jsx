'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export default function InvestmentPlans() {
  // Investment plans are being rolled out in phases.
  return (
    <Box>
      <Typography variant="h6" color="text.secondary" textAlign="center">
        Investment plans and structured financial products are being expanded in phases.
        Contact our team for current opportunities linked to managed assets and acquired development land.
      </Typography>
    </Box>
  );
}