
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      icon: "🥈",
      title: "SRM Hackathon Runner-up",
      description: "Won 2nd Prize for LoRa-based medical alert system",
      highlight: "2nd Prize Winner",
      color: "cyber-blue"
    },
    {
      icon: "👨‍🏫",
      title: "Cybersecurity Trainer",
      description: "Training sessions at HypeSec Infotech on ethical hacking",
      highlight: "Active Trainer",
      color: "cyber-green"
    },
    {
      icon: "🛠️",
      title: "Ethical Hacking Internship",
      description: "Hands-on experience in penetration testing and security assessment",
      highlight: "Professional Experience",
      color: "cyber-purple"
    },
    {
      icon: "🧠",
      title: "Cybersecurity Club Member",
      description: "Active participant in college cybersecurity initiatives and workshops",
      highlight: "Community Leader",
      color: "cyber-pink"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl font-bold text-cyber-pink cyber-text-glow mb-12 text-center animate-fade-in">
          Achievements
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`bg-cyber-dark border-${achievement.color} hover:border-cyber-blue transition-all duration-300 hover:scale-105 animate-glow-pulse group`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader>
                <CardTitle className={`text-${achievement.color} group-hover:text-cyber-blue transition-colors flex items-center gap-3`}>
                  <span className="text-3xl animate-float">{achievement.icon}</span>
                  {achievement.title}
                </CardTitle>
                <span className={`text-${achievement.color} font-semibold text-sm`}>
                  {achievement.highlight}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
