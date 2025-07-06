
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Bharathi's AI assistant. Ask me about his projects, skills, or how to contact him!" }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses = {
    "who is bharathi": "Bharathi M is a cybersecurity enthusiast and future tech entrepreneur from Puducherry. He's pursuing B.Tech CSE with specialization in IoT, Cybersecurity & Blockchain at MVIT. He's passionate about ethical hacking and hardware innovation!",
    "bharathi": "Bharathi M is a cybersecurity enthusiast and future tech entrepreneur from Puducherry. He's pursuing B.Tech CSE with specialization in IoT, Cybersecurity & Blockchain at MVIT. He's passionate about ethical hacking and hardware innovation!",
    "cyber forge": "Cyber Forge Infotech is Bharathi's startup vision to create hardware gadgets for digital security. Products include Wi-Fi security blockers, anti-spy USB devices, digital privacy trackers, and IoT security modules. Currently in the prototype phase!",
    "projects": "Bharathi has worked on several innovative projects: 1) LoRa in Operation Theatres - a medical alert system (2nd prize at SRM), 2) Wi-Fi Jammer using ESP32 for ethical security testing, and 3) AgriGuide - a smart farming bot connected via WhatsApp.",
    "contact": "You can reach Bharathi via email at techbharathi@gmail.com, connect on LinkedIn, or chat on WhatsApp. He's always open to discussing cybersecurity, tech projects, or potential collaborations!",
    "skills": "Bharathi is proficient in C (90%), C++ (85%), and Python (60%). He's experienced with Linux, Arduino, ESP32, and Burp Suite. He's completed courses in IoT, networking, AI/ML, and cyber ethics.",
    "achievements": "Bharathi won 2nd prize at SRM Hackathon, works as a cybersecurity trainer at HypeSec Infotech, completed an ethical hacking internship, and is an active member of his college's cybersecurity club."
  };

  const quickQuestions = [
    "Who is Bharathi M?",
    "Tell me about Cyber Forge Infotech",
    "What projects has he done?",
    "How can I contact him?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.toLowerCase();
    setMessages(prev => [...prev, { role: 'user', text: inputMessage }]);

    // Find matching response
    let botResponse = "I'm sorry, I don't have information about that. Try asking about Bharathi's projects, skills, Cyber Forge Infotech, or how to contact him!";
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (userMessage.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating AI Assistant Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-cyber-blue text-black hover:bg-cyber-blue/80 animate-glow-pulse z-50 text-2xl"
      >
        🤖
      </Button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50">
          <Card className="bg-cyber-gray border-cyber-blue shadow-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyber-blue flex items-center justify-between">
                <span className="flex items-center gap-2">
                  🤖 Ask me about Bharathi!
                </span>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-cyber-blue hover:text-cyber-red"
                >
                  ✕
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Messages */}
              <div className="h-64 overflow-y-auto space-y-3 border border-cyber-blue/30 rounded p-3 bg-cyber-dark/50">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-2 rounded text-sm ${
                      message.role === 'user' 
                        ? 'bg-cyber-blue text-black' 
                        : 'bg-cyber-green/20 text-cyber-green border border-cyber-green/30'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="space-y-2">
                <p className="text-cyber-green text-sm">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="bg-cyber-dark border-cyber-blue text-white placeholder-gray-400 focus:border-cyber-green"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-cyber-green text-black hover:bg-cyber-green/80"
                >
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
