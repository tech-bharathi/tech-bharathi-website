import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import ServiceModal from '@/components/company/ServiceModal';
import ApplyForm from '@/components/company/ApplyForm';
import CompanyFooter from '@/components/company/CompanyFooter';
import CompanyAIChatbot from '@/components/company/CompanyAIChatbot';
import TorchBearerFloatingButton from '@/components/TorchBearerFloatingButton';

const CompanyPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section tracking for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'why-choose', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

  const services = [
    {
      id: 1,
      title: "Account Recovery",
      icon: "🔐",
      description: "Regain access to hacked/lost Instagram, Facebook, Gmail, Snapchat accounts",
      fullDescription: "Professional account recovery services for all major platforms including social media, email, and cloud services. We use legitimate recovery methods and work with platform support teams.",
      included: [
        "Email & Social Media Recovery",
        "Two-Factor Authentication Setup",
        "Security Assessment",
        "Prevention Guidelines"
      ],
      duration: "2-7 days",
      safety: "100% legitimate methods, no hacking involved"
    },
    {
      id: 2,
      title: "Fraud Transaction Recovery",
      icon: "💳",
      description: "UPI or banking scam tracing, digital wallet fraud help, complaint assistance",
      fullDescription: "Expert assistance in fraud detection and transaction recovery for UPI, banking, and digital wallet scams with step-by-step complaint guidance.",
      included: [
        "Transaction Analysis",
        "FIR Filing Assistance",
        "Bank Communication Support",
        "Recovery Process Guidance"
      ],
      duration: "1-14 days",
      safety: "Legal compliance with banking regulations"
    },
    {
      id: 3,
      title: "Stolen Phone Support",
      icon: "📱",
      description: "IMEI tracking help, SIM/data lock, Google ID disabling, FIR guide",
      fullDescription: "Comprehensive support for stolen device recovery including IMEI tracking, remote data protection, and legal documentation assistance.",
      included: [
        "IMEI Tracking Setup",
        "Remote Device Lock",
        "Data Protection",
        "Police Complaint Guide"
      ],
      duration: "Immediate + Follow-up",
      safety: "Privacy-focused with legal compliance"
    },
    {
      id: 4,
      title: "Ethical Hacking Services",
      icon: "🛡️",
      description: "Vulnerability testing, system audits, mobile/IoT security evaluation",
      fullDescription: "Professional penetration testing and vulnerability assessment for personal devices, small businesses, and IoT systems.",
      included: [
        "Security Vulnerability Assessment",
        "Network Penetration Testing",
        "Mobile App Security Audit",
        "IoT Device Testing"
      ],
      duration: "3-10 days",
      safety: "Ethical guidelines with detailed reporting"
    },
    {
      id: 5,
      title: "Firewall Setup",
      icon: "🔥",
      description: "Install firewall protection on personal or small business networks",
      fullDescription: "Advanced firewall configuration and network security setup including IDS/IPS implementation for comprehensive protection.",
      included: [
        "Firewall Installation & Config",
        "IDS/IPS Setup",
        "Network Monitoring",
        "Security Policy Creation"
      ],
      duration: "1-3 days",
      safety: "Enterprise-grade security standards"
    },
    {
      id: 6,
      title: "Digital Forensics Support",
      icon: "🔍",
      description: "Cyberbullying analysis, fake profile tracking, blackmail tracing",
      fullDescription: "Expert digital investigation and evidence recovery for cyberbullying, fake profiles, and online harassment cases.",
      included: [
        "Digital Evidence Collection",
        "Profile Analysis",
        "Communication Tracing",
        "Legal Documentation"
      ],
      duration: "5-15 days",
      safety: "Legal compliance for court admissibility"
    },
    {
      id: 7,
      title: "Personal Cybersecurity Plans",
      icon: "👤",
      description: "For students, families: secure device setup, encryption, password management",
      fullDescription: "Customized security solutions for individuals and families including device hardening, encryption setup, and security awareness.",
      included: [
        "Device Security Hardening",
        "Password Manager Setup",
        "Encryption Implementation",
        "Family Safety Guidelines"
      ],
      duration: "2-5 days",
      safety: "Privacy-first approach"
    },
    {
      id: 8,
      title: "Cyber Awareness Training",
      icon: "📚",
      description: "Online/offline workshops on safety, ethical hacking basics, digital hygiene",
      fullDescription: "Professional cybersecurity training and education programs for individuals, families, and small teams.",
      included: [
        "Online Safety Workshop",
        "Ethical Hacking Basics",
        "Digital Hygiene Training",
        "Hands-on Practical Sessions"
      ],
      duration: "1-2 days per session",
      safety: "Educational focus with practical application"
    },
    {
      id: 9,
      title: "Gadget Development",
      icon: "⚡",
      description: "Future service: anti-spy USBs, RF jammers, smart protectors via Cyber Forge",
      fullDescription: "Vision for creating custom cybersecurity gadgets including anti-spy devices, RF jammers, and smart security protectors through Cyber Forge Infotech.",
      included: [
        "Custom Gadget Design",
        "Prototype Development",
        "Security Testing",
        "User Manual & Support"
      ],
      duration: "Future Service",
      safety: "Legal compliance with electronics regulations"
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleApplyClick = (service) => {
    setSelectedService(service);
    setShowApplyForm(true);
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      {/* Enhanced Navigation with Active Section Highlighting */}
      <nav className="fixed top-0 w-full bg-cyber-gray/95 backdrop-blur-md z-50 border-b border-cyber-purple/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyber-purple">Hexmora Services</h1>
          
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'why-choose', label: 'Why Choose Us' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyber-purple border-b-2 border-cyber-purple bg-cyber-purple/10'
                    : 'text-gray-300 hover:text-cyber-purple hover:bg-cyber-purple/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black transition-all duration-300"
          >
            ← Back to Home
          </Button>
        </div>
      </nav>

      {/* Hero Section with Better Spacing */}
      <section id="home" className="pt-32 pb-20 px-6 cyber-grid relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="mb-12 animate-float">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyber-green to-cyber-blue rounded-full flex items-center justify-center text-6xl animate-glow-pulse">
              🛡️
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-cyber-green cyber-text-glow mb-8 animate-fade-in">
            Hexmora Services
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-cyber-blue mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Cybersecurity for Everyone
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '0.6s' }}>
            Expert help in digital recovery, protection, and ethical security.
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s' }}>
              Hexmora Services is a personal cyber-support company founded by Bharathi M. It offers practical, 
              trustworthy solutions to real-world digital problems like stolen accounts, financial fraud, and device 
              security — both for individuals and small businesses.
            </p>
          </div>

          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-cyber-green text-black hover:bg-cyber-green/80 px-8 py-4 text-lg animate-glow-pulse font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ animationDelay: '1.2s' }}
          >
            🚀 Explore Our Services
          </Button>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyber-green text-2xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            >
              {['🔐', '🛡️', '🔍', '💻', '⚡'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid with Improved Layout */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-cyber-blue cyber-text-glow mb-16 text-center animate-fade-in">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className="bg-cyber-gray border-cyber-green hover:border-cyber-blue transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in hover:shadow-2xl hover:shadow-cyber-blue/20"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleServiceClick(service)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-6 group-hover:animate-bounce transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-cyber-green group-hover:text-cyber-blue transition-colors text-xl mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full bg-cyber-blue text-black hover:bg-cyber-blue/80 animate-glow-pulse font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service);
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Better Spacing */}
      <section id="why-choose" className="py-24 px-6 bg-cyber-gray/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-cyber-green cyber-text-glow mb-8">
                Why Choose Hexmora?
              </h3>
              <ul className="space-y-6 text-gray-300 text-lg">
                <li className="flex items-center gap-4">
                  <span className="text-cyber-blue text-2xl">✓</span>
                  <span>Expert cybersecurity professionals</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-cyber-blue text-2xl">✓</span>
                  <span>24/7 emergency support available</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-cyber-blue text-2xl">✓</span>
                  <span>100% legitimate and ethical methods</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-cyber-blue text-2xl">✓</span>
                  <span>Customized protection plans</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-cyber-blue text-2xl">✓</span>
                  <span>Affordable pricing for everyone</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyber-blue via-cyber-green to-cyber-purple rounded-lg animate-glow-pulse flex items-center justify-center text-8xl">
                🔒
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA with Better Layout */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold text-cyber-blue cyber-text-glow mb-8 animate-fade-in">
            Ready to Secure Your Digital Life?
          </h3>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Get in touch with our cybersecurity experts today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="bg-cyber-green text-black hover:bg-cyber-green/80 px-10 py-4 text-lg animate-glow-pulse font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowApplyForm(true)}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && !showApplyForm && (
        <ServiceModal 
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onApplyClick={() => handleApplyClick(selectedService)}
        />
      )}

      {/* Apply Form */}
      {showApplyForm && (
        <ApplyForm 
          service={selectedService}
          onClose={() => {
            setShowApplyForm(false);
            setSelectedService(null);
          }}
        />
      )}

      {/* Company AI Chatbot */}
      <CompanyAIChatbot />
      
      {/* TORCH BEARER Floating Button */}
      <TorchBearerFloatingButton />

      {/* Enhanced Footer */}
      <CompanyFooter />
    </div>
  );
};

export default CompanyPage;
