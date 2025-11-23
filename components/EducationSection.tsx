'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Education } from '@/types/cv';
import { useLanguage } from '@/contexts/LanguageContext';

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  const { t } = useLanguage();
  
  return (
    <Box
      sx={{
        background: '#1a5f5f',
        py: { xs: 6, md: 8 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
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
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 4,
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
                  background: '#e63946',
                },
              }}
            >
              {t('education')}
            </Typography>

            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${index}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    mb: 3,
                    background: 'white',
                    borderRadius: 2,
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: '#e63946',
                    },
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.05)',
                      transform: 'translateY(-2px)',
                      borderColor: 'rgba(230, 57, 70, 0.2)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: '#e63946',
                        flexShrink: 0,
                        mt: 0.75,
                        boxShadow: '0 2px 8px rgba(230, 57, 70, 0.3)',
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          color: '#1a202c',
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          textTransform: 'uppercase',
                          mb: 1,
                          fontFamily: 'var(--font-inter)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {edu.institution.toUpperCase()}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5, flexWrap: 'wrap' }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#1a202c',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                          }}
                        >
                          {edu.degree}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#e63946',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            background: '#fee2e2',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                          }}
                        >
                          {edu.startDate} - {edu.endDate}
                        </Typography>
                      </Box>
                      {edu.thesis && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#4a5568',
                            fontSize: '0.9375rem',
                            lineHeight: 1.8,
                            fontWeight: 400,
                          }}
                        >
                          {edu.thesis}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
