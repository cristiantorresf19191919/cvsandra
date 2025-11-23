'use client';

import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
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
      }}
    >
      <Box sx={{ mb: index < 10 ? 4 : 0 }}>
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
              {experience.role.toUpperCase()}
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
              {experience.startDate} - {experience.endDate}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#4a5568',
                fontSize: '0.875rem',
                lineHeight: 1.7,
              }}
            >
              {experience.companyDescription}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
