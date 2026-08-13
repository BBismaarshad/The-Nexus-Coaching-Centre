import React, { useState } from 'react';
import { Star, MessageCircle, ArrowRight, ShieldCheck, Award, Users, MapPin } from 'lucide-react';
import { CAMPUS_DETAILS } from '../data/mockData';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#e1e3e4]">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Google Reviews Trust Badge */}
            <a 
              href="#reviews"
              className="inline-flex items-center gap-2 bg-[#f8f9fa] hover:bg-[#edeeef] border border-[#e1e3e4] py-1.5 px-3.5 rounded-full transition-all text-xs font-semibold text-[#1a1a1a] shadow-xs group"
            >
              <div className="flex items-center gap-0.5 text-[#f2c94c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#f2c94c] text-[#f2c94c]" />
                ))}
              </div>
              <span className="font-bold text-[#1a1a1a]">32+ 5-Star Reviews on Google</span>
              <span className="text-[#6b5400] text-[10px] bg-[#f2c94c] px-1.5 py-0.2 rounded font-bold uppercase ml-1">
                Verified
              </span>
            </a>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.15]">
              Building Strong Academic{' '}
              <span className="relative inline-block text-[#1a1a1a]">
                <span className="relative z-10">Foundations</span>
                <span className="absolute bottom-1.5 left-0 w-full h-3.5 bg-[#f2c94c] -z-0 -rotate-1 rounded-sm opacity-90"></span>
              </span>{' '}
              in Nazimabad
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#1a1a1a]/80 leading-relaxed max-w-2xl">
              Quality Coaching for <strong className="text-[#1a1a1a] font-semibold">IX, X, Matric, Intermediate & Board Examination Success</strong>. Expert subject faculty, structured curriculum, weekly testing, and a proven track record.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a href="#inquiry" className="btn-primary text-sm sm:text-base py-3.5 px-7">
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${CAMPUS_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm sm:text-base py-3.5 px-6 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#e1e3e4] w-full max-w-xl text-left">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#1a1a1a]">98%+</span>
                <span className="text-xs text-[#1a1a1a]/70 font-medium">Board Pass Rate</span>
              </div>
              <div className="flex flex-col border-l border-[#e1e3e4] pl-3 sm:pl-6">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#1a1a1a]">Small</span>
                <span className="text-xs text-[#1a1a1a]/70 font-medium">Batch Sizes</span>
              </div>
              <div className="flex flex-col border-l border-[#e1e3e4] pl-3 sm:pl-6">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#1a1a1a]">Sindh Board</span>
                <span className="text-xs text-[#1a1a1a]/70 font-medium">Specialized Notes</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Banner */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#e1e3e4] shadow-xl bg-[#f8f9fa] group">
              
              {/* Image banner with high-key classroom backdrop */}
              {imageLoaded ? (
                <img
                  src={CAMPUS_DETAILS.heroBannerImg}
                  alt="Students attending focused academic coaching session at The Nexus Coaching Centre Nazimabad"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <div className="w-full h-[380px] sm:h-[460px] bg-gradient-to-br from-[#1a1a1a] to-[#2e3132] text-white p-8 flex flex-col justify-between relative">
                  <div className="flex items-center gap-2 bg-[#f2c94c] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-bold w-fit">
                    Campus-1 Nazimabad
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-[#f2c94c] mb-2">Focused Learning Environment</h3>
                    <p className="text-sm text-gray-200">Air-conditioned classrooms, dedicated subject faculty, and board exam target practice in Nazimabad Block 3.</p>
                  </div>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge 1 - Top Right */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#e1e3e4] flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#f2c94c]/20 flex items-center justify-center text-[#745b00]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#1a1a1a] leading-tight">Sindh Board Pattern</div>
                  <div className="text-[10px] text-[#1a1a1a]/70 font-semibold">IX, X, XI, XII Science</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-[#e1e3e4] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#1a1a1a] text-[#f2c94c] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1a1a1a]">Nazimabad Block 3 Campus</div>
                    <div className="text-[11px] text-[#1a1a1a]/70 font-medium">Sharah-e-Sher Shah Suri</div>
                  </div>
                </div>

                <a
                  href="#location"
                  className="text-xs font-bold text-[#1a1a1a] bg-[#f2c94c] hover:bg-[#e2ba38] px-3 py-1.5 rounded-lg transition-colors"
                >
                  Location
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
