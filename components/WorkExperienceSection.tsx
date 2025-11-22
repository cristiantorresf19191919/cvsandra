'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { Work } from '@mui/icons-material';
import { WorkExperience } from '@/types/cv';
import WorkExperienceCard from './WorkExperienceCard';

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
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
              <Work sx={{ color: 'white', fontSize: '2rem' }} />
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
                Work Experience
              </Typography>
            </Box>
          </Box>

          {experiences.map((experience, index) => (
            <WorkExperienceCard
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </Box>
  );
}
