
import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-full", inverted = false }) => {
  return (
    <img 
      src="https://line-consultancy.com/wp-content/uploads/2025/08/output-onlinepngtools-10.png"
      alt="Line Engineering Consultancy Logo"
      className={`${className} object-contain transition-all duration-500`}
      style={{ 
        filter: inverted ? 'brightness(0) saturate(100%)' : 'brightness(0) invert(1)' 
      }}
      loading="eager"
    />
  );
};

export default Logo;
