'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';
import { WorkExperience } from '@/types/cv';
import { useColors } from '@/contexts/ColorContext';

interface WorkExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

export default function WorkExperienceCard({ experience, index }: WorkExperienceCardProps) {
  const { secondaryColor } = useColors();
  
  return (
    <motion.div
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
                      background: secondaryColor,
          },
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.05)',
            transform: 'translateY(-2px)',
                        borderColor: `${secondaryColor}33`,
          },
        }}
      >
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
          <Box
            sx={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
                      background: secondaryColor,
              flexShrink: 0,
              mt: 0.75,
                        boxShadow: `0 2px 8px ${secondaryColor}4d`,
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
              {experience.role.toUpperCase()}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Typography
                variant="body2"
                sx={{
                  color: secondaryColor,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  background: `${secondaryColor}15`,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                {experience.startDate} - {experience.endDate}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#6b7280',
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                }}
              >
                {experience.company}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: '#4a5568',
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              {experience.companyDescription}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
}
