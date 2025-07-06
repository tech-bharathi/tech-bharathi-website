
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import TorchBearerModal from './TorchBearerModal';

const TorchBearerFloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 backdrop-blur-md border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 hover:text-white transition-all duration-300 px-4 py-3 rounded-full shadow-lg animate-glow-pulse group"
      >
        <Zap className="w-4 h-4 mr-2 group-hover:text-cyber-green transition-colors" />
        <span className="text-sm font-semibold">Powered by TORCH BEARER</span>
      </Button>

      <TorchBearerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default TorchBearerFloatingButton;
