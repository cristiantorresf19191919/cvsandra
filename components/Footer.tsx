'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { cvData } from '@/data/cvData';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          background: '#1a5f5f', // Dark teal/green
          color: 'white',
          py: 3,
          mt: 0,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, md: 5 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Email sx={{ fontSize: '1.25rem' }} />
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 400,
                }}
              >
                {cvData.contact.email}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Phone sx={{ fontSize: '1.25rem' }} />
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 400,
                }}
              >
                {cvData.contact.phone}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <LocationOn sx={{ fontSize: '1.25rem' }} />
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 400,
                }}
              >
                {cvData.contact.location}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}
