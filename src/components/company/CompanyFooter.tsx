
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TorchBearerModal from '@/components/TorchBearerModal';

const CompanyFooter = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isTorchBearerModalOpen, setIsTorchBearerModalOpen] = useState(false);

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Company', path: '/company' },
    { label: 'Contact', path: '/portfolio#contact' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribe email:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleLinkClick = (path: string) => {
    if (path.includes('#')) {
      const [route, section] = path.split('#');
      navigate(route);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <footer className="bg-black border-t border-cyber-blue/20 pt-16 pb-8 mt-20">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-cyber-green mb-4 font-inter">
                Tech Bharathi
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Cybersecurity Expert & Innovation Focused Professional. Building secure digital solutions for tomorrow.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 hover:scale-110"
                >
                  📘
                </a>
                <a 
                  href="https://linkedin.com/in/bharathi-m" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 hover:scale-110"
                >
                  💼
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-cyber-green/30 flex items-center justify-center text-cyber-green hover:border-cyber-green hover:bg-cyber-green/10 transition-all duration-300 hover:scale-110"
                >
                  🐙
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-cyber-blue mb-6 font-inter">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="block text-gray-300 hover:text-cyber-green transition-colors text-left text-sm hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-gray-400 hover:text-cyber-green transition-colors cursor-pointer text-sm">
                    Privacy Policy
                  </div>
                  <div className="text-gray-400 hover:text-cyber-green transition-colors cursor-pointer text-sm mt-2">
                    Terms & Conditions
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-cyber-blue mb-6 font-inter">Contact Info</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-cyber-green mt-1">📧</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email</div>
                    <a href="mailto:techbharathi123@gmail.com" className="hover:text-cyber-green transition-colors text-sm">
                      techbharathi123@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyber-green mt-1">📱</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">WhatsApp</div>
                    <a href="https://wa.me/917806981118" className="hover:text-cyber-green transition-colors text-sm">
                      Direct Chat
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyber-green mt-1">📍</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Location</div>
                    <span className="text-sm">Ariyalur, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-lg font-semibold text-cyber-blue mb-6 font-inter">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Get updates from Bharathi & Hexmora Services
              </p>
              
              {isSubscribed ? (
                <div className="text-center py-4">
                  <div className="text-2xl mb-2">✅</div>
                  <p className="text-cyber-green text-sm font-medium">Subscribed Successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-cyber-gray border-cyber-blue/30 focus:border-cyber-blue text-white placeholder-gray-500 text-sm"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-cyber-green text-black hover:bg-cyber-green/90 font-medium transition-all duration-300 text-sm"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          {/* Hexmora Partnership Note */}
          <div className="border-t border-cyber-blue/20 pt-8 mb-8">
            <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10 rounded-lg p-4 text-center">
              <p className="text-gray-300 text-sm">
                Hexmora is a partner division under 
                <button 
                  onClick={() => setIsTorchBearerModalOpen(true)}
                  className="text-cyber-blue hover:text-cyber-green font-semibold mx-1 underline"
                >
                  TORCH BEARER's
                </button>
                mission to build next-gen cyber solutions.
              </p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-cyber-blue/20 pt-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent mb-6 opacity-50"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                <p className="mb-2">Designed with ❤️ by TB Solutions</p>
                <p>
                  © 2025 Tech Bharathi & Hexmora Services. Powered by 
                  <button 
                    onClick={() => setIsTorchBearerModalOpen(true)}
                    className="text-cyber-blue hover:text-cyber-green font-semibold mx-1 underline"
                  >
                    TORCH BEARER
                  </button>
                  . All Rights Reserved.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-xs text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></span>
                  Cybersecurity Expert
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
                  Innovation Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <TorchBearerModal 
        isOpen={isTorchBearerModalOpen}
        onClose={() => setIsTorchBearerModalOpen(false)}
      />
    </>
  );
};

export default CompanyFooter;
