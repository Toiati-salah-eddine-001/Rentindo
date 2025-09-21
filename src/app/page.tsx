
import AboutSection from '@/components/AboutSection';
import Header from '@/components/Header';
import Section from '@/components/Section';
export default function Home() {

// const sections = [
//   { id: "home", title: "Welcome Home", bgColor: "bg-cream", textColor: "text-dark-navy" },
//   { id: "about", title: "About Us", bgColor: "bg-light-blue", textColor: "text-dark-navy" },
//   { id: "services", title: "Our Services", bgColor: "bg-navy", textColor: "text-cream" },
//   { id: "portfolio", title: "Portfolio", bgColor: "bg-dark-navy", textColor: "text-light-blue" },
//   { id: "contact", title: "Contact Us", bgColor: "bg-cream", textColor: "text-navy" },
// ]
  return (
    <div className="min-h-screen">
    <Header />
    
    {/* Add padding top to account for fixed header */}
    <div className="pt-16">
      <Section 
        id="home" 
        title="Home" 
        bgColor="bg-[#E2E2B6]" 
        textColor="text-[#021526]"
      >
      </Section>
      <Section 
        id="about" 
        title="About" 
        bgColor="bg-[#6EACDA]" 
        textColor="text-[#021526]"
      >
        <AboutSection />
      </Section>
      <Section 
        id="services" 
        title="Services" 
        bgColor="bg-[#03346E]" 
        textColor="text-[#E2E2B6]"
      >
      </Section>
      <Section 
        id="contact" 
        title="Contact" 
        bgColor="bg-[#021526]" 
        textColor="text-[#6EACDA]"
      >
      </Section>
       {/* <section id="contact"className={`min-h-screen flex items-center justify-center      bgColor="bg-[#021526]" 
        textColor="text-[#6EACDA]"`}>
        {}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-90">
            look
          </h1>
          <div className="w-24 h-1 bg-current mx-auto opacity-50"></div>
        </div>
      </section> */}
    </div>
  </div>
  );
}
