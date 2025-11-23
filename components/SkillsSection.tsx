'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Skill } from '@/types/cv';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
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
              Personal Skills
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
                <Box sx={{ mb: index < skills.length - 1 ? 4 : 0 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#1a202c',
                      fontSize: '0.9375rem',
                      mb: 1.5,
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        height: '12px',
                        background: '#e5e7eb',
                        borderRadius: 0,
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: index * 0.1 + 0.3,
                        }}
                        style={{
                          height: '100%',
                          background: '#e63946', // Red fill
                          borderRadius: 0,
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
