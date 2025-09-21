"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
            <nav className="hidden md:flex space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden group ${
                      isActive 
                        ? 'bg-[#E2E2B6] text-[#021526] shadow-lg' 
                        : 'text-[#6EACDA] hover:text-[#E2E2B6] hover:bg-[#03346E]/30'
                    }`}
                  >
                    {/* Active background with curve effect */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E2E2B6] to-[#E2E2B6]/90 rounded-full"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-[#6EACDA]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    <span className="relative z-10 font-medium">{item.label}</span>
                    
                    {/* Curved active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#03346E] rounded-full"></div>
                    )}
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
                className="text-[#6EACDA] hover:text-[#E2E2B6] transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                    onClick={toggleMenu}
                    className={`py-3 px-4 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                      isActive 
                        ? 'bg-[#E2E2B6] text-[#021526] shadow-lg transform scale-105' 
                        : 'text-[#6EACDA] hover:text-[#E2E2B6] hover:bg-[#03346E]/30 hover:transform hover:scale-102'
                    }`}
                  >
                    {/* Active background with curve effect */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E2E2B6] to-[#E2E2B6]/95 rounded-2xl"></div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-[#E2E2B6] rounded-l-full"></div>
                      </>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-[#6EACDA]/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    <span className="relative z-10 font-medium flex items-center">
                      {/* Active dot indicator */}
                      {isActive && (
                        <div className="w-2 h-2 bg-[#03346E] rounded-full mr-3 animate-pulse"></div>
                      )}
                      {item.label}
                    </span>
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
