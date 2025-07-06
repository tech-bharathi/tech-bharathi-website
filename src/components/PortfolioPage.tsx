import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/portfolio/Hero';
import AboutMe from '@/components/portfolio/AboutMe';
import Projects from '@/components/portfolio/Projects';
import Certifications from '@/components/portfolio/Certifications';
import Achievements from '@/components/portfolio/Achievements';
import CyberForge from '@/components/portfolio/CyberForge';
import Skills from '@/components/portfolio/Skills';
import Contact from '@/components/portfolio/Contact';
import AIChatbot from '@/components/portfolio/AIChatbot';
import CompanyFooter from '@/components/company/CompanyFooter';
import TorchBearerFloatingButton from '@/components/TorchBearerFloatingButton';

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certifications', 'achievements', 'cyber-forge', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'cyber-forge', label: 'Cyber Forge' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      {/* Enhanced Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-cyber-dark/95 backdrop-blur-md z-50 border-b border-cyber-blue/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-cyber-blue font-inter">Tech Bharathi</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/30'
                      : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-cyber-blue p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
              </div>
            </button>

            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="hidden sm:flex border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-medium"
            >
              ← Back to Home
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-cyber-blue/20">
              <div className="flex flex-col space-y-2 mt-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 text-left font-medium ${
                      activeSection === item.id
                        ? 'text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/30'
                        : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="mt-4 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-medium"
                >
                  ← Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <AboutMe />
      <Projects />
      <Certifications />
      <Achievements />
      <CyberForge />
      <Skills />
      <Contact />
      
      {/* AI Chatbot */}
      <AIChatbot />
      
      {/* TORCH BEARER Floating Button */}
      <TorchBearerFloatingButton />
      
      {/* Enhanced Footer */}
      <CompanyFooter />
    </div>
  );
};

export default PortfolioPage;
