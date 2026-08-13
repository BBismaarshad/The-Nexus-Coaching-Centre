import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CAMPUS_DETAILS } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [dismissedTooltip, setDismissedTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* Tooltip Popup */}
      {!dismissedTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#1a1a1a] text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-[#e1e3e4] animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#6b5400] uppercase font-extrabold">Campus-1 Desk</span>
            <span>Need Admission Guidance?</span>
          </div>
          <button
            onClick={() => setDismissedTooltip(true)}
            className="text-gray-400 hover:text-black p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular Green WhatsApp Icon Button */}
      <a
        href={`https://wa.me/${CAMPUS_DETAILS.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Nazimabad Desk"
        className="relative group w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 ring-4 ring-white/80"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        
        {/* Live Active Online Green Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full animate-ping" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>

    </div>
  );
};
