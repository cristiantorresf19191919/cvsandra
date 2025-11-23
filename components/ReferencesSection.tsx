'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { ContactPhone } from '@mui/icons-material';
import { Reference } from '@/types/cv';

interface ReferencesSectionProps {
  references: Reference[];
}

export default function ReferencesSection({ references }: ReferencesSectionProps) {
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
              <ContactPhone sx={{ color: 'white', fontSize: '2rem' }} />
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
                References
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {references.map((ref, index) => (
              <motion.div
                key={`${ref.name}-${index}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: 4,
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
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
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.12), 0 12px 40px rgba(0,0,0,0.08)',
                        borderColor: '#cbd5e0',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '50%',
                          p: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ContactPhone sx={{ color: 'white', fontSize: '1.25rem' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            color: '#1a202c',
                            fontSize: { xs: '1.125rem', md: '1.25rem' },
                            letterSpacing: '-0.01em',
                            mb: 1,
                          }}
                        >
                          {ref.name}
                        </Typography>
                        {ref.position && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#6b7280',
                              fontSize: '0.9375rem',
                              lineHeight: 1.6,
                              mb: 1.5,
                            }}
                          >
                            {ref.position}
                          </Typography>
                        )}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#667eea',
                              fontWeight: 600,
                              fontSize: '0.9375rem',
                            }}
                          >
                            {ref.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

