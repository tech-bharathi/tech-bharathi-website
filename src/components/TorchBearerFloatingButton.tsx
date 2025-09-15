import React, { useState } from 'react';


3		-
import { Button } from '@/components/ui/button';
4		-
import { Zap } from 'lucide-react';
5		-
import TorchBearerModal from './TorchBearerModal';
6		-
7		-
const TorchBearerFloatingButton = () => {
8		-
  const [isModalOpen, setIsModalOpen] = useState(false);
9		-
10		-
  return (
11		-
    <>
12		-
      <Button
13		-
        onClick={() => setIsModalOpen(true)}
14		-
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 backdrop-blur-md border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 hover:text-white transition-all duration-300 px-4 py-3 rounded-full shadow-lg animate-glow-pulse group"
15		-
      >
16		-
        <Zap className="w-4 h-4 mr-2 group-hover:text-cyber-green transition-colors" />
17		-
        <span className="text-sm font-semibold">Powered by TORCH BEARER</span>
18		-
      </Button>
19		-
20		-
      <TorchBearerModal 
21		-
        isOpen={isModalOpen} 
22		-
        onClose={() => setIsModalOpen(false)} 
23		-
      />
24		-
    </>
25		-
  );
26		-
};


27		-
28		-
export default TorchBearerFloatingButton;
