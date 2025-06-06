
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  features,
  liveUrl,
  githubUrl,
  technologies
}: ProjectCardProps) => {
  return (
    <div className="feature-card">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-osfm-accentBlue font-medium mb-4">{subtitle}</p>
        <p className="text-osfm-lightGray mb-4">{description}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-osfm-accentBlue mr-2">•</span>
              <span className="text-osfm-lightGray">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {technologies && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-osfm-darkBlue/50 text-osfm-accentBlue text-sm rounded-full border border-osfm-darkBlue/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        {liveUrl && (
          <Button className="btn-primary flex-1" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" className="btn-outline flex-1" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
