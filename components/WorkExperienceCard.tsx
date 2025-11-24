'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';
import { WorkExperience } from '@/types/cv';
import { useColors } from '@/contexts/ColorContext';
import { useTemplateStyles } from '@/hooks/useTemplateStyles';

interface WorkExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

export default function WorkExperienceCard({ experience, index }: WorkExperienceCardProps) {
  const { secondaryColor } = useColors();
  const styles = useTemplateStyles();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: styles.cardPadding,
          mb: styles.cardGap,
          background: styles.cardBackground,
          borderRadius: styles.cardBorderRadius,
          border: styles.cardBorder === 'none' ? 'none' : styles.cardBorder,
          boxShadow: styles.cardShadow,
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          position: 'relative',
          overflow: 'visible',
          '&:hover': {
            transform: styles.hoverEffect,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: styles.accentLineHeight,
            background: `linear-gradient(90deg, ${secondaryColor}, ${secondaryColor}88)`,
            opacity: styles.template === 'compact' ? 1 : 0,
            transition: 'opacity 0.4s ease',
            borderRadius: styles.template === 'creative' ? `${styles.cardBorderRadius}px ${styles.cardBorderRadius}px 0 0` : 0,
          },
          '&:hover::after': {
            opacity: 1,
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, sm: 3 }, alignItems: { xs: 'flex-start', sm: 'baseline' }, flexWrap: 'wrap' }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                color: '#1a202c',
                fontSize: styles.headingFontSize,
                textTransform: styles.headingTransform,
                fontFamily: 'var(--font-inter)',
                letterSpacing: styles.headingLetterSpacing,
                lineHeight: 1.3,
                flex: { sm: '1 1 auto' },
                minWidth: 0,
              }}
            >
              {styles.headingTransform === 'uppercase' 
                ? experience.role.toUpperCase() 
                : styles.headingTransform === 'capitalize'
                ? experience.role
                : experience.role}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: secondaryColor,
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {experience.startDate} - {experience.endDate}
            </Typography>
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: secondaryColor,
              fontWeight: 500,
              fontSize: '0.9375rem',
              mb: 0.5,
              letterSpacing: '0.02em',
            }}
          >
            {experience.company}
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: '#4a5568',
              fontSize: styles.bodyFontSize,
              lineHeight: styles.bodyLineHeight,
              fontWeight: 400,
              letterSpacing: '0.01em',
              maxWidth: '85ch',
            }}
          >
            {experience.companyDescription}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
}
