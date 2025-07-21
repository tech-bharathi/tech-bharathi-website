
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutMe = () => {
  const aboutCards = [
    {
      icon: '🏠',
      title: 'Origin',
      content: 'From T.solankurchi, India'
    },
    {
      icon: '🎓',
      title: 'Education',
      content: [
        '10th: Raja Vignesh HSS',
        '12th: Bio-Maths – 68%',
        'B.Tech CSE (IoT, Cybersecurity & Blockchain) at MVIT'
      ]
    },
    {
      icon: '🗣️',
      title: 'Languages',
      content: ['Tamil (Native)', 'Telugu (Fluent)', 'English (Professional)']
    },
    {
      icon: '🏀',
      title: 'Sports',
      content: ['District Basketball Runner-up', 'Volleyball Team Player']
    },
    {
      icon: '🎯',
      title: 'Career Goal',
      content: 'Ethical Hacker & Hardware Tech Entrepreneur'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-cyber-gray/10">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl font-bold text-cyber-green cyber-text-glow mb-12 text-center animate-fade-in">
          About Me
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <Card 
              key={index} 
              className="bg-cyber-gray border-cyber-blue hover:border-cyber-green transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-cyber-blue group-hover:text-cyber-green transition-colors flex items-center gap-3">
                  <span className="text-2xl">{card.icon}</span>
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                {Array.isArray(card.content) ? (
                  <ul className="space-y-2">
                    {card.content.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
