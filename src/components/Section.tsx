import { forwardRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ 
  id, 
  title, 
  bgColor = 'bg-[#E2E2B6]', 
  textColor = 'text-[#021526]',
  className = '',
  children 
}, ref) => {
  return (
    <section 
      id={id} 
      ref={ref}
      className={`min-h-screen flex items-center justify-center ${bgColor} ${textColor} ${className}`}
      style={{
        scrollBehavior: 'smooth',
        scrollMarginTop: '5rem', // Adjust this value based on your header height
      }}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;