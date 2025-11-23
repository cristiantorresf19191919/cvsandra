'use client';

import { motion } from 'framer-motion';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Language } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: 24, md: 32 },
        left: { xs: 24, md: 32 },
        zIndex: 1000,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Tooltip title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'} arrow>
          <IconButton
            onClick={toggleLanguage}
            sx={{
              background: 'linear-gradient(135deg, #1a5f5f 0%, #2a7f7f 100%)',
              color: 'white',
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              boxShadow: '0 4px 20px rgba(26, 95, 95, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #2a7f7f 0%, #1a5f5f 100%)',
                boxShadow: '0 6px 25px rgba(26, 95, 95, 0.6)',
              },
              transition: 'all 0.3s ease',
            }}
            aria-label="Toggle language"
          >
            <Language sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            position: 'absolute',
            top: -8,
            right: -8,
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: '#e63946',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid white',
            boxShadow: '0 2px 8px rgba(230, 57, 70, 0.4)',
          }}
        >
          <Box
            sx={{
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            {language === 'es' ? 'ES' : 'EN'}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

