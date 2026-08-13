import React, { useState } from 'react';
import { GraduationCap, ClipboardCheck, ShieldCheck, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { METRICS, CAMPUS_DETAILS } from '../data/mockData';

export const WhyUs: React.FC = () => {
  const [activeFacilityIndex, setActiveFacilityIndex] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#1a1a1a]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-[#1a1a1a]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#1a1a1a]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#1a1a1a]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#1a1a1a]" />;
    }
  };

  const detailedFacilities = [
    {
      title: 'Decades of Board Exam Mastery',
      detail: 'Our faculty members are active subject specialists with deep insights into BSEK (Matric) & BIEK (Intermediate) board paper patterns, marking keys, and target questions.'
    },
    {
      title: 'Automated Parent Progress Tracking',
      detail: 'Parents receive monthly academic reports detailing attendance, weekly quiz scores, and subject-wise weak areas to ensure zero surprises during board exams.'
    },
    {
      title: 'Optimal Air-Conditioned Study Environment',
      detail: 'Comfortable ergonomic seating, uninterrupted generator power backup, and quiet, soundproofed rooms designed strictly for uninterrupted concentration.'
    },
    {
      title: 'Prime Nazimabad Main Road Location',
      detail: 'Situated right on Sharah-e-Sher Shah Suri, Nazimabad Block 3, making it safe and effortlessly accessible for students coming from all blocks of Nazimabad, North Nazimabad, and surrounds.'
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-b border-[#e1e3e4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#f2c94c]/20 text-[#6b5400] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Institutional Pillars
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1a1a1a] tracking-tight">
              Why Parents & Students Choose The Nexus
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#1a1a1a]/70 max-w-md">
            Built around academic rigor, disciplined testing, and comfortable learning spaces designed for board examination success.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <div
              key={metric.title}
              onClick={() => setActiveFacilityIndex(activeFacilityIndex === idx ? null : idx)}
              className="card-level-1 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#f2c94c] flex items-center justify-center text-[#1a1a1a] mb-5 shadow-xs group-hover:scale-110 transition-transform">
                  {getIcon(metric.iconName)}
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-1 group-hover:text-[#6b5400] transition-colors">
                  {metric.title}
                </h3>

                <p className="text-xs font-bold text-[#745b00] mb-3">
                  {metric.subtitle}
                </p>

                <p className="text-sm text-[#1a1a1a]/80 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Interactive Detail Expand Toggle */}
              <div className="mt-6 pt-4 border-t border-[#e1e3e4] flex items-center justify-between text-xs font-bold text-[#1a1a1a]">
                <span>{activeFacilityIndex === idx ? 'Hide Insight' : 'Campus Detail'}</span>
                <ChevronRight className={`w-4 h-4 text-[#745b00] transform transition-transform ${
                  activeFacilityIndex === idx ? 'rotate-90' : 'group-hover:translate-x-1'
                }`} />
              </div>

              {/* Expanded Facility Detail */}
              {activeFacilityIndex === idx && (
                <div className="mt-3 p-3 bg-[#f2c94c]/15 rounded-lg border border-[#f2c94c]/40 text-xs text-[#1a1a1a] animate-in fade-in duration-200">
                  <div className="flex items-start gap-1.5 font-semibold text-[#6b5400] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a1a1a] shrink-0 mt-0.5" />
                    <span>{detailedFacilities[idx].title}</span>
                  </div>
                  <p className="text-[11px] text-[#1a1a1a]/80 leading-normal pl-5">
                    {detailedFacilities[idx].detail}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Campus Feature Highlights Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 lg:p-8 border border-[#e1e3e4] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] text-[#f2c94c] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#1a1a1a]">
                Admissions Open for New Session (IX, X, XI, XII)
              </h4>
              <p className="text-xs sm:text-sm text-[#1a1a1a]/70">
                Limited seats per batch to maintain high student-teacher interaction. Secure your seat early at Campus-1.
              </p>
            </div>
          </div>

          <a href="#inquiry" className="btn-primary shrink-0 text-xs sm:text-sm py-2.5 px-5">
            <span>Apply Now</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
