'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { LocationOn, CalendarToday, Phone, Email } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColors } from '@/contexts/ColorContext';

interface BioSectionProps {
  bio: string;
  contact: {
    location: string;
    phone: string;
    email: string;
  };
}

export default function BioSection({ bio, contact }: BioSectionProps) {
  const { t } = useLanguage();
  const { secondaryColor } = useColors();
  
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
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.06)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 4px 16px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)',
            },
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
                position: 'relative',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '3px',
                  background: secondaryColor,
                  transition: 'background 0.3s ease',
                },
              }}
            >
              {t('personalContact')}
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  p: 1.5,
                  borderRadius: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: '#f9fafb',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: secondaryColor,
                  transition: 'background 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <LocationOn sx={{ color: 'white', fontSize: '1.25rem' }} />
                </Box>
                <Typography sx={{ color: '#1a202c', fontSize: '1rem', fontWeight: 500 }}>
                  {contact.location}
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  p: 1.5,
                  borderRadius: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: '#f9fafb',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: secondaryColor,
                  transition: 'background 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CalendarToday sx={{ color: 'white', fontSize: '1.25rem' }} />
                </Box>
                <Typography sx={{ color: '#1a202c', fontSize: '1rem', fontWeight: 500 }}>
                  {t('dateOfBirth')}
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  p: 1.5,
                  borderRadius: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: '#f9fafb',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: secondaryColor,
                  transition: 'background 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone sx={{ color: 'white', fontSize: '1.25rem' }} />
                </Box>
                <Typography sx={{ color: '#1a202c', fontSize: '1rem', fontWeight: 500 }}>
                  {contact.phone}
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  p: 1.5,
                  borderRadius: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: '#f9fafb',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: secondaryColor,
                  transition: 'background 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Email sx={{ color: 'white', fontSize: '1.25rem' }} />
                </Box>
                <Typography sx={{ color: '#1a202c', fontSize: '1rem', fontWeight: 500 }}>
                  {contact.email}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
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
                position: 'relative',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '3px',
                  background: secondaryColor,
                  transition: 'background 0.3s ease',
                },
              }}
            >
              {t('aboutMe')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.9375rem', md: '1rem' },
                lineHeight: 1.9,
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
