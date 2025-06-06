
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-hero-gradient overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-osfm-accentBlue/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-osfm-darkBlue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-osfm-accentBlue">OSFM</span> Ecosystem
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Operating System Function Management
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-osfm-lightGray">
            A comprehensive suite of tools for modern developers and system administrators
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary group" asChild>
              <a href="#projects">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button className="btn-outline" asChild>
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
