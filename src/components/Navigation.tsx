
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-osfm-accentBlue animate-glow">OSFM</a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#installation" className="nav-link">Installation</a>
            <a href="#usage" className="nav-link">Usage</a>
            <a href="#logging" className="nav-link">Logging</a>
            <a href="#download" className="nav-link">Download</a>
            <Button className="btn-primary ml-4">Get Started</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-osfm-lightGray hover:text-osfm-accentBlue"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#overview" className="nav-link" onClick={toggleMenu}>Overview</a>
            <a href="#features" className="nav-link" onClick={toggleMenu}>Features</a>
            <a href="#installation" className="nav-link" onClick={toggleMenu}>Installation</a>
            <a href="#usage" className="nav-link" onClick={toggleMenu}>Usage</a>
            <a href="#logging" className="nav-link" onClick={toggleMenu}>Logging</a>
            <a href="#download" className="nav-link" onClick={toggleMenu}>Download</a>
            <Button className="btn-primary w-full">Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
