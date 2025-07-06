
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, CheckCircle } from 'lucide-react';

interface ApplyFormProps {
  service: any;
  onClose: () => void;
}

const ApplyForm = ({ service, onClose }: ApplyFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: `Service Request: ${service?.title || 'General'}`,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
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

      console.log('Submitting service form data to Google Sheets:', formData);

      const response = await fetch('https://script.google.com/macros/s/AKfycbx7hEqf79jgkQ4NGkSEeUGkDUb3rZwwMemsUSlU_jzDx71qSFMz6pAhuUnYeMD3AFzycg/exec', {
        method: 'POST',
        body: googleSheetsData,
        mode: 'no-cors' // Required for Google Apps Script
      });

      console.log('Service form submitted successfully to Google Sheets');
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting service form:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-cyber-gray border-cyber-green">
          <CardContent className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-cyber-green mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-cyber-green mb-4">
              ✅ Thank you! Your message has been received.
            </h3>
            <p className="text-gray-300 mb-6">
              We'll contact you within 24 hours to discuss your service request.
            </p>
            <Button 
              onClick={onClose}
              className="bg-cyber-blue text-black hover:bg-cyber-blue/80"
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-cyber-gray border-cyber-blue max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <CardTitle className="text-cyber-blue text-2xl text-center">
            Request Service
          </CardTitle>
          {service && (
            <p className="text-cyber-green text-center">{service.title}</p>
          )}
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 text-sm">{submitError}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-cyber-green mb-2">
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="bg-cyber-dark border-cyber-blue text-white focus:border-cyber-green"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-cyber-green mb-2">
                Email Address *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="bg-cyber-dark border-cyber-blue text-white focus:border-cyber-green"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-cyber-green mb-2">
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="bg-cyber-dark border-cyber-blue text-white focus:border-cyber-green"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-cyber-green mb-2">
                Describe Your Issue *
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                rows={4}
                className="bg-cyber-dark border-cyber-blue text-white focus:border-cyber-green resize-none"
                placeholder="Please describe your issue in detail..."
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyber-green text-black hover:bg-cyber-green/80 py-3 text-lg animate-glow-pulse"
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplyForm;
