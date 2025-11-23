'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper } from '@mui/material';
import { WorkExperience } from '@/types/cv';
import WorkExperienceCard from './WorkExperienceCard';

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
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
              mb: 4,
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
              Work Experience
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
