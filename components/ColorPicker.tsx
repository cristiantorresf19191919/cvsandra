'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  IconButton, 
  Typography, 
  Button,
  Popover,
  Slider,
  TextField,
} from '@mui/material';
import { Palette, Close, Refresh } from '@mui/icons-material';
import { useColors } from '@/contexts/ColorContext';

export default function ColorPicker() {
  const { primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor, resetColors } = useColors();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
    { primary: '#1a5f5f', secondary: '#e63946', name: 'Original' },
    { primary: '#2c3e50', secondary: '#e74c3c', name: 'Dark Blue' },
    { primary: '#34495e', secondary: '#f39c12', name: 'Amber' },
    { primary: '#1e3a5f', secondary: '#3498db', name: 'Blue' },
    { primary: '#2d5016', secondary: '#27ae60', name: 'Green' },
    { primary: '#5d4037', secondary: '#ff6f00', name: 'Brown' },
    { primary: '#4a148c', secondary: '#e91e63', name: 'Purple' },
    { primary: '#b71c1c', secondary: '#ff9800', name: 'Red Orange' },
  ];

  return (
    <>
      <IconButton
        onClick={handleClick}
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

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            p: 3,
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            maxWidth: 400,
            background: 'white',
          },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a202c' }}>
              Personalizar Colores
            </Typography>
            <IconButton onClick={handleClose} size="small">
              <Close />
            </IconButton>
          </Box>

          {/* Color Primario */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#4a5568' }}>
              Color Primario (Fondo)
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  background: primaryColor,
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
              <TextField
                size="small"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                sx={{ flex: 1 }}
                inputProps={{ style: { textTransform: 'uppercase' } }}
              />
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280' }}>
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
              <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280' }}>
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
              <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280' }}>
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

          {/* Color Secundario */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#4a5568' }}>
              Color Secundario (Acentos)
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  background: secondaryColor,
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
              <TextField
                size="small"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                sx={{ flex: 1 }}
                inputProps={{ style: { textTransform: 'uppercase' } }}
              />
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280' }}>
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
              <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280' }}>
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
              <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6b7280' }}>
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

          {/* Preset Colors */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#4a5568' }}>
              Colores Predefinidos
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1.5 }}>
              {presetColors.map((preset, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    onClick={() => {
                      setPrimaryColor(preset.primary);
                      setSecondaryColor(preset.secondary);
                    }}
                    sx={{
                      cursor: 'pointer',
                      p: 1.5,
                      borderRadius: 2,
                      border: '2px solid #e5e7eb',
                      background: 'white',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: preset.secondary,
                        boxShadow: `0 4px 12px ${preset.secondary}40`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 0.5,
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          flex: 1,
                          height: 30,
                          borderRadius: 1,
                          background: preset.primary,
                        }}
                      />
                      <Box
                        sx={{
                          flex: 1,
                          height: 30,
                          borderRadius: 1,
                          background: preset.secondary,
                        }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#6b7280' }}>
                      {preset.name}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Reset Button */}
          <Button
            onClick={() => {
              resetColors();
              handleClose();
            }}
            startIcon={<Refresh />}
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#e5e7eb',
              color: '#6b7280',
              '&:hover': {
                borderColor: '#d1d5db',
                background: '#f9fafb',
              },
            }}
          >
            Restaurar Colores Originales
          </Button>
        </Box>
      </Popover>
    </>
  );
}

