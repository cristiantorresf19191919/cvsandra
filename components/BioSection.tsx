'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { LocationOn, CalendarToday, Phone, Email } from '@mui/icons-material';

interface BioSectionProps {
  bio: string;
  contact: {
    location: string;
    phone: string;
    email: string;
  };
}

export default function BioSection({ bio, contact }: BioSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            background: 'white',
            borderRadius: 0,
            boxShadow: 'none',
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#1a202c',
                textTransform: 'uppercase',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Personal Contact
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ color: '#e63946', fontSize: '1.5rem' }} />
                <Typography sx={{ color: '#1a202c', fontSize: '1rem' }}>
                  {contact.location}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CalendarToday sx={{ color: '#e63946', fontSize: '1.5rem' }} />
                <Typography sx={{ color: '#1a202c', fontSize: '1rem' }}>
                  Date of Birth
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: '#e63946', fontSize: '1.5rem' }} />
                <Typography sx={{ color: '#1a202c', fontSize: '1rem' }}>
                  {contact.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#e63946', fontSize: '1.5rem' }} />
                <Typography sx={{ color: '#1a202c', fontSize: '1rem' }}>
                  {contact.email}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#1a202c',
                textTransform: 'uppercase',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-inter)',
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.9375rem', md: '1rem' },
                lineHeight: 1.8,
                color: '#4a5568',
                fontWeight: 400,
              }}
            >
              {bio}
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}
