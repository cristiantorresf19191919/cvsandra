'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  IconButton, 
  Typography, 
  Button,
  Drawer,
  Chip,
} from '@mui/material';
import { ViewModule, Close, Refresh, Check, Star } from '@mui/icons-material';
import { useTemplate, TemplateType } from '@/contexts/TemplateContext';
import { useColors } from '@/contexts/ColorContext';

const templates: Array<{
  id: TemplateType;
  name: string;
  description: string;
  features: string[];
  recommended?: boolean;
}> = [
  {
    id: 'compact',
    name: 'Compact',
    description: 'Perfecto para mucha información en una sola página',
    features: ['Minimalista', 'Espacios reducidos'],
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Diseño clásico y refinado con estilo sofisticado',
    features: ['Espaciado moderado', 'Sombras sutiles'],
    recommended: true,
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Estilo audaz y contemporáneo con elementos dinámicos',
    features: ['Diseño espacioso', 'Sombras pronunciadas'],
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Diseño artístico y expresivo con estilo único',
    features: ['Efectos de gradiente', 'Acentos artísticos'],
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Diseño tradicional que nunca pasa de moda',
    features: ['Profesional', 'Atemporal'],
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    description: 'Diseño de dos columnas con integración de foto',
    features: ['Dos columnas', 'Apto para foto'],
  },
  {
    id: 'timeline',
    name: 'Timeline',
    description: 'Línea de tiempo visual para progresión profesional',
    features: ['Flujo cronológico', 'Crecimiento profesional'],
  },
  {
    id: 'stylish',
    name: 'Stylish',
    description: 'Plantilla compacta de una página enfocada en habilidades',
    features: ['Diseño compacto', 'Enfoque en habilidades'],
  },
  {
    id: 'polished',
    name: 'Polished',
    description: 'Diseño profesional refinado para entornos empresariales',
    features: ['Profesional', 'Listo para negocios'],
  },
  {
    id: 'ivy-league',
    name: 'Ivy League',
    description: 'Plantilla inspirada en Harvard con aspecto tradicional refinado',
    features: ['Tradicional', 'Académico'],
  },
  {
    id: 'double-column',
    name: 'Double Column',
    description: 'Diseño de dos columnas que equilibra habilidades y experiencia',
    features: ['Dos columnas', 'Diseño equilibrado'],
  },
  {
    id: 'high-performer',
    name: 'High Performer',
    description: 'Plantilla enfocada en resultados con presentación estructurada',
    features: ['Basado en datos', 'Estructurado'],
  },
];

// Component to render a real CV preview thumbnail
function CVPreview({ templateId, primaryColor, secondaryColor }: { templateId: TemplateType; primaryColor: string; secondaryColor: string }) {
  type PreviewStyleType = {
    header: {
      height: string;
      borderRadius: number | string;
      border?: string;
      boxShadow?: string;
      background?: string;
    };
    section: {
      height: string;
      borderRadius: number | string;
      mb: string;
      borderLeft?: string;
      display?: string;
      gap?: string;
    };
    card: {
      height: string;
      borderRadius: number | string;
      border?: string;
      boxShadow?: string;
      background?: string;
      mb: string;
      ml?: string;
      flex?: number;
    };
  };

  const previewStyles: Record<TemplateType, PreviewStyleType> = {
    compact: {
      header: { height: '20px', borderRadius: 0, border: `1px solid ${primaryColor}40` },
      section: { height: '12px', borderRadius: 0, mb: '3px' },
      card: { height: '10px', borderRadius: 0, border: `1px solid #e5e7eb`, mb: '2px' },
    },
    elegant: {
      header: { height: '22px', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
      section: { height: '14px', borderRadius: '2px', mb: '4px' },
      card: { height: '12px', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.08)', mb: '3px' },
    },
    modern: {
      header: { height: '24px', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.12)' },
      section: { height: '16px', borderRadius: '4px', mb: '5px' },
      card: { height: '14px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', mb: '4px' },
    },
    creative: {
      header: { height: '26px', borderRadius: '6px', background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)` },
      section: { height: '18px', borderRadius: '6px', mb: '6px' },
      card: { height: '16px', borderRadius: '6px', background: `linear-gradient(135deg, ${primaryColor}08 0%, ${secondaryColor}08 100%)`, mb: '5px' },
    },
    classic: {
      header: { height: '20px', borderRadius: 0, border: `1px solid #d1d5db` },
      section: { height: '12px', borderRadius: 0, mb: '3px' },
      card: { height: '10px', borderRadius: 0, border: `1px solid #e5e7eb`, mb: '2px' },
    },
    contemporary: {
      header: { height: '22px', borderRadius: '3px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
      section: { height: '14px', borderRadius: '3px', mb: '4px' },
      card: { height: '12px', borderRadius: '3px', border: `2px solid ${primaryColor}30`, mb: '3px' },
    },
    timeline: {
      header: { height: '20px', borderRadius: 0 },
      section: { height: '12px', borderRadius: 0, mb: '3px', borderLeft: `3px solid ${secondaryColor}` },
      card: { height: '10px', borderRadius: 0, mb: '2px', ml: '8px' },
    },
    stylish: {
      header: { height: '20px', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
      section: { height: '12px', borderRadius: '2px', mb: '3px' },
      card: { height: '10px', borderRadius: '2px', border: `1px solid ${primaryColor}20`, mb: '2px' },
    },
    polished: {
      header: { height: '24px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
      section: { height: '16px', borderRadius: '4px', mb: '5px' },
      card: { height: '14px', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)', mb: '4px' },
    },
    'ivy-league': {
      header: { height: '20px', borderRadius: 0, border: `1px solid #e5e7eb` },
      section: { height: '12px', borderRadius: 0, mb: '3px' },
      card: { height: '10px', borderRadius: 0, border: `1px solid #e5e7eb`, mb: '2px' },
    },
    'double-column': {
      header: { height: '20px', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
      section: { height: '12px', borderRadius: '2px', mb: '3px', display: 'flex', gap: '4px' },
      card: { height: '10px', borderRadius: '2px', border: `1px solid ${primaryColor}25`, mb: '2px', flex: 1 },
    },
    'high-performer': {
      header: { height: '22px', borderRadius: '2px', boxShadow: '0 2px 4px rgba(0,0,0,0.09)' },
      section: { height: '14px', borderRadius: '2px', mb: '4px' },
      card: { height: '12px', borderRadius: '2px', border: `1px solid ${primaryColor}20`, mb: '3px' },
    },
  };

  const style = previewStyles[templateId] || previewStyles.elegant;

  return (
    <Box
      sx={{
        width: '100%',
        height: '120px',
        background: 'white',
        borderRadius: 1,
        p: 1.5,
        border: `1px solid ${primaryColor}15`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          background: `linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
          mb: 1.5,
          ...style.header,
        }}
      />
      
      {/* Sections */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {/* Section 1 */}
        <Box
          sx={{
            width: '100%',
            background: `linear-gradient(90deg, ${primaryColor}20 0%, ${secondaryColor}20 100%)`,
            ...style.section,
          }}
        />
        
        {/* Cards */}
        <Box sx={{ pl: templateId === 'timeline' ? 0 : 0 }}>
          <Box
            sx={{
              width: '90%',
              background: '#f3f4f6',
              ...style.card,
            }}
          />
          <Box
            sx={{
              width: '75%',
              background: '#e5e7eb',
              ...style.card,
            }}
          />
        </Box>
        
        {/* Section 2 */}
        <Box
          sx={{
            width: '85%',
            background: `linear-gradient(90deg, ${primaryColor}15 0%, ${secondaryColor}15 100%)`,
            ...style.section,
            mt: 0.5,
          }}
        />
        
        {/* Accent line */}
        <Box
          sx={{
            width: '40px',
            height: '2px',
            background: secondaryColor,
            borderRadius: 1,
            mt: 0.5,
          }}
        />
      </Box>
    </Box>
  );
}

export default function TemplatePicker() {
  const { template, setTemplate, resetTemplate } = useTemplate();
  const { primaryColor, secondaryColor } = useColors();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          background: `linear-gradient(135deg, ${primaryColor}22 0%, ${secondaryColor}22 100%)`,
          color: primaryColor,
          width: { xs: 48, md: 56 },
          height: { xs: 48, md: 56 },
          border: `2px solid ${primaryColor}40`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 6px 25px rgba(0,0,0,0.4)',
            borderColor: primaryColor,
            background: `linear-gradient(135deg, ${primaryColor}33 0%, ${secondaryColor}33 100%)`,
          },
          transition: 'all 0.3s ease',
        }}
        aria-label="Cambiar plantilla"
      >
        <ViewModule sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 520, md: 580 },
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          },
        }}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 100%)',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 4,
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              background: `linear-gradient(135deg, ${primaryColor}08 0%, ${secondaryColor}08 100%)`,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a202c', mb: 1.5, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                  Seleccionar Plantilla
                </Typography>
                <Typography variant="body1" sx={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  Elige el estilo que mejor represente tu CV
                </Typography>
              </Box>
              <IconButton 
                onClick={handleClose} 
                size="small"
                sx={{
                  color: '#6b7280',
                  '&:hover': {
                    background: 'rgba(0,0,0,0.05)',
                  },
                }}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>

          {/* Scrollable Content */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 4,
              position: 'relative',
              '&::-webkit-scrollbar': {
                width: '10px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0,0,0,0.05)',
                borderRadius: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: `linear-gradient(180deg, ${primaryColor}40 0%, ${secondaryColor}40 100%)`,
                borderRadius: '5px',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                '&:hover': {
                  background: `linear-gradient(180deg, ${primaryColor}60 0%, ${secondaryColor}60 100%)`,
                  backgroundClip: 'padding-box',
                },
              },
            }}
          >
            {/* Template Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {templates.map((tpl) => {
                const isSelected = template === tpl.id;
                
                return (
                  <motion.div
                    key={tpl.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: templates.indexOf(tpl) * 0.05 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box
                      onClick={() => {
                        setTemplate(tpl.id);
                        handleClose();
                      }}
                      sx={{
                        cursor: 'pointer',
                        p: 3.5,
                        borderRadius: 3,
                        border: isSelected 
                          ? `3px solid ${primaryColor}` 
                          : `2px solid #e5e7eb`,
                        background: isSelected 
                          ? `linear-gradient(135deg, ${primaryColor}12 0%, ${secondaryColor}12 100%)`
                          : 'white',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'visible',
                        boxShadow: isSelected 
                          ? `0 8px 24px ${primaryColor}40, 0 4px 12px ${primaryColor}20`
                          : '0 2px 8px rgba(0,0,0,0.08)',
                        '&:hover': {
                          borderColor: isSelected ? primaryColor : secondaryColor,
                          boxShadow: isSelected
                            ? `0 12px 32px ${primaryColor}50, 0 6px 16px ${primaryColor}30`
                            : `0 8px 24px ${secondaryColor}30, 0 4px 12px ${secondaryColor}15`,
                          transform: 'translateY(-6px)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: isSelected ? '5px' : '0px',
                          background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                          transition: 'all 0.3s ease',
                          borderRadius: '3px 3px 0 0',
                        },
                      }}
                    >
                      {/* Recommended Badge */}
                      {tpl.recommended && !isSelected && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: 12,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryColor}dd 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            boxShadow: `0 2px 8px ${secondaryColor}50`,
                            zIndex: 2,
                          }}
                        >
                          <Star sx={{ fontSize: 14, color: 'white' }} />
                          <Typography
                            sx={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              color: 'white',
                              letterSpacing: '0.02em',
                            }}
                          >
                            Recomendado
                          </Typography>
                        </Box>
                      )}

                      {/* Selected Badge */}
                      {isSelected && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -10,
                            right: 12,
                            px: 2,
                            py: 0.75,
                            borderRadius: 2.5,
                            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.75,
                            boxShadow: `0 4px 12px ${primaryColor}66`,
                            zIndex: 2,
                          }}
                        >
                          <Check sx={{ fontSize: 16, color: 'white' }} />
                          <Typography
                            sx={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              color: 'white',
                              letterSpacing: '0.02em',
                            }}
                          >
                            Seleccionado
                          </Typography>
                        </Box>
                      )}

                      {/* Template Name */}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          color: isSelected ? primaryColor : '#1a202c',
                          fontSize: '1.25rem',
                          mb: 1.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {tpl.name}
                      </Typography>

                      {/* Description */}
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#6b7280',
                          fontSize: '0.875rem',
                          mb: 2.5,
                          lineHeight: 1.6,
                          minHeight: '2.5em',
                        }}
                      >
                        {tpl.description}
                      </Typography>

                      {/* Real CV Preview */}
                      <Box sx={{ mb: 2.5 }}>
                        <CVPreview 
                          templateId={tpl.id} 
                          primaryColor={primaryColor} 
                          secondaryColor={secondaryColor} 
                        />
                      </Box>

                      {/* Features - Max 2-3 chips */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {tpl.features.slice(0, 3).map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            sx={{
                              height: 26,
                              fontSize: '0.75rem',
                              background: isSelected 
                                ? `linear-gradient(135deg, ${primaryColor}15 0%, ${secondaryColor}15 100%)`
                                : 'rgba(0,0,0,0.04)',
                              color: isSelected ? primaryColor : '#6b7280',
                              border: `1px solid ${isSelected ? primaryColor + '30' : '#e5e7eb'}`,
                              fontWeight: 600,
                              '& .MuiChip-label': {
                                px: 1.5,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                );
              })}
            </Box>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              p: 3,
              borderTop: '2px solid rgba(0,0,0,0.06)',
              background: 'rgba(255,255,255,0.98)',
            }}
          >
            <Button
              onClick={() => {
                resetTemplate();
              }}
              startIcon={<Refresh />}
              variant="text"
              fullWidth
              sx={{
                color: '#6b7280',
                fontWeight: 500,
                py: 1,
                fontSize: '0.875rem',
                textTransform: 'none',
                '&:hover': {
                  background: 'rgba(0,0,0,0.04)',
                  color: '#4b5563',
                },
              }}
            >
              Restaurar plantilla original
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

