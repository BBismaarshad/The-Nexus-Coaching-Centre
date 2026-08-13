import React, { useState } from 'react';
import { CAMPUS_DETAILS } from '../data/mockData';

interface LogoProps {
  showCampus?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ showCampus = true, size = 'md' }) => {
  const [imageError, setImageError] = useState(false);

  // Fallback SVG icon matching the Yellow Ribbon & Open Book Design
  const renderFallbackSvg = () => (
    <div className={`rounded-xl bg-[#1a1a1a] p-2 flex items-center justify-center border-2 border-[#f2c94c] shadow-sm ${
      size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11'
    }`}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#f2c94c] fill-current">
        {/* Open Book */}
        <path d="M 15 35 Q 35 25 50 35 Q 65 25 85 35 L 85 75 Q 65 65 50 75 Q 35 65 15 75 Z" opacity="0.9" />
        <path d="M 50 35 L 50 75" stroke="#1a1a1a" strokeWidth="3" />
        {/* Yellow Ribbon / Academic Shield Arch */}
        <path d="M 20 20 L 80 20 L 70 30 L 80 40 L 20 40 L 30 30 Z" fill="#f2c94c" />
      </svg>
    </div>
  );

  return (
    <div className="flex items-center gap-3">
      {!imageError && CAMPUS_DETAILS.logoImg ? (
        <img
          src={CAMPUS_DETAILS.logoImg}
          alt="The Nexus Coaching Centre Logo"
          className={`object-contain ${
            size === 'sm' ? 'h-9 w-auto' : size === 'lg' ? 'h-14 w-auto' : 'h-11 w-auto'
          }`}
          onError={() => setImageError(true)}
        />
      ) : (
        renderFallbackSvg()
      )}
      <div className="flex flex-col">
        <span className={`font-bold font-heading text-[#1a1a1a] tracking-tight leading-none ${
          size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg md:text-xl'
        }`}>
          The Nexus <span className="text-[#1a1a1a]">Coaching Centre</span>
        </span>
        {showCampus && (
          <span className="text-[11px] font-semibold text-[#6b5400] bg-[#f2c94c]/20 px-1.5 py-0.5 rounded w-fit mt-0.5 tracking-wider uppercase">
            Campus-1 • Nazimabad
          </span>
        )}
      </div>
    </div>
  );
};
