'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Inter, Playfair_Display } from 'next/font/google';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { getCvData } from '@/data/cvData';
import Header from '@/components/Header';
import BioSection from '@/components/BioSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LanguageToggle from '@/components/LanguageToggle';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a5f5f', // Dark teal/green
      light: '#2a7f7f',
      dark: '#0f3f3f',
    },
    secondary: {
      main: '#e63946', // Red accent
      light: '#ff4757',
      dark: '#c92a2a',
    },
    background: {
      default: '#1a5f5f', // Dark teal/green background
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
    },
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    body1: {
      letterSpacing: '0.01em',
      lineHeight: 1.75,
    },
    body2: {
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.05)',
    '0 4px 6px rgba(0,0,0,0.05)',
    '0 10px 15px rgba(0,0,0,0.08)',
    '0 20px 25px rgba(0,0,0,0.1)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
    '0 25px 50px rgba(0,0,0,0.12)',
  ],
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function HomeContent() {
  const { language } = useLanguage();
  const cvData = getCvData(language);

  return (
    <>
      <Header contact={cvData.contact} />
      <BioSection bio={cvData.bio} contact={cvData.contact} />
      <SkillsSection skills={cvData.skills} />
      <WorkExperienceSection experiences={cvData.workExperience} />
      <EducationSection education={cvData.education} />
      <Footer />
      <WhatsAppButton />
      <LanguageToggle />
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div 
          className={`${inter.variable} ${playfair.variable}`}
          style={{ 
            minHeight: '100vh', 
            background: '#1a5f5f', // Dark teal/green background
          }}
        >
          <HomeContent />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
