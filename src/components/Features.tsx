
import React from 'react';
import { Server, Monitor, Package, Users, Network, ExternalLink } from 'lucide-react';

const featureItems = [
  {
    title: "Server Mode",
    description: "Initializes the OSFM server and shares the temporary folder for seamless network management.",
    icon: Server
  },
  {
    title: "Client Mode",
    description: "Enables RDP connections and starts the main client application for remote access.",
    icon: Monitor
  },
  {
    title: "Application Management",
    description: "Install and uninstall apps using Winget Package Manager across your entire network.",
    icon: Package
  },
  {
    title: "User Account Management",
    description: "Create and delete user accounts for all connected clients with ease.",
    icon: Users
  },
  {
    title: "Network Access Control",
    description: "Enable or disable internet access network-wide with simple command controls.",
    icon: Network
  },
  {
    title: "RDP Access",
    description: "Gain full control by RDP into individual systems for direct management.",
    icon: ExternalLink
  }
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featureItems.map((feature, index) => (
        <div 
          key={index} 
          className="feature-card"
        >
          <div className="mb-4 text-osfm-accentBlue">
            <feature.icon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
          <p className="text-osfm-lightGray">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
