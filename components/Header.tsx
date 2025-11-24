'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { ContactInfo } from '@/types/cv';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColors } from '@/contexts/ColorContext';
import { useTemplateStyles } from '@/hooks/useTemplateStyles';
import ColorPicker from './ColorPicker';
import TemplatePicker from './TemplatePicker';

interface HeaderProps {
  contact: ContactInfo;
}

export default function Header({ contact }: HeaderProps) {
  const { t } = useLanguage();
  const { primaryColor, secondaryColor } = useColors();
  const styles = useTemplateStyles();
  
  const getHeaderDecoration = () => {
    switch (styles.headerStyle) {
      case 'minimal':
        return { display: 'none' };
      case 'bold':
        return {
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
          opacity: 0.2,
        };
      case 'decorative':
        return {
          background: 'linear-gradient(135deg, transparent 0%, transparent 45%, white 45%, white 50%, transparent 50%)',
          opacity: 0.15,
        };
      case 'artistic':
        return {
          background: `radial-gradient(circle at 20% 50%, ${secondaryColor}33 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, ${secondaryColor}22 0%, transparent 50%),
                      linear-gradient(135deg, transparent 0%, white 25%, white 30%, transparent 60%)`,
          opacity: 0.25,
        };
      default:
        return {
          background: 'linear-gradient(135deg, transparent 0%, transparent 45%, white 45%, white 50%, transparent 50%)',
          opacity: 0.15,
        };
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          background: primaryColor,
          color: 'white',
          transition: 'background 0.3s ease',
          py: styles.headerPadding,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            ...getHeaderDecoration(),
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1, minWidth: { xs: '100%', md: 'auto' } }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontSize: styles.template === 'compact' 
                      ? { xs: '2rem', sm: '2.5rem', md: '3rem' }
                      : styles.template === 'modern'
                      ? { xs: '3rem', sm: '4rem', md: '5rem' }
                      : styles.template === 'creative'
                      ? { xs: '3.5rem', sm: '4.5rem', md: '6rem' }
                      : { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    letterSpacing: styles.template === 'compact' ? '-0.01em' : '-0.02em',
                    color: 'white',
                    textTransform: styles.headingTransform === 'uppercase' ? 'uppercase' : 'none',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {styles.headingTransform === 'uppercase' 
                    ? contact.name.toUpperCase() 
                    : styles.headingTransform === 'capitalize'
                    ? contact.name
                    : contact.name}
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontWeight: 400,
                    mb: 4,
                    fontSize: styles.template === 'compact'
                      ? { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                      : styles.template === 'creative'
                      ? { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                      : { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    letterSpacing: styles.template === 'compact' ? '0.05em' : '0.1em',
                    textTransform: styles.headingTransform === 'uppercase' ? 'uppercase' : 'none',
                    color: 'white',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {t('title')}
                </Typography>
                
                {/* Decorative Line Breaker */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      height: '2px',
                      background: `linear-gradient(90deg, transparent 0%, ${secondaryColor} 50%, transparent 100%)`,
                      position: 'relative',
                      transition: 'background 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: secondaryColor,
                        boxShadow: `0 0 0 4px ${secondaryColor}33, 0 0 0 8px ${secondaryColor}1a`,
                        transition: 'all 0.3s ease',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryColor}dd 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 20px ${secondaryColor}66`,
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${secondaryColor}, ${secondaryColor}dd)`,
                        opacity: 0.3,
                        filter: 'blur(8px)',
                        zIndex: -1,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'white',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      flex: 1,
                      height: '2px',
                      background: `linear-gradient(90deg, transparent 0%, ${secondaryColor} 50%, transparent 100%)`,
                      position: 'relative',
                      transition: 'background 0.3s ease',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: '50%',
                        top: '50%',
                        transform: 'translate(50%, -50%)',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: secondaryColor,
                        boxShadow: `0 0 0 4px ${secondaryColor}33, 0 0 0 8px ${secondaryColor}1a`,
                        transition: 'all 0.3s ease',
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Avatar
                sx={{
                  width: { xs: 120, md: 160 },
                  height: { xs: 120, md: 160 },
                  border: '4px solid white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1a5f5f 0%, #2a7f7f 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: 'white',
                  }}
                >
                  {contact.name.charAt(0)}
                </Box>
              </Avatar>
            </motion.div>
          </Box>
          
          {/* Color Picker and Template Picker Buttons */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 16, md: 24 },
              right: { xs: 16, md: 24 },
              display: 'flex',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <TemplatePicker />
            <ColorPicker />
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}
