'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import { useColors } from '@/contexts/ColorContext';
import { useState } from 'react';

export default function Infographic() {
  const { primaryColor, secondaryColor } = useColors(); // Assuming these return hex strings like '#00abc0'
  const [isHovered, setIsHovered] = useState(false);

  // Configuration for layout
  const CENTER_RADIUS = 40;
  const NODE_RADIUS = 22;
  const ORBIT_RADIUS_BASE = 85;
  const ORBIT_RADIUS_HOVER = 100;

  // Simplified, thicker icons for better readability at small sizes
  const nodeIcons = [
    // Digital
    <path key="digital" d="M4 6h16M4 12h16M4 18h10" strokeWidth="2" strokeLinecap="round"/>,
    // Content
    <path key="content" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinejoin="round"/>,
    // Science
    <g key="science">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a10 10 0 0 1 0 20" strokeWidth="2" strokeLinecap="round"/>
    </g>,
    // Media
    <rect key="media" x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/>,
    // Web
    <circle key="web" cx="12" cy="12" r="8" strokeWidth="2"/>,
  ];

  const nodes = [
    { angle: 270, icon: nodeIcons[0], label: 'Digital' }, // Top
    { angle: 342, icon: nodeIcons[1], label: 'Content' },
    { angle: 54, icon: nodeIcons[2], label: 'Science' },
    { angle: 126, icon: nodeIcons[3], label: 'Media' },
    { angle: 198, icon: nodeIcons[4], label: 'Web' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: 20, md: 40 },
        left: { xs: 20, md: 40 },
        zIndex: 999,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box
          sx={{
            width: 320,
            height: 320,
            position: 'relative',
            // This negative margin centers the visual weight relative to the corner
            margin: '-60px 0 0 -60px', 
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 300"
            style={{ overflow: 'visible' }}
          >
            <defs>
              {/* Elegant soft shadow for depth */}
              <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Inner glow for the center node */}
              <radialGradient id="centerGradient">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F0F0F0" />
              </radialGradient>
            </defs>

            {/* --- The Orbit Ring (Subtle Guide) --- */}
            <motion.circle
              cx="150"
              cy="150"
              r={ORBIT_RADIUS_BASE}
              fill="none"
              stroke={secondaryColor}
              strokeWidth="1"
              strokeOpacity="0.15"
              animate={{
                r: isHovered ? ORBIT_RADIUS_HOVER : ORBIT_RADIUS_BASE,
                opacity: isHovered ? 0.3 : 0.1,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* --- Center Hub --- */}
            <g transform="translate(150, 150)">
              {/* Pulsing background aura */}
              <motion.circle
                r={CENTER_RADIUS}
                fill={primaryColor}
                initial={{ opacity: 0 }}
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.15 : 0.05,
                }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
              
              {/* Main Center Circle */}
              <motion.circle
                r={CENTER_RADIUS}
                fill="url(#centerGradient)"
                stroke={secondaryColor}
                strokeWidth="2"
                filter="url(#soft-shadow)"
                whileHover={{ scale: 1.05 }}
              />

              {/* Center Icon */}
              <motion.g
                stroke={secondaryColor}
                fill="none"
                strokeWidth="2"
                initial={{ scale: 0.8 }}
                animate={{ rotate: isHovered ? 90 : 0, scale: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <line x1="-8" y1="0" x2="8" y2="0" />
                <line x1="0" y1="-8" x2="0" y2="8" />
                <circle r="16" strokeOpacity="0.5" />
              </motion.g>
            </g>

            {/* --- Satellite Nodes --- */}
            {nodes.map((node, index) => {
              const angleRad = (node.angle * Math.PI) / 180;
              
              // Calculate dynamic position based on hover state
              // We use CSS variables or standard calculation in render
              // But for Framer Motion simple distinct positions are easier
              
              return (
                <motion.g 
                  key={node.label}
                  // We animate the group position itself
                  animate={{
                    x: 150 + (isHovered ? ORBIT_RADIUS_HOVER : ORBIT_RADIUS_BASE) * Math.cos(angleRad),
                    y: 150 + (isHovered ? ORBIT_RADIUS_HOVER : ORBIT_RADIUS_BASE) * Math.sin(angleRad),
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 14,
                    delay: index * 0.05 
                  }}
                >
                  {/* Connection Line (Draws from center to node relative to node group) */}
                  <motion.line
                    x1={-1 * (isHovered ? ORBIT_RADIUS_HOVER : ORBIT_RADIUS_BASE) * Math.cos(angleRad)} // Inverse math to point back to 0,0 of parent SVG
                    y1={-1 * (isHovered ? ORBIT_RADIUS_HOVER : ORBIT_RADIUS_BASE) * Math.sin(angleRad)}
                    x2="0"
                    y2="0"
                    stroke={secondaryColor}
                    strokeWidth="1.5"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                  />

                  {/* Node Circle Background */}
                  <motion.circle
                    r={NODE_RADIUS}
                    fill="white"
                    stroke={secondaryColor}
                    strokeWidth="1.5"
                    filter="url(#soft-shadow)"
                    whileHover={{ scale: 1.15, stroke: primaryColor }}
                  />

                  {/* Icon */}
                  <g 
                    transform="translate(-12, -12) scale(1)" 
                    stroke={secondaryColor}
                    fill="none"
                    style={{ pointerEvents: 'none' }}
                  >
                    {node.icon}
                  </g>

                  {/* Label (Only visible on hover or always visible if preferred) */}
                  <motion.text
                    y={NODE_RADIUS + 16}
                    textAnchor="middle"
                    fill={secondaryColor}
                    style={{ 
                      fontSize: '10px', 
                      fontWeight: 600, 
                      fontFamily: 'sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                    }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? NODE_RADIUS + 16 : NODE_RADIUS + 5
                    }}
                  >
                    {node.label}
                  </motion.text>
                </motion.g>
              );
            })}
          </svg>
        </Box>
      </motion.div>
    </Box>
  );
}