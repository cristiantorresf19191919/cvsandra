'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { ContactInfo } from '@/types/cv';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  contact: ContactInfo;
}

export default function Header({ contact }: HeaderProps) {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          background: '#1a5f5f', // Dark teal/green
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, transparent 0%, transparent 45%, white 45%, white 50%, transparent 50%)',
            opacity: 0.15,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1, minWidth: { xs: '100%', md: 'auto' } }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    letterSpacing: '-0.02em',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {contact.name.toUpperCase()}
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontWeight: 400,
                    mb: 3,
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'white',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {t('title')}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#e63946',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        background: '#ff4757',
                      },
                    }}
                  >
                    <LinkedIn sx={{ color: 'white', fontSize: '1.25rem' }} />
                  </Box>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#e63946',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        background: '#ff4757',
                      },
                    }}
                  >
                    <Twitter sx={{ color: 'white', fontSize: '1.25rem' }} />
                  </Box>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#e63946',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        background: '#ff4757',
                      },
                    }}
                  >
                    <Instagram sx={{ color: 'white', fontSize: '1.25rem' }} />
                  </Box>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '0.875rem',
                      ml: 1,
                    }}
                  >
                    @sandra.aristizabal
                  </Typography>
                </Box>
              </motion.div>
            </Box>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Avatar
                sx={{
                  width: { xs: 120, md: 160 },
                  height: { xs: 120, md: 160 },
                  border: '4px solid white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1a5f5f 0%, #2a7f7f 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: 'white',
                  }}
                >
                  {contact.name.charAt(0)}
                </Box>
              </Avatar>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}
