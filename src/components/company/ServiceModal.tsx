
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface ServiceModalProps {
  service: any;
  onClose: () => void;
  onApplyClick: () => void;
}

const ServiceModal = ({ service, onClose, onApplyClick }: ServiceModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-cyber-gray border-cyber-blue max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="text-center">
            <div className="text-6xl mb-4">{service.icon}</div>
            <CardTitle className="text-cyber-blue text-2xl">
              {service.title}
            </CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            {service.fullDescription}
          </p>
          
          <div>
            <h4 className="text-cyber-green font-semibold mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {service.included.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyber-blue">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-cyber-green font-semibold mb-2">Duration:</h4>
              <p className="text-gray-300">{service.duration}</p>
            </div>
            <div>
              <h4 className="text-cyber-green font-semibold mb-2">Safety Assurance:</h4>
              <p className="text-gray-300">{service.safety}</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-cyber-blue/30">
            <Button 
              className="w-full bg-cyber-green text-black hover:bg-cyber-green/80 py-3 text-lg animate-glow-pulse"
              onClick={onApplyClick}
            >
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceModal;
