
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Features from '../components/Features';
import CodeBlock from '../components/CodeBlock';
import { ArrowRight, Github, ExternalLink, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-osfm-lightGray">
      <Navigation />
      <Hero />
      
      <Section 
        id="overview" 
        title="What is OSFM?" 
        subtitle="OSFM is a powerful Python module designed for network system management."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              OSFM is a dual-mode Python module that provides comprehensive solutions for remote 
              file management and system access across your IT infrastructure.
            </p>
            <p className="mb-4">
              Operating in both Server and Client modes, OSFM enables administrators to 
              efficiently manage applications, user accounts, network access, and remote 
              desktop connections from a centralized location.
            </p>
            <p>
              Whether you're managing a small office network or a large enterprise 
              environment, OSFM simplifies your IT administration tasks.
            </p>
          </div>
          <div className="bg-gradient-to-br from-osfm-darkBlue to-black p-8 rounded-lg border border-osfm-darkBlue/50">
            <h3 className="text-2xl font-bold mb-4 text-white">Key Capabilities</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-osfm-accentBlue mr-2">&#8226;</span>
                Remote Desktop Access
              </li>
              <li className="flex items-start">
                <span className="text-osfm-accentBlue mr-2">&#8226;</span>
                Application Management
              </li>
              <li className="flex items-start">
                <span className="text-osfm-accentBlue mr-2">&#8226;</span>
                User Account Control
              </li>
              <li className="flex items-start">
                <span className="text-osfm-accentBlue mr-2">&#8226;</span>
                Network Access Management
              </li>
              <li className="flex items-start">
                <span className="text-osfm-accentBlue mr-2">&#8226;</span>
                Centralized System Administration
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      <Section 
        id="features" 
        title="Key Features" 
        className="bg-gradient-to-b from-black to-osfm-darkBlue/20"
      >
        <Features />
      </Section>
      
      <Section id="installation" title="Installation Instructions">
        <div className="max-w-3xl mx-auto">
          <p className="mb-6">
            Installing OSFM is straightforward using pip. Follow these steps to get started:
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-white">Prerequisites</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Python 3.6 or higher</li>
            <li>pip package manager</li>
            <li>Administrative privileges on Windows systems</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3 text-white">Installation Command</h3>
          <CodeBlock code="pip install osfm" />
          
          <p className="mt-4">
            This command will install OSFM and all its dependencies to your Python environment.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3 text-white">Verify Installation</h3>
            <CodeBlock code="python -c 'import osfm; print(osfm.__version__)'" />
          </div>
        </div>
      </Section>
      
      <Section 
        id="usage" 
        title="How to Use" 
        className="bg-gradient-to-b from-osfm-darkBlue/20 to-black"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-3 text-white">Server Mode</h3>
          <p className="mb-4">
            To initialize OSFM in server mode, use the following command:
          </p>
          <CodeBlock code="python -m osfm --server" />
          
          <p className="mt-4 mb-6">
            This will start the OSFM server and share the temporary folder for client connections.
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-white">Client Mode</h3>
          <p className="mb-4">
            To connect to an OSFM server and run in client mode:
          </p>
          <CodeBlock code="python -m osfm --client" />
          
          <p className="mt-4 mb-6">
            This will launch OSFM in Client mode and search for Servers periodically.
          </p>
        </div>
      </Section>
      
      
      
      <Section 
        id="download" 
        title="Download OSFM" 
        className="bg-gradient-to-b from-black to-osfm-darkBlue/20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8">
            Get the latest version of OSFM and start optimizing your network management today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a 
              href="https://pypi.org/project/osfm/" 
              className="feature-card flex flex-col items-center justify-center p-8 hover:bg-osfm-darkBlue/30"
            >
              <Package size={48} className="text-osfm-accentBlue mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">PyPI Package</h3>
              <p className="text-osfm-lightGray mb-4 text-center">Official release on Python Package Index</p>
              <Button className="btn-primary">
                Download from PyPI
              </Button>
            </a>
            
            <a 
              href="https://github.com/RishiSpace/osfm/tree/osfm-py" 
              className="feature-card flex flex-col items-center justify-center p-8 hover:bg-osfm-darkBlue/30"
            >
              <Github size={48} className="text-osfm-accentBlue mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Source Code</h3>
              <p className="text-osfm-lightGray mb-4 text-center">Latest development version on GitHub</p>
              <Button variant="outline" className="btn-outline">
                View on GitHub
              </Button>
            </a>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-white">Installation Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-white mb-2">From PyPI</h4>
                <CodeBlock code="pip install osfm" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Clone From Source</h4>
                <CodeBlock code="git clone https://github.com/RishiSpace/osfm -b osfm-py" />
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <footer className="bg-black py-16 border-t border-osfm-darkBlue/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-osfm-accentBlue animate-glow mb-2">OSFM</h2>
              <p className="text-osfm-lightGray">Network System Management Made Simple</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a href="https://github.com/RishiSpace" className="flex items-center text-osfm-lightGray hover:text-osfm-accentBlue transition-colors">
                <Github size={18} className="mr-2" />
                <span>GitHub</span>
              </a>
              <a href="https://pypi.org/project/osfm/" className="flex items-center text-osfm-lightGray hover:text-osfm-accentBlue transition-colors">
                <ExternalLink size={18} className="mr-2" />
                <span>PyPI</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-osfm-darkBlue/30 pt-8 text-center md:text-left md:flex md:justify-between md:items-center">
            <p className="text-sm text-osfm-lightGray/70">
              &copy; {new Date().getFullYear()} OSFM. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              {/* <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <li><a href="#" className="text-osfm-lightGray/70 hover:text-osfm-accentBlue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-osfm-lightGray/70 hover:text-osfm-accentBlue transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-osfm-lightGray/70 hover:text-osfm-accentBlue transition-colors">Contact</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
