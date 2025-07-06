
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Tech Bharathi | Hexmora Services';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden flex items-center justify-center">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Subtle Circuit Lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00FF41" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,10"
          className="animate-circuit-flow"
        />
        <path
          d="M100,0 Q300,200 500,100 T900,200"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,10"
          className="animate-circuit-flow"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        {/* Welcome Message */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-4">
            Welcome to
          </h2>
        </div>

        {/* Main Heading with Clean Typing Effect */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-cyber-blue">{typedText.split('|')[0]}</span>
            {typedText.includes('|') && (
              <>
                <br className="hidden md:block" />
                <span className="text-cyber-green">{typedText.split('|')[1]}</span>
              </>
            )}
            <span className="animate-pulse text-cyber-blue ml-2">|</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mb-16 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light" style={{ animationDelay: '1s' }}>
          Explore My Portfolio or Discover Our Cybersecurity Solutions
        </p>

        {/* Clean Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button
            onClick={() => navigate('/portfolio')}
            className="bg-cyber-blue text-black hover:bg-cyber-blue/90 px-12 py-6 text-lg font-semibold transition-all duration-300 rounded-lg shadow-lg hover:shadow-cyber-blue/25 hover:scale-105"
            size="lg"
          >
            <span className="flex items-center gap-3">
              <span className="text-xl">👨‍💻</span>
              Explore Portfolio
            </span>
          </Button>

          <Button
            onClick={() => navigate('/company')}
            className="bg-transparent border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black px-12 py-6 text-lg font-semibold transition-all duration-300 rounded-lg hover:shadow-cyber-green/25 hover:scale-105"
            size="lg"
          >
            <span className="flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              Company Services
            </span>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="flex justify-center space-x-8 text-sm text-gray-500 flex-wrap gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-blue rounded-full"></span>
              Cybersecurity Expert
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
              Innovation Focused
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-purple rounded-full"></span>
              Future Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
