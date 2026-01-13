
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-full", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Main Stylized 'L' Block - Bottom Left Corner */}
      <path 
        d="M120 120V380H380V320H180V120H120Z" 
        fill={color} 
      />
      {/* Middle Horizontal Bar */}
      <rect x="240" y="230" width="140" height="50" fill={color} />
      {/* Top Right Square Accent */}
      <rect x="330" y="120" width="50" height="50" fill={color} />
    </svg>
  );
};

export default Logo;
