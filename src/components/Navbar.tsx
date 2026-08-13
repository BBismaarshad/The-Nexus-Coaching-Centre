import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageCircle, FileText } from 'lucide-react';
import { Logo } from './Logo';
import { CAMPUS_DETAILS } from '../data/mockData';

interface NavbarProps {
  onOpenInquiriesModal: () => void;
  inquiryCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiriesModal, inquiryCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Fee Estimator', href: '#fee-estimator' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-[#e1e3e4] shadow-sm py-3' 
        : 'bg-white border-[#e1e3e4] py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size="md" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f2c94c] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Call */}
            <a
              href={`tel:${CAMPUS_DETAILS.phone}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1a1a1a] bg-[#f8f9fa] hover:bg-[#edeeef] border border-[#e1e3e4] px-3 py-2 rounded-lg transition-colors"
              title="Call Campus Directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#745b00]" />
              <span>{CAMPUS_DETAILS.phoneDisplay}</span>
            </a>

            {/* Inquiries Portal Drawer Button */}
            <button
              onClick={onOpenInquiriesModal}
              className="relative flex items-center gap-1.5 text-xs font-semibold text-[#1a1a1a] bg-[#f2c94c]/20 hover:bg-[#f2c94c]/30 px-3 py-2 rounded-lg transition-colors border border-[#f2c94c]/40"
              title="View Submitted Student Applications"
            >
              <FileText className="w-3.5 h-3.5 text-[#1a1a1a]" />
              <span>Inquiries</span>
              {inquiryCount > 0 && (
                <span className="bg-[#1a1a1a] text-[#f2c94c] text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                  {inquiryCount}
                </span>
              )}
            </button>

            {/* Enroll Now CTA Button */}
            <a href="#inquiry" className="btn-primary py-2 px-4 text-xs font-bold">
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenInquiriesModal}
              className="relative p-2 text-xs font-semibold text-[#1a1a1a] bg-[#f2c94c]/20 rounded-lg border border-[#f2c94c]/40"
              title="View Inquiries"
            >
              <FileText className="w-4 h-4" />
              {inquiryCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1a1a1a] text-[#f2c94c] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {inquiryCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1a1a1a] rounded-lg hover:bg-[#f3f4f5] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e1e3e4] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#1a1a1a] py-2 border-b border-[#f3f4f5] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#745b00]" />
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={`tel:${CAMPUS_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#f8f9fa] border border-[#e1e3e4] text-[#1a1a1a] font-semibold text-sm rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#745b00]" />
              <span>Call: {CAMPUS_DETAILS.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CAMPUS_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white font-bold text-sm rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full py-3 text-sm font-bold"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
