'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { ContactInfo } from '@/types/cv';

interface HeaderProps {
  contact: ContactInfo;
}

export default function Header({ contact }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)',
          color: 'white',
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                textAlign: 'center',
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              {contact.name}
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 400,
                  mb: 4,
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  textAlign: 'center',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Social Communicator – Journalist
              </Typography>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: 3, md: 5 },
                alignItems: 'center',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  <Email sx={{ fontSize: '1.1rem', opacity: 0.9 }} />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {contact.email}
                  </Typography>
                </Box>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  <Phone sx={{ fontSize: '1.1rem', opacity: 0.9 }} />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {contact.phone}
                  </Typography>
                </Box>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  <LocationOn sx={{ fontSize: '1.1rem', opacity: 0.9 }} />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {contact.location}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
}
