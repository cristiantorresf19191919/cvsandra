'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Skill } from '@/types/cv';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
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
              {t('personalSkills')}
            </Typography>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                }}
              >
                <Box 
                  sx={{ 
                    mb: index < skills.length - 1 ? 4 : 0,
                    p: 2,
                    borderRadius: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: '#f9fafb',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: '#1a202c',
                        fontSize: '0.9375rem',
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: '#e63946',
                        fontSize: '0.875rem',
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        height: '14px',
                        background: '#e5e7eb',
                        borderRadius: 1,
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: index * 0.1 + 0.3,
                          ease: 'easeOut',
                        }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #e63946 0%, #ff4757 100%)',
                          borderRadius: 1,
                          boxShadow: '0 2px 4px rgba(230, 57, 70, 0.3)',
                        }}
                      />
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
