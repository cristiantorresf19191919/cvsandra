import { useTemplate, TemplateType } from '@/contexts/TemplateContext';
import { templateStyles, TemplateStyles } from '@/types/templateStyles';

export function useTemplateStyles(): TemplateStyles & { template: TemplateType } {
  const { template } = useTemplate();
  return { ...templateStyles[template], template };
}

