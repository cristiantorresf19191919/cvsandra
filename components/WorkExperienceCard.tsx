'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';
import { Business, LocationOn, CalendarToday } from '@mui/icons-material';
import { WorkExperience } from '@/types/cv';

interface WorkExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

export default function WorkExperienceCard({ experience, index }: WorkExperienceCardProps) {
  return (
    <motion.div
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
            p: { xs: 4, md: 5 },
            mb: 4,
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
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              mb: 3, 
              flexWrap: 'wrap', 
              gap: 3,
            }}
          >
            <Box sx={{ flex: 1, minWidth: '280px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 2,
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Business sx={{ color: 'white', fontSize: '1.25rem' }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#1a202c',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    letterSpacing: '-0.01em',
                  }}
                >
                  {experience.company}
                </Typography>
              </Box>
              
              <Typography
                variant="body2"
                sx={{
                  fontStyle: 'italic',
                  color: '#6b7280',
                  mb: 2.5,
                  ml: 6.5,
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                }}
              >
                {experience.companyDescription}
              </Typography>
              
              <Box sx={{ ml: 6.5 }}>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontWeight: 600,
                    color: '#667eea',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    mb: 0.5,
                  }}
                >
                  {experience.role}
                </Typography>
              </Box>
            </Box>
            
            <Box 
              sx={{ 
                textAlign: { xs: 'left', md: 'right' }, 
                ml: { xs: 6.5, md: 0 },
                minWidth: { xs: '100%', md: 'auto' },
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 1.5, 
                  justifyContent: { xs: 'flex-start', md: 'flex-end' },
                }}
              >
                <CalendarToday sx={{ fontSize: '1rem', color: '#667eea', opacity: 0.8 }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#4a5568', 
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                  }}
                >
                  {experience.startDate} - {experience.endDate}
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  justifyContent: { xs: 'flex-start', md: 'flex-end' },
                }}
              >
                <LocationOn sx={{ fontSize: '1rem', color: '#667eea', opacity: 0.8 }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#6b7280',
                    fontSize: '0.9375rem',
                  }}
                >
                  {experience.location}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ ml: { xs: 0, md: 6.5 }, mt: 4, pl: { xs: 2.5, md: 0 } }}>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                '& li': {
                  position: 'relative',
                  pl: { xs: 3, md: 3.5 },
                  mb: 2,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '0.6em',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 2px 4px rgba(102, 126, 234, 0.3)',
                  },
                },
              }}
            >
              {experience.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#374151',
                      lineHeight: 1.8,
                      fontSize: { xs: '0.9375rem', md: '1rem' },
                      fontWeight: 400,
                    }}
                  >
                    {responsibility}
                  </Typography>
                </motion.li>
              ))}
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </motion.div>
  );
}
