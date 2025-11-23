'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    'title': 'Comunicadora Social',
    'personalContact': 'Contacto Personal',
    'aboutMe': 'Sobre Mí',
    'personalSkills': 'Habilidades Personales',
    'workExperience': 'Experiencia Laboral',
    'education': 'Educación',
    'dateOfBirth': 'Fecha de Nacimiento',
  },
  en: {
    'title': 'Social Communicator',
    'personalContact': 'Personal Contact',
    'aboutMe': 'About Me',
    'personalSkills': 'Personal Skills',
    'workExperience': 'Work Experience',
    'education': 'Education',
    'dateOfBirth': 'Date of Birth',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

