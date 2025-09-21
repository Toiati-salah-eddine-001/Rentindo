"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scroller } from 'react-scroll';
import { useActiveSection } from '@/components/hooks/useActiveSection';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80, // Adjust this value based on your header height
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#021526]/95 backdrop-blur-md border-b border-[#03346E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-[#E2E2B6] text-2xl font-bold">
                Nexus
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(item.href.replace('#', ''), e)}
                    className={`${
                      isActive ? 'text-[#6EACDA]' : 'text-[#E2E2B6] hover:text-[#6EACDA]'
                    } px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Get Started Button */}
            <div className="hidden md:block">
              <button className="bg-[#03346E] text-[#E2E2B6] px-6 py-2 rounded-lg hover:bg-[#6EACDA] hover:text-[#021526] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#6EACDA] hover:text-[#E2E2B6] focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMenu}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute top-0 right-0 h-full w-64 bg-[#021526] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#03346E]/20">
              <div className="text-[#E2E2B6] text-xl font-bold">Nexus</div>
              <button
                onClick={toggleMenu}
                className="text-[#6EACDA] hover:text-[#E2E2B6] transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      scrollToSection(item.href.replace('#', ''), e);
                      setIsMenuOpen(false);
                    }}
                    className={`${
                      isActive ? 'text-[#6EACDA] bg-[#03346E]/30' : 'text-[#E2E2B6] hover:bg-[#03346E]/30'
                    } px-4 py-2 text-base font-medium rounded-md transition-colors duration-200`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            
            {/* Mobile Get Started Button */}
            <div className="p-4 mt-auto">
              <button className="w-full bg-[#03346E] text-[#E2E2B6] px-6 py-3 rounded-lg hover:bg-[#6EACDA] hover:text-[#021526] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
