'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Education } from '@/types/cv';

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
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
              borderRadius: 0,
              boxShadow: 'none',
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
              }}
            >
              Education
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
                <Box sx={{ mb: index < education.length - 1 ? 4 : 0 }}>
                  <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#e63946', // Red bullet
                        flexShrink: 0,
                        mt: 0.5,
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
                          mb: 0.5,
                          fontFamily: 'var(--font-inter)',
                        }}
                      >
                        {edu.institution.toUpperCase()}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#1a202c',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          mb: 0.5,
                        }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#1a202c',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          mb: 1,
                        }}
                      >
                        {edu.startDate} - {edu.endDate}
                      </Typography>
                      {edu.thesis && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#4a5568',
                            fontSize: '0.875rem',
                            lineHeight: 1.7,
                          }}
                        >
                          {edu.thesis}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
