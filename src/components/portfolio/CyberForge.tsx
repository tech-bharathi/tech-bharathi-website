
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CyberForge = () => {
  const roadmapSteps = [
    { step: "Idea", icon: "💡", description: "Concept development and market research", status: "completed" },
    { step: "Prototype", icon: "🔧", description: "Building MVP and testing core features", status: "current" },
    { step: "Testing", icon: "🧪", description: "User feedback and product refinement", status: "upcoming" },
    { step: "Launch", icon: "🚀", description: "Public release and market entry", status: "upcoming" }
  ];

  const products = [
    { name: "Wi-Fi Security Blockers", icon: "📡", description: "Portable devices for network security testing" },
    { name: "Anti-Spy USB Devices", icon: "🔒", description: "Hardware protection against malicious USB attacks" },
    { name: "Digital Privacy Trackers", icon: "🔍", description: "Tools to monitor and protect personal data" },
    { name: "IoT Security Modules", icon: "🛡️", description: "Plug-and-play security for smart devices" }
  ];

  return (
    <section id="cyber-forge" className="py-20 px-6 bg-cyber-gray/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-cyber-blue cyber-text-glow mb-6 animate-fade-in">
            Cyber Forge Infotech
          </h3>
          <p className="text-xl text-cyber-green mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Building Gadgets for the Future of Security
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            My vision is to create hardware gadgets that enhance digital security and privacy. 
            From Wi-Fi blockers to anti-spy devices, Cyber Forge Infotech will be at the forefront 
            of cybersecurity innovation.
          </p>
        </div>

        {/* Product Vision */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-cyber-purple mb-8 text-center">Product Portfolio</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="bg-cyber-dark border-cyber-purple hover:border-cyber-green transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {product.icon}
                  </div>
                  <CardTitle className="text-cyber-purple group-hover:text-cyber-green transition-colors text-sm">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm text-center">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Startup Roadmap */}
        <div>
          <h4 className="text-2xl font-bold text-cyber-green mb-8 text-center">Startup Roadmap</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 text-2xl transition-all duration-300 ${
                  step.status === 'completed' 
                    ? 'border-cyber-green bg-cyber-green/20 text-cyber-green' 
                    : step.status === 'current'
                    ? 'border-cyber-blue bg-cyber-blue/20 text-cyber-blue animate-glow-pulse'
                    : 'border-gray-600 text-gray-400'
                }`}>
                  {step.icon}
                </div>
                <h5 className={`font-semibold mb-2 ${
                  step.status === 'completed' 
                    ? 'text-cyber-green' 
                    : step.status === 'current'
                    ? 'text-cyber-blue'
                    : 'text-gray-400'
                }`}>
                  {step.step}
                </h5>
                <p className="text-gray-300 text-sm text-center max-w-32">{step.description}</p>
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden lg:block w-16 h-0.5 bg-cyber-blue/30 mt-8 absolute translate-x-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberForge;
