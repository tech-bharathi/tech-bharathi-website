

2		-
import React from 'react';
3		-
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
4		-
import { Button } from '@/components/ui/button';
5		-
import { Input } from '@/components/ui/input';
6		-
import { X, Phone, Mail, MapPin, Globe, Zap } from 'lucide-react';
7		-
8		-
interface TorchBearerModalProps {
9		-
  isOpen: boolean;
10		-
  onClose: () => void;
11		-
}
12		-
13		-
const TorchBearerModal: React.FC<TorchBearerModalProps> = ({ isOpen, onClose }) => {
14		-
  const [contactForm, setContactForm] = React.useState({
15		-
    name: '',
16		-
    email: '',
17		-
    subject: '',
18		-
    message: ''
19		-
  });
20		-
  const [isSubmitted, setIsSubmitted] = React.useState(false);
21		-
22		-
  const handleSubmit = (e: React.FormEvent) => {
23		-
    e.preventDefault();
24		-
    console.log('TORCH BEARER contact form:', contactForm);
25		-
    setIsSubmitted(true);
26		-
    setTimeout(() => {
27		-
      setIsSubmitted(false);
28		-
      setContactForm({ name: '', email: '', subject: '', message: '' });
29		-
      onClose();
30		-
    }, 2000);
31		-
  };
32		-
33		-
  const services = [
34		-
    'Student Projects (IoT, Robotics, AI)',
35		-
    'Custom Automation Solutions',
36		-
    'Web/App Development',
37		-
    'AI Tools & Chatbot Integration',
38		-
    'Digital Marketing Services',
39		-
    'Online Courses & Tech Training',
40		-
    'Idea to Product Guidance'
41		-
  ];
42		-
43		-
  const subCompanies = [
44		-
    { name: 'TB Academy', description: 'Tech learning and value-based education', email: 'tbacademyofficial@gmail.com' },
45		-
    { name: 'Torchvia Solutions', description: 'Automation and software products', email: 'tbdigital.official@gmail.com' },
46		-
    { name: 'TB Digital', description: 'Digital marketing and brand building', email: 'tbdigital.official@gmail.com' },
47		-
    { name: 'TB Robotics', description: 'Coming soon...', email: 'torchbearer.startup@gmail.com' }
48		-
  ];
49		-
50		-
  return (
51		-
    <Dialog open={isOpen} onOpenChange={onClose}>
52		-
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark border-2 border-cyber-blue/30 backdrop-blur-xl">
53		-
        <DialogHeader className="relative">
54		-
          <DialogTitle className="text-3xl font-bold text-center text-cyber-blue mb-2">
55		-
            <Zap className="inline-block w-8 h-8 mr-2 text-cyber-green" />
56		-
            TORCH BEARER
57		-
          </DialogTitle>
58		-
          <p className="text-center text-cyber-green text-lg font-semibold">
59		-
            Lightning the Future, Transforming the World
60		-
          </p>
61		-
        </DialogHeader>
62		-
63		-
        <div className="space-y-8 mt-6">
64		-
          {/* About Section */}
65		-
          <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
66		-
            <h3 className="text-xl font-semibold text-cyber-green mb-4">About Us</h3>
67		-
            <p className="text-gray-300 mb-4 leading-relaxed">
68		-
              TORCH BEARER is an innovation ecosystem founded by visionary student entrepreneur 
69		-
              <span className="text-cyber-blue font-semibold"> Ganisetti Veera Venkata Satyanarayana (Satish)</span>. 
70		-
              Our mission is to build futuristic tech solutions in education, automation, digital marketing, and robotics.
71		-
            </p>
72		-
            
73		-
            <div className="grid md:grid-cols-2 gap-4 mt-6">
74		-
              {subCompanies.map((company, index) => (
75		-
                <div key={index} className="bg-cyber-dark/50 rounded-lg p-4 border border-cyber-green/20 hover:border-cyber-blue/40 transition-colors">
76		-
                  <h4 className="text-cyber-blue font-semibold">{company.name}</h4>
77		-
                  <p className="text-gray-400 text-sm mt-1">{company.description}</p>
78		-
                  <a href={`mailto:${company.email}`} className="text-cyber-green text-xs hover:underline">
79		-
                    {company.email}
80		-
                  </a>
81		-
                </div>
82		-
              ))}
83		-
            </div>
84		-
          </div>
85		-
86		-
          {/* Contact Information */}
87		-
          <div className="grid md:grid-cols-2 gap-6">
88		-
            <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
89		-
              <h3 className="text-xl font-semibold text-cyber-green mb-4">Contact Information</h3>
90		-
              <div className="space-y-4">
91		-
                <div className="flex items-start gap-3">
92		-
                  <div className="w-8 h-8 rounded-lg bg-cyber-blue/20 flex items-center justify-center mt-1">
93		-
                    <Phone className="w-4 h-4 text-cyber-blue" />
94		-
                  </div>
95		-
                  <div>
96		-
                    <p className="text-gray-400 text-sm">Phone</p>
97		-
                    <a href="tel:+916303987443" className="text-white hover:text-cyber-green transition-colors">
98		-
                      +91 6303987443
99		-
                    </a>
100		-
                  </div>
101		-
                </div>
102		-
103		-
                <div className="flex items-start gap-3">
104		-
                  <div className="w-8 h-8 rounded-lg bg-cyber-green/20 flex items-center justify-center mt-1">
105		-
                    <Mail className="w-4 h-4 text-cyber-green" />
106		-
                  </div>
107		-
                  <div>
108		-
                    <p className="text-gray-400 text-sm">Email</p>
109		-
                    <div className="space-y-1">
110		-
                      <a href="mailto:ganisettisatish34@gmail.com" className="block text-white hover:text-cyber-green transition-colors text-sm">
111		-
                        ganisettisatish34@gmail.com
112		-
                      </a>
113		-
                      <a href="mailto:torchbearer.startup@gmail.com" className="block text-white hover:text-cyber-green transition-colors text-sm">
114		-
                        torchbearer.startup@gmail.com
115		-
                      </a>
116		-
                    </div>
117		-
                  </div>
118		-
                </div>
119		-
120		-
                <div className="flex items-start gap-3">
121		-
                  <div className="w-8 h-8 rounded-lg bg-cyber-purple/20 flex items-center justify-center mt-1">
122		-
                    <MapPin className="w-4 h-4 text-cyber-purple" />
123		-
                  </div>
124		-
                  <div>
125		-
                    <p className="text-gray-400 text-sm">Address</p>
126		-
                    <p className="text-white text-sm">
127		-
                      Golagabathula Street,<br />
128		-
                      Yanam – 533464, India
129		-
                    </p>
130		-
                  </div>
131		-
                </div>
132		-
133		-
                <div className="flex items-start gap-3">
134		-
                  <div className="w-8 h-8 rounded-lg bg-cyber-blue/20 flex items-center justify-center mt-1">
135		-
                    <Globe className="w-4 h-4 text-cyber-blue" />
136		-
                  </div>
137		-
                  <div>
138		-
                    <p className="text-gray-400 text-sm">Website</p>
139		-
                    <a href="https://thetorchbearer.xyz" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-green transition-colors">
140		-
                      thetorchbearer.xyz
141		-
                    </a>
142		-
                  </div>
143		-
                </div>
144		-
              </div>
145		-
            </div>
146		-
147		-
            {/* Services */}
148		-
            <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
149		-
              <h3 className="text-xl font-semibold text-cyber-green mb-4">What We Offer</h3>
150		-
              <div className="space-y-2">
151		-
                {services.map((service, index) => (
152		-
                  <div key={index} className="flex items-center gap-2">
153		-
                    <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
154		-
                    <span className="text-gray-300 text-sm">{service}</span>
155		-
                  </div>
156		-
                ))}
157		-
              </div>
158		-
              
159		-
              <Button
160		-
                className="w-full mt-6 bg-gradient-to-r from-cyber-blue to-cyber-green text-black font-semibold hover:scale-105 transition-transform"
161		-
                onClick={() => window.open('https://thetorchbearer.xyz', '_blank')}
162		-
              >
163		-
                🔗 Visit Official Site
164		-
              </Button>
165		-
            </div>
166		-
          </div>
167		-
168		-
          {/* Contact Form */}
169		-
          <div className="bg-cyber-gray/20 rounded-xl p-6 border border-cyber-blue/20">
170		-
            <h3 className="text-xl font-semibold text-cyber-green mb-4">📬 Contact TORCH BEARER</h3>
171		-
            
172		-
            {isSubmitted ? (
173		-
              <div className="text-center py-8">
174		-
                <div className="text-4xl mb-4">✅</div>
175		-
                <p className="text-cyber-green font-semibold">Message sent successfully!</p>
176		-
              </div>
177		-
            ) : (
178		-
              <form onSubmit={handleSubmit} className="space-y-4">
179		-
                <div className="grid md:grid-cols-2 gap-4">
180		-
                  <Input
181		-
                    placeholder="Your Name"
182		-
                    value={contactForm.name}
183		-
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
184		-
                    className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400"
185		-
                    required
186		-
                  />
187		-
                  <Input
188		-
                    type="email"
189		-
                    placeholder="Your Email"
190		-
                    value={contactForm.email}
191		-
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
192		-
                    className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400"
193		-
                    required
194		-
                  />
195		-
                </div>
196		-
                <Input
197		-
                  placeholder="Subject"
198		-
                  value={contactForm.subject}
199		-
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
200		-
                  className="bg-cyber-dark border-cyber-blue/30 text-white placeholder-gray-400"
201		-
                  required
202		-
                />
203		-
                <textarea
204		-
                  placeholder="Your Message"
205		-
                  value={contactForm.message}
206		-
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
207		-
                  className="w-full h-24 p-3 bg-cyber-dark border border-cyber-blue/30 rounded-md text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none resize-none"
208		-
                  required
209		-
                />
210		-
                <Button 
211		-
                  type="submit"
212		-
                  className="w-full bg-cyber-blue text-black hover:bg-cyber-blue/90 font-semibold"
213		-
                >
214		-
                  Send Message
215		-
                </Button>
216		-
              </form>
217		-
            )}
218		-
          </div>
219		-
        </div>
220		-
      </DialogContent>
221		-
    </Dialog>
222		-
  );
223		-
};
224		-
225		-
export default TorchBearerModal;
