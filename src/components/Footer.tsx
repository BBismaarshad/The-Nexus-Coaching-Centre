import React from 'react';
import { Logo } from './Logo';
import { CAMPUS_DETAILS } from '../data/mockData';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-12 border-t-4 border-t-[#f2c94c] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Logo & Brand Description (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-2 rounded-xl inline-block">
              <Logo size="md" />
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Building strong academic foundations for Class IX, X, Matric, Intermediate & Board Examinations in Nazimabad Block 3, Karachi.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f2c94c] animate-pulse" />
              <span className="text-xs font-semibold text-[#f2c94c]">
                Campus-1 Admissions Open for New Session
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation Links (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#f2c94c] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#f2c94c] transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#f2c94c] transition-colors">Academic Programs</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#f2c94c] transition-colors">Why Choose Nexus</a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-[#f2c94c] transition-colors">Faculty Specialists</a>
              </li>
              <li>
                <a href="#fee-estimator" className="hover:text-[#f2c94c] transition-colors">Fee Structure & Estimator</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#f2c94c] transition-colors">Campus Location</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Campus Desk (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#f2c94c] uppercase tracking-wider">
              Campus Desk & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f2c94c] shrink-0 mt-0.5" />
                <span>1/18 - 3B, Sharah-e-Sher Shah Suri, Nazimabad 3 Block 3, Karachi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f2c94c] shrink-0" />
                <a href={`tel:${CAMPUS_DETAILS.phone}`} className="hover:text-[#f2c94c] transition-colors font-semibold">
                  {CAMPUS_DETAILS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#f2c94c] shrink-0" />
                <span>{CAMPUS_DETAILS.operatingHours}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`https://wa.me/${CAMPUS_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4 bg-[#25D366] text-white hover:bg-[#20ba5a] border-none inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quick WhatsApp Help Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2024 The Nexus Coaching Centre (Campus-1 Nazimabad). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
