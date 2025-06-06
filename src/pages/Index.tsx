
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Features from '../components/Features';
import CodeBlock from '../components/CodeBlock';
import { Github, ExternalLink } from 'lucide-react';

const Index = () => {
  const projects = [
    {
      title: "OSFM Credentials Manager",
      subtitle: "osfm-creds",
      description: "A modern, open source, privacy-focused credentials manager built with React, TypeScript, and Tailwind CSS. Securely store, manage, and back up your sensitive credentials directly in your browser.",
      features: [
        "Local-First Security with browser encryption",
        "Google Drive Backup integration",
        "Multiple credential types (API keys, SSH keys, GPG keys, passwords)",
        "Tagging & Search functionality",
        "Import/Export capabilities",
        "Dark/Light/AMOLED themes",
        "Open source & auditable"
      ],
      liveUrl: "https://osfm-creds.rishisp.tech",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Google Drive API"]
    },
    {
      title: "OSFM Markdown Editor",
      subtitle: "osfm-md",
      description: "A web-based application designed to provide a seamless and efficient experience for writing and editing Markdown documents with a user-friendly interface.",
      features: [
        "Real-time Preview of Markdown rendering",
        "Syntax Highlighting for various Markdown elements",
        "Responsive Design for all screen sizes",
        "Distraction-free writing environment",
        "Instant visualization of final document"
      ],
      liveUrl: "https://osfm-md.rishisp.tech",
      technologies: ["React", "Markdown Parser", "Syntax Highlighting"]
    },
    {
      title: "OSFM AI Terminal Assistant",
      subtitle: "osfm-ata",
      description: "A web-based application that leverages Natural Language Processing to generate terminal commands from natural language queries, simplifying complex command creation.",
      features: [
        "Natural Language Processing for command generation",
        "Multiple terminal type support (bash, powershell)",
        "Query parsing and command generation",
        "Copy-to-clipboard functionality",
        "User-friendly web interface"
      ],
      liveUrl: "https://osfm-ata.rishisp.tech",
      technologies: ["NLP", "AI/ML", "Terminal Commands", "Web Interface"]
    },
    {
      title: "OSFM Network Manager",
      subtitle: "osfm-net",
      description: "A powerful Python module designed for network system management, operating in both Server and Client modes for comprehensive IT infrastructure management.",
      features: [
        "Dual-mode operation (Server and Client)",
        "Remote Desktop Access",
        "Application Management via Winget",
        "User Account Control",
        "Network Access Management",
        "Centralized System Administration"
      ],
      githubUrl: "https://github.com/RishiSpace/osfm-net",
      technologies: ["Python", "Network Management", "Remote Desktop", "System Administration"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-osfm-lightGray">
      <Navigation />
      <Hero />
      
      <Section 
        id="about" 
        title="About OSFM" 
        subtitle="A comprehensive ecosystem of developer and system administration tools."
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            OSFM is a comprehensive suite of tools designed to enhance 
            productivity for developers, system administrators, and power users. Each project in the OSFM 
            ecosystem addresses specific needs in modern computing workflows.
          </p>
          <p className="text-lg mb-6">
            From secure credential management to intelligent terminal assistance, from markdown editing to 
            network system management, OSFM provides robust, open-source solutions that prioritize security, 
            usability, and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-osfm-accentBlue mb-2">4</div>
              <div className="text-osfm-lightGray">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-osfm-accentBlue mb-2">100%</div>
              <div className="text-osfm-lightGray">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-osfm-accentBlue mb-2">Privacy</div>
              <div className="text-osfm-lightGray">Focused</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-osfm-accentBlue mb-2">Modern</div>
              <div className="text-osfm-lightGray">Tech Stack</div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section 
        id="projects" 
        title="OSFM Projects" 
        className="bg-gradient-to-b from-black to-osfm-darkBlue/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      <Section 
        id="features" 
        title="OSFM-Net Features" 
        subtitle="Comprehensive network management capabilities for modern IT infrastructure."
        className="bg-gradient-to-b from-osfm-darkBlue/20 to-black"
      >
        <Features />
      </Section>

      <Section 
        id="installation" 
        title="Getting Started with OSFM-Net"
        className="bg-gradient-to-b from-black to-osfm-darkBlue/20"
      >
        <div className="max-w-3xl mx-auto">
          <p className="mb-6">
            Get started with OSFM Network Manager, our Python-based network system management tool:
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-white">Prerequisites</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Python 3.11 or higher</li>
            <li>pip package manager</li>
            <li>Administrative privileges on Windows systems</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3 text-white">Installation</h3>
          <CodeBlock code="pip install osfm" />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-white mb-2">Server Mode</h4>
              <CodeBlock code="python -m osfm --server" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Client Mode</h4>
              <CodeBlock code="python -m osfm --client" />
            </div>
          </div>
        </div>
      </Section>
      
      <footer className="bg-black py-16 border-t border-osfm-darkBlue/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-osfm-accentBlue animate-glow mb-2">OSFM</h2>
              <p className="text-osfm-lightGray">Operating System Function Management</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a href="https://github.com/RishiSpace" className="flex items-center text-osfm-lightGray hover:text-osfm-accentBlue transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-2" />
                <span>GitHub</span>
              </a>
              <a href="https://pypi.org/project/osfm/" className="flex items-center text-osfm-lightGray hover:text-osfm-accentBlue transition-colors" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-2" />
                <span>PyPI</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-osfm-darkBlue/30 pt-8 text-center md:text-left md:flex md:justify-between md:items-center">
            <p className="text-sm text-osfm-lightGray/70">
              &copy; {new Date().getFullYear()} OSFM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
