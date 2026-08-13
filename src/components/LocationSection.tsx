import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Building2 } from 'lucide-react';
import { CAMPUS_DETAILS } from '../data/mockData';

export const LocationSection: React.FC = () => {
  const [mapIframeError, setMapIframeError] = useState(false);

  return (
    <section id="location" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-b border-[#e1e3e4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 bg-[#f2c94c]/20 text-[#6b5400] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Campus-1 Location
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1a1a1a] tracking-tight">
            Nazimabad Block 3 Campus
          </h2>
          <p className="text-sm sm:text-base text-[#1a1a1a]/80 mt-1 max-w-xl">
            Situated centrally on Sharah-e-Sher Shah Suri for convenient access across Nazimabad and surrounding districts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Campus Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#e1e3e4] shadow-sm flex flex-col justify-between">
            
            <div className="space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#e1e3e4]">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] text-[#f2c94c] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1a1a1a]">
                    The Nexus Coaching Centre
                  </h3>
                  <span className="text-xs font-semibold text-[#6b5400] bg-[#f2c94c]/20 px-2 py-0.5 rounded">
                    Campus-1 (Nazimabad Branch)
                  </span>
                </div>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#f2c94c]/20 text-[#1a1a1a] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1a1a1a]/60 uppercase tracking-wider block mb-0.5">
                    Official Address
                  </span>
                  <p className="text-sm font-semibold text-[#1a1a1a] leading-snug">
                    1/18 - 3B, Sharah-e-Sher Shah Suri,<br />
                    Nazimabad 3 Block 3, Nazimabad,<br />
                    Karachi, Sindh 74600
                  </p>
                </div>
              </div>

              {/* Contact Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#f2c94c]/20 text-[#1a1a1a] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1a1a1a]/60 uppercase tracking-wider block mb-0.5">
                    Phone & Admissions Help Desk
                  </span>
                  <a
                    href={`tel:${CAMPUS_DETAILS.phone}`}
                    className="text-base font-bold text-[#1a1a1a] hover:text-[#745b00] transition-colors block"
                  >
                    {CAMPUS_DETAILS.phoneDisplay}
                  </a>
                  <span className="text-xs text-[#1a1a1a]/70">Available on WhatsApp 24/7</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#f2c94c]/20 text-[#1a1a1a] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1a1a1a]/60 uppercase tracking-wider block mb-0.5">
                    Operating Hours
                  </span>
                  <p className="text-sm font-semibold text-[#1a1a1a]">
                    {CAMPUS_DETAILS.operatingHours}
                  </p>
                  <span className="text-xs text-[#1a1a1a]/70">Monday through Saturday</span>
                </div>
              </div>

            </div>

            {/* Direct Google Maps Action Button */}
            <div className="pt-6 border-t border-[#e1e3e4] mt-6">
              <a
                href={CAMPUS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-3 text-sm font-bold flex items-center justify-center gap-2 bg-white"
              >
                <Navigation className="w-4 h-4 text-[#1a1a1a]" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location View */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-[#e1e3e4] shadow-sm min-h-[350px] relative flex flex-col">
            
            {/* Interactive Embedded Google Map / Fallback Graphic */}
            {!mapIframeError ? (
              <iframe
                title="The Nexus Coaching Centre Nazimabad Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.361421008681!2d67.0278!3d24.9228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9821815159%3A0x1d2179b50b9a3028!2sNazimabad%20Block%203%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setMapIframeError(true)}
              />
            ) : (
              <div 
                className="w-full h-full min-h-[380px] bg-cover bg-center relative p-8 flex flex-col justify-between"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_7kUQCSh4B47NCdS3z2iusacg36oa5LwVs1bncsabAWgjRpnAsa377ARyfFAGDEEMjKS_dSqDFuKKShfjJ6u6stHEXNyCx-zW4oqWXaVtvxnrakxQnjQN9oYtLeemUdcjwr9vjYz_7ARUVoFq-HX-PrEokKynWS_z3zbfOcy1Id50Q6HEjHgA62h7kaxrMW6xWeyA2WM7uKS8gq6k4CaBf6BNiaD-8A_R5gh_n8CQ-avR-rikzA')`
                }}
              >
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-[#e1e3e4] max-w-sm">
                  <div className="font-bold text-sm text-[#1a1a1a]">Nazimabad Block 3 Campus</div>
                  <div className="text-xs text-[#1a1a1a]/70">Sharah-e-Sher Shah Suri, Karachi</div>
                </div>

                <a
                  href={CAMPUS_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 px-4 text-xs font-bold w-fit shadow-lg"
                >
                  <span>Open Full Interactive Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Map Header Overlay Bar */}
            <div className="bg-[#1a1a1a] text-white p-3 px-5 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f2c94c] animate-pulse" />
                <span>Campus-1 Active Desk</span>
              </div>
              <span className="text-gray-300 font-normal">Nazimabad 3 Block 3, Karachi</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
