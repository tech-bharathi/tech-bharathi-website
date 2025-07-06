
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "Operating Systems",
      platform: "Unstop",
      description: "Comprehensive course covering OS fundamentals, process management, and system security",
      icon: "💻",
      color: "cyber-blue"
    },
    {
      title: "Embedded Systems Design", 
      platform: "The Digital Adda",
      description: "Advanced certification in embedded systems, IoT device programming and hardware integration",
      icon: "🔧",
      color: "cyber-green"
    },
    {
      title: "Fundamentals of Data Structures in C",
      platform: "Simplilearn SkillUp",
      description: "Mastered data structures, algorithms, and efficient programming practices in C",
      icon: "📊",
      color: "cyber-purple"
    },
    {
      title: "Cybersecurity Training",
      platform: "HypeSec LLP",
      description: "Hands-on ethical hacking, penetration testing, and security assessment training",
      icon: "🛡️",
      color: "cyber-pink"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-cyber-gray/10">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl font-bold text-cyber-green cyber-text-glow mb-12 text-center animate-fade-in">
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`bg-cyber-gray border-${cert.color} hover:border-${cert.color === 'cyber-blue' ? 'cyber-green' : 'cyber-blue'} transition-all duration-300 hover:scale-105 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className={`text-${cert.color} group-hover:text-cyber-green transition-colors flex items-center gap-3`}>
                  <span className="text-2xl">{cert.icon}</span>
                  {cert.title}
                </CardTitle>
                <p className="text-cyber-green font-semibold">{cert.platform}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{cert.description}</p>
                <div className="mt-4">
                  <span className={`px-3 py-1 bg-${cert.color}/20 text-${cert.color} text-sm rounded-full border border-${cert.color}`}>
                    Certified
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
