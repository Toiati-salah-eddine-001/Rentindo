interface SectionProps {
    id: string;
    title: string;
    bgColor?: string;
    textColor?: string;
  }
  
  export default function Section({ id, title, bgColor = 'bg-[#E2E2B6]', textColor = 'text-[#021526]' }: SectionProps) {
    return (
      <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor} ${textColor}`}>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-90">
            {title}
          </h1>
          <div className="w-24 h-1 bg-current mx-auto opacity-50"></div>
        </div>
      </section>
    );
  }