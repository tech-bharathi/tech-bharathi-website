
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const programmingSkills = [
    { name: "C", level: 90, color: "cyber-blue" },
    { name: "C++", level: 85, color: "cyber-green" },
    { name: "Python", level: 60, color: "cyber-purple" }
  ];

  const tools = [
    { name: "Linux", icon: "🐧" },
    { name: "Arduino", icon: "🔧" },
    { name: "ESP32", icon: "📡" },
    { name: "Burp Suite", icon: "🛡️" }
  ];

  const courses = [
    { name: "IoT Development", status: "Completed", icon: "🌐" },
    { name: "Computer Networking", status: "Completed", icon: "🔗" },
    { name: "AI & Machine Learning", status: "Completed", icon: "🤖" },
    { name: "Cyber Ethics", status: "Completed", icon: "⚖️" }
  ];

  const strengths = [
    "Device Testing & Analysis",
    "Basic Reverse Engineering", 
    "Ethical Security Assessment",
    "Hardware-Software Integration"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl font-bold text-cyber-green cyber-text-glow mb-12 text-center animate-fade-in">
          Skills & Courses
        </h3>

        {/* Programming Skills */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-cyber-blue mb-6">Programming Languages</h4>
          <div className="space-y-6">
            {programmingSkills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-cyber-blue font-semibold">{skill.name}</span>
                  <span className="text-cyber-green">{skill.level}%</span>
                </div>
                <div className="w-full bg-cyber-gray rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${skill.color} to-cyber-purple animate-glow-pulse`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `glow-pulse 2s ease-in-out infinite, width-fill 2s ease-out`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-cyber-purple mb-6">Tools & Technologies</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Card 
                key={index}
                className="bg-cyber-gray border-cyber-purple hover:border-cyber-green transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2 animate-float">{tool.icon}</div>
                  <p className="text-cyber-purple group-hover:text-cyber-green transition-colors font-semibold">
                    {tool.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Courses */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-cyber-green mb-6">Completed Courses</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="bg-cyber-dark border-cyber-green hover:border-cyber-blue transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{course.icon}</span>
                  <div>
                    <h5 className="text-cyber-green font-semibold">{course.name}</h5>
                    <span className="text-cyber-blue text-sm">{course.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Strengths */}
        <div>
          <h4 className="text-2xl font-bold text-cyber-pink mb-6">Core Strengths</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="bg-cyber-gray/30 border border-cyber-pink rounded-lg p-4 hover:border-cyber-blue transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-cyber-pink font-semibold flex items-center gap-2">
                  <span className="text-cyber-blue">▶</span>
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
