'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { WorkExperience } from '@/types/cv';
import WorkExperienceCard from './WorkExperienceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColors } from '@/contexts/ColorContext';
import { useTemplateStyles } from '@/hooks/useTemplateStyles';

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  const { t } = useLanguage();
  const { primaryColor, secondaryColor } = useColors();
  const styles = useTemplateStyles();
  
  return (
    <Box
      sx={{
        background: styles.sectionBackground === 'solid' ? primaryColor : styles.sectionBackground === 'alternating' ? primaryColor : 'transparent',
        py: styles.containerPadding,
        position: 'relative',
        transition: 'background 0.3s ease',
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
              p: styles.cardPadding,
              background: styles.cardBackground,
              borderRadius: styles.cardBorderRadius,
              boxShadow: styles.cardShadow,
              border: styles.cardBorder === 'none' ? 'none' : styles.cardBorder,
              mb: styles.cardGap,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#1a202c',
                textTransform: styles.headingTransform,
                fontSize: styles.headingFontSize,
                letterSpacing: styles.headingLetterSpacing,
                fontFamily: 'var(--font-inter)',
                position: 'relative',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: styles.accentLineWidth,
                  height: styles.accentLineHeight,
                  background: secondaryColor,
                  borderRadius: styles.template === 'creative' ? 2 : 0,
                },
              }}
            >
              {t('workExperience')}
            </Typography>

            {experiences.map((experience, index) => (
              <WorkExperienceCard
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
