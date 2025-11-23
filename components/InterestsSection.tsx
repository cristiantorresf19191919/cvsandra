'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Favorite, Nature, Psychology, MenuBook } from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';
import { Interest } from '@/types/cv';

interface InterestsSectionProps {
  interests: Interest[];
}

const interestIcons: Record<string, SvgIconComponent> = {
  'Science Communication': MenuBook,
  'Environmental Journalism': Nature,
  'Digital Media': Psychology,
  'Education': Favorite,
  'Volunteer at Cambridge Science Festival (Oct 2022, Boston)': Favorite,
};

export default function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
        py: { xs: 6, md: 8 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2.5, 
              mb: { xs: 5, md: 7 },
            }}
          >
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
              <Favorite sx={{ color: 'white', fontSize: '2rem' }} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#1a202c',
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  letterSpacing: '0.05em',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -12,
                    left: 0,
                    width: '80px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 2,
                  },
                }}
              >
                Other Interests
              </Typography>
            </Box>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 4,
              background: 'white',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
                gap: { xs: 3, md: 4 },
              }}
            >
              {interests.map((interest, index) => {
                const IconComponent = interestIcons[interest.name] || Favorite;
                return (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -4 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2,
                          p: 3,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                          border: '1px solid #e5e7eb',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
                            borderColor: '#667eea',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.15)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '50%',
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                          }}
                        >
                          <IconComponent sx={{ color: 'white', fontSize: '2rem' }} />
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            color: '#1a202c',
                            fontSize: { xs: '0.8125rem', md: '0.9375rem' },
                            textAlign: 'center',
                            lineHeight: 1.4,
                          }}
                        >
                          {interest.name}
                        </Typography>
                      </Box>
                    </motion.div>
                  </motion.div>
                );
              })}
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

