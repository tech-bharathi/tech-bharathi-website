
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CompanyAIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Hexmora's AI assistant. Ask me about our cybersecurity services, recovery solutions, or how to contact us!" }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses = {
    "hexmora services": "Hexmora Services offers 9 main cybersecurity solutions: Account Recovery, Fraud Transaction Recovery, Stolen Phone Support, Ethical Hacking Services, Firewall Setup, Digital Forensics Support, Personal Cybersecurity Plans, Cyber Awareness Training, and future Gadget Development through Cyber Forge!",
    "services": "Hexmora Services offers 9 main cybersecurity solutions: Account Recovery, Fraud Transaction Recovery, Stolen Phone Support, Ethical Hacking Services, Firewall Setup, Digital Forensics Support, Personal Cybersecurity Plans, Cyber Awareness Training, and future Gadget Development through Cyber Forge!",
    "hacked instagram": "Our Account Recovery service can help you regain access to hacked Instagram accounts using 100% legitimate methods. We work with platform support teams and provide security assessment plus prevention guidelines. Recovery typically takes 2-7 days.",
    "account recovery": "We can help recover hacked or lost accounts on Instagram, Facebook, Gmail, Snapchat and other platforms. We use only legitimate recovery methods, work with official support teams, and provide security setup guidance. Contact us for immediate assistance!",
    "torch bearer": "TORCH BEARER is our parent innovation company founded by Ganisetti Veera Venkata Satyanarayana (Satish). It's an ecosystem building futuristic tech solutions in education, automation, digital marketing, and robotics with sub-companies like TB Academy, Torchvia Solutions, and TB Digital.",
    "bharathi": "Bharathi M is the founder of Hexmora Services and a cybersecurity expert from Puducherry. You can contact him at techbharathi123@gmail.com, WhatsApp: +91 7806981118, or through our contact form. He specializes in ethical hacking and digital security solutions.",
    "contact bharathi": "You can reach Bharathi via email at techbharathi123@gmail.com, WhatsApp at +91 7806981118, or phone at +91 74183 54139. He's also available on LinkedIn and responds to inquiries through our contact form.",
    "satish": "Satish (Ganisetti Veera Venkata Satyanarayana) is the visionary founder of TORCH BEARER, our parent company. He's a student entrepreneur revolutionizing education and tech solutions. Contact him at ganisettisatish34@gmail.com or +91 6303987443.",
    "tb academy": "TB Academy is TORCH BEARER's education division offering tech learning and value-based education. They provide online courses, tech training, and student project guidance in IoT, Robotics, and AI. Contact: tbacademyofficial@gmail.com",
    "request service": "To request a service, click 'Apply Now' on any service card, fill out our consultation form, or contact us directly via WhatsApp (+91 7806981118) or email (techbharathi123@gmail.com). We offer free consultations for all services!",
    "future plan": "Our future plans include expanding Cyber Forge Infotech to create custom cybersecurity gadgets like anti-spy USBs and RF jammers, partnering with more educational institutions for cyber awareness, and developing AI-powered security solutions under TORCH BEARER's innovation ecosystem.",
    "fraud recovery": "Our Fraud Transaction Recovery service helps with UPI scams, banking fraud, and digital wallet issues. We provide transaction analysis, FIR filing assistance, bank communication support, and recovery process guidance. Process typically takes 1-14 days.",
    "phone stolen": "Our Stolen Phone Support includes IMEI tracking setup, remote device lock, data protection, and police complaint guidance. We provide immediate response plus follow-up support to help recover your device and protect your data.",
    "pricing": "Our services are designed to be affordable for everyone. Pricing varies by service complexity and urgency. Contact us for a free consultation and custom quote based on your specific needs. We believe cybersecurity should be accessible to all!"
  };

  const quickQuestions = [
    "What services does Hexmora offer?",
    "How can I recover a hacked Instagram account?",
    "What is TORCH BEARER?",
    "How can I contact Bharathi?",
    "How do I request a service?",
    "Tell me about pricing"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.toLowerCase();
    setMessages(prev => [...prev, { role: 'user', text: inputMessage }]);

    // Find matching response
    let botResponse = "I'm here to help with Hexmora Services questions! Try asking about our cybersecurity services, account recovery, TORCH BEARER, contacting Bharathi, or how to request a service.";
    
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
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Floating AI Assistant Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-cyber-green text-black hover:bg-cyber-green/80 animate-glow-pulse z-50 text-2xl"
      >
        🤖
      </Button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50">
          <Card className="bg-cyber-gray border-cyber-green shadow-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyber-green flex items-center justify-between">
                <span className="flex items-center gap-2">
                  🤖 Hexmora Assistant
                </span>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-cyber-green hover:text-cyber-red"
                >
                  ✕
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Messages */}
              <div className="h-64 overflow-y-auto space-y-3 border border-cyber-green/30 rounded p-3 bg-cyber-dark/50">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-2 rounded text-sm ${
                      message.role === 'user' 
                        ? 'bg-cyber-green text-black' 
                        : 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30'
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
                  placeholder="Ask about our services..."
                  className="bg-cyber-dark border-cyber-green text-white placeholder-gray-400 focus:border-cyber-blue"
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

export default CompanyAIChatbot;
