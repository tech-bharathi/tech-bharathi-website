
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "LoRa in Operation Theatres",
      icon: "🏥",
      description: "Medical alert system integrated with WhatsApp for real-time monitoring",
      tech: ["LoRa", "WhatsApp API", "IoT", "Arduino"],
      role: "Lead Developer & System Designer",
      results: "🥈 2nd Prize at SRM Hackathon, Reduced emergency response time by 40%",
      fullDescription: "Developed a comprehensive medical monitoring system using LoRa technology to enable long-range communication in hospital environments. The system integrates with WhatsApp for instant alerts to medical staff, ensuring rapid response during critical situations."
    },
    {
      id: 2,
      title: "Wi-Fi Jammer (ESP32)",
      icon: "📡",
      description: "Ethical testing tool to deactivate Wi-Fi zones for security assessment",
      tech: ["ESP32", "Wi-Fi", "Cybersecurity", "C++"],
      role: "Security Researcher & Developer",
      results: "Successfully tested network vulnerabilities, Enhanced security protocols",
      fullDescription: "Built an ESP32-based Wi-Fi jammer for ethical security testing purposes. This tool helps identify network vulnerabilities and test security measures in controlled environments, contributing to better network security practices."
    },
    {
      id: 3,
      title: "AgriGuide Smart Farming",
      icon: "🌱",
      description: "WhatsApp-connected smart farming bot for agricultural guidance",
      tech: ["IoT", "WhatsApp Bot", "AI/ML", "Agriculture Tech"],
      role: "Full-Stack Developer",
      results: "Helped 50+ farmers optimize crop yield, Reduced water usage by 30%",
      fullDescription: "Created an intelligent farming assistant that connects farmers with real-time agricultural data through WhatsApp. The system provides weather updates, crop recommendations, and irrigation schedules to optimize farming practices."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl font-bold text-cyber-purple cyber-text-glow mb-12 text-center animate-fade-in">
          Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-cyber-dark border-cyber-blue hover:border-cyber-purple transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in group"
              style={{ animationDelay: `${index * 0.3}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <CardTitle className="text-cyber-blue group-hover:text-cyber-purple transition-colors flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded border border-cyber-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <Card className="bg-cyber-gray border-cyber-blue max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-cyber-blue flex items-center gap-3">
                <span className="text-3xl">{selectedProject.icon}</span>
                {selectedProject.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">{selectedProject.fullDescription}</p>
              <div>
                <h4 className="text-cyber-green font-semibold mb-2">Role:</h4>
                <p className="text-gray-300">{selectedProject.role}</p>
              </div>
              <div>
                <h4 className="text-cyber-green font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded border border-cyber-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-cyber-green font-semibold mb-2">Results:</h4>
                <p className="text-gray-300">{selectedProject.results}</p>
              </div>
              <Button 
                onClick={() => setSelectedProject(null)}
                className="bg-cyber-blue text-black hover:bg-cyber-blue/80"
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default Projects;
