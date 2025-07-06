
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 cyber-grid min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg animate-glow-pulse overflow-hidden">
              <img 
                src="/lovable-uploads/ef203ce0-378e-4fe2-ae20-8357b629a9de.png" 
                alt="Bharathi M" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-bold text-cyber-blue cyber-text-glow mb-6 animate-fade-in">
              Hi, I'm Bharathi M
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-cyber-green mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Future Cybersecurity Innovator
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Blending ethical hacking, IoT, and innovation to build a secure digital world.
            </p>
            <Button 
              onClick={scrollToAbout}
              className="bg-cyber-blue text-black hover:bg-cyber-blue/80 px-8 py-4 text-lg animate-glow-pulse font-semibold"
              style={{ animationDelay: '0.9s' }}
            >
              🚀 Explore My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
