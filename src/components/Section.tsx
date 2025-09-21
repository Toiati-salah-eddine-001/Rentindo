interface SectionProps {
    id: string;
    title: string;
    bgColor?: string;
    textColor?: string;
    children?: React.ReactNode;
  }
  
  export default function Section({ id, title, bgColor = 'bg-[#E2E2B6]', textColor = 'text-[#021526]' ,children}: SectionProps) {
    return (
      <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor} ${textColor}`}>
        {children}
      </section>
    );
  }