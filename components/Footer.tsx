'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColors } from '@/contexts/ColorContext';
import { getCvData } from '@/data/cvData';

export default function Footer() {
  const { language } = useLanguage();
  const { primaryColor } = useColors();
  const cvData = getCvData(language);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          background: primaryColor,
          color: 'white',
          py: 3,
          mt: 0,
          transition: 'background 0.3s ease',
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
