
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Phone, Mail, MapPin, Globe, Zap } from 'lucide-react';

interface TorchBearerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TorchBearerModal: React.FC<TorchBearerModalProps> = ({ isOpen, onClose }) => {
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('TORCH BEARER contact form:', contactForm);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
      onClose();
    }, 2000);
  };

  const services = [
    'Student Projects (IoT, Robotics, AI)',
    'Custom Automation Solutions',
    'Web/App Development',
    'AI Tools & Chatbot Integration',
    'Digital Marketing Services',
    'Online Courses & Tech Training',
    'Idea to Product Guidance'
  ];

  const subCompanies = [
    { name: 'TB Academy', description: 'Tech learning and value-based education', email: 'tbacademyofficial@gmail.com' },
    { name: 'Torchvia Solutions', description: 'Automation and software products', email: 'tbdigital.official@gmail.com' },
    { name: 'TB Digital', description: 'Digital marketing and brand building', email: 'tbdigital.official@gmail.com' },
    { name: 'TB Robotics', description: 'Coming soon...', email: 'torchbearer.startup@gmail.com' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark border-2 border-cyber-blue/30 backdrop-blur-xl">
        <DialogHeader className="relative">
          <DialogTitle className="text-3xl font-bold text-center text-cyber-blue mb-2">
            <Zap className="inline-block w-8 h-8 mr-2 text-cyber-green" />
            TORCH BEARER
          </DialogTitle>
          <p className="text-center text-cyber-green text-lg font-semibold">
            Lightning the Future, Transforming the World
          </p>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* About Section */}
          <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
            <h3 className="text-xl font-semibold text-cyber-green mb-4">About Us</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              TORCH BEARER is an innovation ecosystem founded by visionary student entrepreneur 
              <span className="text-cyber-blue font-semibold"> Ganisetti Veera Venkata Satyanarayana (Satish)</span>. 
              Our mission is to build futuristic tech solutions in education, automation, digital marketing, and robotics.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {subCompanies.map((company, index) => (
                <div key={index} className="bg-cyber-dark/50 rounded-lg p-4 border border-cyber-green/20 hover:border-cyber-blue/40 transition-colors">
                  <h4 className="text-cyber-blue font-semibold">{company.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{company.description}</p>
                  <a href={`mailto:${company.email}`} className="text-cyber-green text-xs hover:underline">
                    {company.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
              <h3 className="text-xl font-semibold text-cyber-green mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyber-blue/20 flex items-center justify-center mt-1">
                    <Phone className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+916303987443" className="text-white hover:text-cyber-green transition-colors">
                      +91 6303987443
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyber-green/20 flex items-center justify-center mt-1">
                    <Mail className="w-4 h-4 text-cyber-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <div className="space-y-1">
                      <a href="mailto:ganisettisatish34@gmail.com" className="block text-white hover:text-cyber-green transition-colors text-sm">
                        ganisettisatish34@gmail.com
                      </a>
                      <a href="mailto:torchbearer.startup@gmail.com" className="block text-white hover:text-cyber-green transition-colors text-sm">
                        torchbearer.startup@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyber-purple/20 flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-cyber-purple" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white text-sm">
                      Golagabathula Street,<br />
                      Yanam – 533464, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyber-blue/20 flex items-center justify-center mt-1">
                    <Globe className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Website</p>
                    <a href="https://thetorchbearer.xyz" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-green transition-colors">
                      thetorchbearer.xyz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
              <h3 className="text-xl font-semibold text-cyber-green mb-4">What We Offer</h3>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
              
              <Button
                className="w-full mt-6 bg-gradient-to-r from-cyber-blue to-cyber-green text-black font-semibold hover:scale-105 transition-transform"
                onClick={() => window.open('https://thetorchbearer.xyz', '_blank')}
              >
                🔗 Visit Official Site
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
            <h3 className="text-xl font-semibold text-cyber-green mb-4">📬 Contact TORCH BEARER</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-cyber-green font-semibold">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <Input
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full h-24 p-3 bg-cyber-dark border border-cyber-blue/30 rounded-md text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none resize-none"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-cyber-blue text-black hover:bg-cyber-blue/90 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TorchBearerModal;
