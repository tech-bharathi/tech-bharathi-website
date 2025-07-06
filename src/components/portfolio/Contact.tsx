
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Mail, Instagram, Github, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare form data for Google Sheets
      const googleSheetsData = new FormData();
      googleSheetsData.append('name', formData.name);
      googleSheetsData.append('email', formData.email);
      googleSheetsData.append('subject', formData.subject);
      googleSheetsData.append('message', formData.message);

      console.log('Submitting form data to Google Sheets:', formData);

      const response = await fetch('https://script.google.com/macros/s/AKfycbx7hEqf79jgkQ4NGkSEeUGkDUb3rZwwMemsUSlU_jzDx71qSFMz6pAhuUnYeMD3AFzycg/exec', {
        method: 'POST',
        body: googleSheetsData,
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Since we're using no-cors, we can't check the response status
      // We'll assume success if no error is thrown
      console.log('Form submitted successfully to Google Sheets');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ariyalur, Tamil Nadu, India',
      action: () => window.open('https://maps.google.com/?q=Ariyalur,Tamil+Nadu,India', '_blank')
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 74183 54139',
      action: () => window.open('tel:+917418354139', '_blank')
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Direct Chat',
      action: () => window.open('https://wa.me/917806981118', '_blank')
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'techbharathi123@gmail.com',
      action: () => window.open('mailto:techbharathi123@gmail.com', '_blank')
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/tech_bharathi' },
    { icon: Github, name: 'GitHub', url: 'https://github.com/techbharathi' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/techbharathi' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/bharathi-m' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-cyber-dark to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-cyber-blue mb-4 animate-fade-in">
            Get In Touch
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ready to start your cybersecurity journey or need expert assistance? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-cyber-green mb-6">Contact Information</h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card 
                      key={index}
                      className="bg-cyber-gray/20 border-cyber-blue/30 hover:border-cyber-green hover:bg-cyber-gray/30 transition-all duration-300 cursor-pointer group"
                      onClick={item.action}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-cyber-blue/20 flex items-center justify-center group-hover:bg-cyber-green/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-cyber-blue group-hover:text-cyber-green transition-colors" />
                          </div>
                          <div>
                            <h5 className="text-cyber-green font-semibold mb-1">{item.label}</h5>
                            <p className="text-gray-300 hover:text-white transition-colors">{item.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-2xl font-semibold text-cyber-green mb-6">Follow Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-16 border-cyber-blue/30 text-cyber-blue hover:border-cyber-green hover:bg-cyber-green/10 hover:text-cyber-green transition-all duration-300 group"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{social.name}</span>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-cyber-gray/20 border-cyber-blue/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-cyber-blue text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 animate-bounce">✅</div>
                  <h4 className="text-cyber-green text-2xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-gray-300">Your message has been received! I'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-green h-12"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-green h-12"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-green h-12"
                    required
                    disabled={isSubmitting}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-32 p-4 bg-cyber-dark border border-cyber-blue/30 rounded-md text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none resize-none"
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-cyber-blue text-black hover:bg-cyber-blue/90 h-12 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* TORCH BEARER Partnership Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10 rounded-2xl p-8 border border-cyber-blue/20">
            <h4 className="text-2xl font-semibold text-cyber-green mb-4">In Collaboration With</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <h5 className="text-3xl font-bold text-cyber-blue mb-2">⚡ TORCH BEARER</h5>
                <p className="text-gray-300 max-w-md">
                  This platform is built and maintained with the support of TORCH BEARER – a futuristic innovation company revolutionizing education, robotics, and digital solutions.
                </p>
              </div>
              <Button
                className="bg-gradient-to-r from-cyber-blue to-cyber-green text-black font-semibold px-8 py-3 hover:scale-105 transition-transform"
                onClick={() => window.open('https://thetorchbearer.xyz', '_blank')}
              >
                Explore TORCH BEARER →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
