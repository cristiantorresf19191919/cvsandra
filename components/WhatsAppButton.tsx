'use client';

import { motion } from 'framer-motion';
import { Box, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
  const phoneNumber = '573114627493';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 24, md: 32 },
        right: { xs: 24, md: 32 },
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
          delay: 1,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Fab
          component="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
              boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
            },
            transition: 'all 0.3s ease',
          }}
          aria-label="Contactar por WhatsApp"
        >
          <WhatsAppIcon sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }} />
        </Fab>
      </motion.div>
    </Box>
  );
}

