'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Education } from '@/types/cv';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColors } from '@/contexts/ColorContext';
import { useTemplateStyles } from '@/hooks/useTemplateStyles';

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
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
              border: styles.cardBorder,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: styles.hoverEffect,
                boxShadow: styles.cardStyle === 'elevated' 
                  ? '0 4px 16px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)'
                  : styles.cardStyle === 'gradient'
                  ? '0 12px 40px rgba(0,0,0,0.15)'
                  : '0 2px 8px rgba(0,0,0,0.1)',
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
                    p: styles.cardPadding,
                    mb: styles.cardGap,
                    background: styles.cardBackground,
                    borderRadius: styles.cardBorderRadius,
                    border: styles.cardBorder,
                    boxShadow: styles.cardShadow,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: styles.template === 'compact' ? '2px' : '4px',
                      background: secondaryColor,
                    },
                    '&:hover': {
                      transform: styles.hoverEffect,
                      boxShadow: styles.cardStyle === 'elevated' 
                        ? '0 4px 16px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.05)'
                        : styles.cardStyle === 'gradient'
                        ? '0 12px 40px rgba(0,0,0,0.15)'
                        : '0 2px 8px rgba(0,0,0,0.1)',
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
                          fontSize: styles.headingFontSize,
                          textTransform: styles.headingTransform,
                          mb: 1,
                          fontFamily: 'var(--font-inter)',
                          letterSpacing: styles.headingLetterSpacing,
                        }}
                      >
                        {styles.headingTransform === 'uppercase' 
                          ? edu.institution.toUpperCase() 
                          : styles.headingTransform === 'capitalize'
                          ? edu.institution
                          : edu.institution}
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
                            color: secondaryColor,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            background: `${secondaryColor}15`,
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
                            fontSize: styles.bodyFontSize,
                            lineHeight: styles.bodyLineHeight,
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
