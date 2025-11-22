'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';

interface BioSectionProps {
  bio: string;
}

export default function BioSection({ bio }: BioSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            background: 'white',
            borderRadius: 4,
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 10px 25px rgba(0,0,0,0.04)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                flexShrink: 0,
              }}
            >
              <Person sx={{ color: 'white', fontSize: '2rem' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: '#1a202c',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 2,
                  },
                }}
              >
                Professional Bio
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.85,
                  color: '#4a5568',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}
              >
                {bio}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}
