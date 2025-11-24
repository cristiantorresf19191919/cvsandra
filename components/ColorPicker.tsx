'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  IconButton, 
  Typography, 
  Button,
  Drawer,
  Slider,
  TextField,
  Divider,
  Chip,
} from '@mui/material';
import { Palette, Close, Refresh, Check } from '@mui/icons-material';
import { useColors } from '@/contexts/ColorContext';

export default function ColorPicker() {
  const { primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor, resetColors } = useColors();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  };

  const primaryRgb = hexToRgb(primaryColor);
  const secondaryRgb = hexToRgb(secondaryColor);

  const presetColors = [
    // Original & Classic
    { primary: '#1a5f5f', secondary: '#e63946', name: 'Original', category: 'Classic' },
    { primary: '#2c3e50', secondary: '#e74c3c', name: 'Dark Blue', category: 'Classic' },
    { primary: '#34495e', secondary: '#f39c12', name: 'Amber', category: 'Classic' },
    { primary: '#1e3a5f', secondary: '#3498db', name: 'Ocean Blue', category: 'Classic' },
    { primary: '#2d5016', secondary: '#27ae60', name: 'Forest', category: 'Classic' },
    { primary: '#5d4037', secondary: '#ff6f00', name: 'Brown', category: 'Classic' },
    { primary: '#4a148c', secondary: '#e91e63', name: 'Purple', category: 'Classic' },
    { primary: '#b71c1c', secondary: '#ff9800', name: 'Red Orange', category: 'Classic' },
    
    // Modern & Vibrant
    { primary: '#0d47a1', secondary: '#00bcd4', name: 'Deep Sky', category: 'Modern' },
    { primary: '#1a237e', secondary: '#ff4081', name: 'Neon Pink', category: 'Modern' },
    { primary: '#004d40', secondary: '#00e676', name: 'Emerald', category: 'Modern' },
    { primary: '#3e2723', secondary: '#ff6d00', name: 'Burnt Orange', category: 'Modern' },
    { primary: '#1b5e20', secondary: '#76ff03', name: 'Lime', category: 'Modern' },
    { primary: '#311b92', secondary: '#7c4dff', name: 'Violet', category: 'Modern' },
    { primary: '#b71c1c', secondary: '#ff5252', name: 'Crimson', category: 'Modern' },
    { primary: '#01579b', secondary: '#40c4ff', name: 'Azure', category: 'Modern' },
    
    // Elegant & Sophisticated
    { primary: '#263238', secondary: '#ffa726', name: 'Charcoal', category: 'Elegant' },
    { primary: '#1a1a2e', secondary: '#16213e', name: 'Midnight', category: 'Elegant' },
    { primary: '#2c1810', secondary: '#d4a574', name: 'Bronze', category: 'Elegant' },
    { primary: '#1c2833', secondary: '#f4d03f', name: 'Gold', category: 'Elegant' },
    { primary: '#212121', secondary: '#9e9e9e', name: 'Monochrome', category: 'Elegant' },
    { primary: '#1a252f', secondary: '#64b5f6', name: 'Steel Blue', category: 'Elegant' },
    { primary: '#2c2c2c', secondary: '#ffb74d', name: 'Amber Dark', category: 'Elegant' },
    { primary: '#1b2631', secondary: '#81c784', name: 'Sage', category: 'Elegant' },
    
    // Creative & Bold
    { primary: '#6a1b9a', secondary: '#f50057', name: 'Magenta', category: 'Creative' },
    { primary: '#c2185b', secondary: '#ffc107', name: 'Pink Gold', category: 'Creative' },
    { primary: '#00796b', secondary: '#ff6f00', name: 'Teal Orange', category: 'Creative' },
    { primary: '#5e35b1', secondary: '#00acc1', name: 'Purple Cyan', category: 'Creative' },
    { primary: '#d32f2f', secondary: '#388e3c', name: 'Red Green', category: 'Creative' },
    { primary: '#1976d2', secondary: '#f57c00', name: 'Blue Orange', category: 'Creative' },
    { primary: '#7b1fa2', secondary: '#00bcd4', name: 'Purple Sky', category: 'Creative' },
    { primary: '#c62828', secondary: '#ffa000', name: 'Fire', category: 'Creative' },
    
    // Nature & Earth
    { primary: '#1b5e20', secondary: '#8bc34a', name: 'Green', category: 'Nature' },
    { primary: '#3e2723', secondary: '#795548', name: 'Earth', category: 'Nature' },
    { primary: '#01579b', secondary: '#0288d1', name: 'Ocean', category: 'Nature' },
    { primary: '#33691e', secondary: '#689f38', name: 'Forest Green', category: 'Nature' },
    { primary: '#1a237e', secondary: '#3f51b5', name: 'Deep Blue', category: 'Nature' },
    { primary: '#4a148c', secondary: '#7b1fa2', name: 'Lavender', category: 'Nature' },
    
    // Sunset & Warm
    { primary: '#e65100', secondary: '#ff9800', name: 'Sunset', category: 'Warm' },
    { primary: '#bf360c', secondary: '#ff6f00', name: 'Autumn', category: 'Warm' },
    { primary: '#d84315', secondary: '#ffab40', name: 'Orange', category: 'Warm' },
    { primary: '#e64a19', secondary: '#ffcc02', name: 'Golden Hour', category: 'Warm' },
    
    // Cool & Calm
    { primary: '#0277bd', secondary: '#00acc1', name: 'Cyan', category: 'Cool' },
    { primary: '#1565c0', secondary: '#4fc3f7', name: 'Sky Blue', category: 'Cool' },
    { primary: '#0d47a1', secondary: '#29b6f6', name: 'Ice Blue', category: 'Cool' },
    { primary: '#1a237e', secondary: '#5c6bc0', name: 'Indigo', category: 'Cool' },
  ];

  const categories = Array.from(new Set(presetColors.map(p => p.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredColors = selectedCategory === 'All' 
    ? presetColors 
    : presetColors.filter(p => p.category === selectedCategory);

  const isPresetSelected = (preset: typeof presetColors[0]) => {
    return preset.primary === primaryColor && preset.secondary === secondaryColor;
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
          color: 'white',
          width: { xs: 48, md: 56 },
          height: { xs: 48, md: 56 },
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 6px 25px rgba(0,0,0,0.4)',
          },
          transition: 'all 0.3s ease',
        }}
        aria-label="Cambiar colores"
      >
        <Palette sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 480, md: 520 },
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
              p: 3,
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              background: `linear-gradient(135deg, ${primaryColor}08 0%, ${secondaryColor}08 100%)`,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a202c' }}>
                Personalizar Colores
              </Typography>
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
            
            {/* Category Filter */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip
                label="All"
                onClick={() => setSelectedCategory('All')}
                variant={selectedCategory === 'All' ? 'filled' : 'outlined'}
                sx={{
                  background: selectedCategory === 'All' 
                    ? `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
                    : 'transparent',
                  color: selectedCategory === 'All' ? 'white' : '#6b7280',
                  borderColor: selectedCategory === 'All' ? 'transparent' : '#e5e7eb',
                  fontWeight: 600,
                  '&:hover': {
                    background: selectedCategory === 'All' 
                      ? `linear-gradient(135deg, ${primaryColor}dd 0%, ${secondaryColor}dd 100%)`
                      : 'rgba(0,0,0,0.05)',
                  },
                }}
              />
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  sx={{
                    background: selectedCategory === category 
                      ? `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
                      : 'transparent',
                    color: selectedCategory === category ? 'white' : '#6b7280',
                    borderColor: selectedCategory === category ? 'transparent' : '#e5e7eb',
                    fontWeight: 600,
                    '&:hover': {
                      background: selectedCategory === category 
                        ? `linear-gradient(135deg, ${primaryColor}dd 0%, ${secondaryColor}dd 100%)`
                        : 'rgba(0,0,0,0.05)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Scrollable Content */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 3,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0,0,0,0.05)',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '4px',
                '&:hover': {
                  background: 'rgba(0,0,0,0.3)',
                },
              },
            }}
          >
            {/* Custom Color Pickers */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: '#1a202c' }}>
                Colores Personalizados
              </Typography>
              
              {/* Primary Color */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#4a5568' }}>
                  Color Primario (Fondo)
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 2,
                      background: primaryColor,
                      border: '3px solid #e5e7eb',
                      boxShadow: `0 4px 12px ${primaryColor}40`,
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <TextField
                    size="small"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    sx={{ flex: 1 }}
                    inputProps={{ style: { textTransform: 'uppercase', fontWeight: 600 } }}
                  />
                </Box>
                <Box sx={{ px: 1 }}>
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280', fontWeight: 500 }}>
                    Rojo: {primaryRgb.r}
                  </Typography>
                  <Slider
                    value={primaryRgb.r}
                    onChange={(_, value) => {
                      const newColor = rgbToHex(value as number, primaryRgb.g, primaryRgb.b);
                      setPrimaryColor(newColor);
                    }}
                    min={0}
                    max={255}
                    sx={{ color: '#e63946', mb: 2 }}
                  />
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280', fontWeight: 500 }}>
                    Verde: {primaryRgb.g}
                  </Typography>
                  <Slider
                    value={primaryRgb.g}
                    onChange={(_, value) => {
                      const newColor = rgbToHex(primaryRgb.r, value as number, primaryRgb.b);
                      setPrimaryColor(newColor);
                    }}
                    min={0}
                    max={255}
                    sx={{ color: '#27ae60', mb: 2 }}
                  />
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280', fontWeight: 500 }}>
                    Azul: {primaryRgb.b}
                  </Typography>
                  <Slider
                    value={primaryRgb.b}
                    onChange={(_, value) => {
                      const newColor = rgbToHex(primaryRgb.r, primaryRgb.g, value as number);
                      setPrimaryColor(newColor);
                    }}
                    min={0}
                    max={255}
                    sx={{ color: '#3498db' }}
                  />
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Secondary Color */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#4a5568' }}>
                  Color Secundario (Acentos)
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 2,
                      background: secondaryColor,
                      border: '3px solid #e5e7eb',
                      boxShadow: `0 4px 12px ${secondaryColor}40`,
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <TextField
                    size="small"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    sx={{ flex: 1 }}
                    inputProps={{ style: { textTransform: 'uppercase', fontWeight: 600 } }}
                  />
                </Box>
                <Box sx={{ px: 1 }}>
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280', fontWeight: 500 }}>
                    Rojo: {secondaryRgb.r}
                  </Typography>
                  <Slider
                    value={secondaryRgb.r}
                    onChange={(_, value) => {
                      const newColor = rgbToHex(value as number, secondaryRgb.g, secondaryRgb.b);
                      setSecondaryColor(newColor);
                    }}
                    min={0}
                    max={255}
                    sx={{ color: '#e63946', mb: 2 }}
                  />
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280', fontWeight: 500 }}>
                    Verde: {secondaryRgb.g}
                  </Typography>
                  <Slider
                    value={secondaryRgb.g}
                    onChange={(_, value) => {
                      const newColor = rgbToHex(secondaryRgb.r, value as number, secondaryRgb.b);
                      setSecondaryColor(newColor);
                    }}
                    min={0}
                    max={255}
                    sx={{ color: '#27ae60', mb: 2 }}
                  />
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280', fontWeight: 500 }}>
                    Azul: {secondaryRgb.b}
                  </Typography>
                  <Slider
                    value={secondaryRgb.b}
                    onChange={(_, value) => {
                      const newColor = rgbToHex(secondaryRgb.r, secondaryRgb.g, value as number);
                      setSecondaryColor(newColor);
                    }}
                    min={0}
                    max={255}
                    sx={{ color: '#3498db' }}
                  />
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Preset Colors */}
            <Box>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: '#1a202c' }}>
                Combinaciones Predefinidas
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                {filteredColors.map((preset, index) => {
                  const isSelected = isPresetSelected(preset);
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Box
                        onClick={() => {
                          setPrimaryColor(preset.primary);
                          setSecondaryColor(preset.secondary);
                        }}
                        sx={{
                          cursor: 'pointer',
                          p: 2,
                          borderRadius: 2,
                          border: `2px solid ${isSelected ? preset.secondary : '#e5e7eb'}`,
                          background: isSelected
                            ? `linear-gradient(135deg, ${preset.primary}08 0%, ${preset.secondary}08 100%)`
                            : 'white',
                          transition: 'all 0.2s ease',
                          position: 'relative',
                          '&:hover': {
                            borderColor: preset.secondary,
                            boxShadow: `0 4px 16px ${preset.secondary}40`,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {isSelected && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${preset.primary} 0%, ${preset.secondary} 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: `0 2px 8px ${preset.secondary}66`,
                            }}
                          >
                            <Check sx={{ fontSize: 16, color: 'white' }} />
                          </Box>
                        )}
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 0.5,
                            mb: 1.5,
                            borderRadius: 1,
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            sx={{
                              flex: 1,
                              height: 40,
                              background: preset.primary,
                              boxShadow: `inset 0 0 10px ${preset.primary}80`,
                            }}
                          />
                          <Box
                            sx={{
                              flex: 1,
                              height: 40,
                              background: preset.secondary,
                              boxShadow: `inset 0 0 10px ${preset.secondary}80`,
                            }}
                          />
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a202c', mb: 0.5 }}>
                          {preset.name}
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#6b7280' }}>
                          {preset.category}
                        </Typography>
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>
            </Box>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              p: 3,
              borderTop: '1px solid rgba(0,0,0,0.08)',
              background: 'rgba(249,250,251,0.98)',
            }}
          >
            <Button
              onClick={() => {
                resetColors();
              }}
              startIcon={<Refresh />}
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#e5e7eb',
                color: '#6b7280',
                fontWeight: 600,
                py: 1.5,
                '&:hover': {
                  borderColor: '#d1d5db',
                  background: '#f9fafb',
                },
              }}
            >
              Restaurar Colores Originales
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

