'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Build } from '@mui/icons-material';
import { Skill } from '@/types/cv';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
        py: { xs: 6, md: 8 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2.5, 
              mb: { xs: 5, md: 7 },
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                flexShrink: 0,
              }}
            >
              <Build sx={{ color: 'white', fontSize: '2rem' }} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#1a202c',
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  letterSpacing: '0.05em',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -12,
                    left: 0,
                    width: '80px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 2,
                  },
                }}
              >
                Skills
              </Typography>
            </Box>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 4,
              background: 'white',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)',
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Box sx={{ mb: index < skills.length - 1 ? 4 : 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: '#1a202c',
                        fontSize: { xs: '1rem', md: '1.125rem' },
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: '#667eea',
                        fontSize: '0.9375rem',
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        height: '10px',
                        background: '#f3f4f6',
                        borderRadius: 10,
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
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: 10,
                          boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
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

