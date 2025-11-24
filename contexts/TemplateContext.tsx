'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type TemplateType = 
  | 'compact' 
  | 'elegant' 
  | 'modern' 
  | 'creative'
  | 'classic'
  | 'contemporary'
  | 'timeline'
  | 'stylish'
  | 'polished'
  | 'ivy-league'
  | 'double-column'
  | 'high-performer';

interface TemplateContextType {
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
  resetTemplate: () => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

const DEFAULT_TEMPLATE: TemplateType = 'elegant';

export function TemplateProvider({ children }: { children: ReactNode }) {
  const [template, setTemplateState] = useState<TemplateType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cv-template') as TemplateType;
      const validTemplates: TemplateType[] = [
        'compact', 'elegant', 'modern', 'creative', 'classic', 
        'contemporary', 'timeline', 'stylish', 'polished', 
        'ivy-league', 'double-column', 'high-performer'
      ];
      return saved && validTemplates.includes(saved) 
        ? saved 
        : DEFAULT_TEMPLATE;
    }
    return DEFAULT_TEMPLATE;
  });

  const setTemplate = (newTemplate: TemplateType) => {
    setTemplateState(newTemplate);
    localStorage.setItem('cv-template', newTemplate);
  };

  const resetTemplate = () => {
    setTemplateState(DEFAULT_TEMPLATE);
    localStorage.removeItem('cv-template');
  };

  return (
    <TemplateContext.Provider value={{ 
      template, 
      setTemplate,
      resetTemplate 
    }}>
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
}

