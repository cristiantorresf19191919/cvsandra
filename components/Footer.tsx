'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Divider } from '@mui/material';

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
          background: '#1a202c',
          color: 'white',
          py: 4,
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Divider 
            sx={{ 
              mb: 4, 
              borderColor: 'rgba(255,255,255,0.1)',
            }} 
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                fontWeight: 400,
              }}
            >
              © {new Date().getFullYear()} Professional CV
            </Typography>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}


