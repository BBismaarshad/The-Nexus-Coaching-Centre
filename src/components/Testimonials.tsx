import React from 'react';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, CAMPUS_DETAILS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#e1e3e4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#f2c94c]/20 text-[#6b5400] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#745b00]" />
            <span>Google Reviews & Board Results</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1a1a1a] tracking-tight mb-4">
            Proven Track Record of Excellence
          </h2>
          <p className="text-base text-[#1a1a1a]/80 leading-relaxed">
            Read authentic experiences from students and parents across Nazimabad who achieved top A1 grades in Sindh Board Examinations.
          </p>

          {/* Google 5-Star Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-[#f8f9fa] border border-[#e1e3e4] px-5 py-2.5 rounded-2xl shadow-xs">
            <div className="flex text-[#f2c94c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f2c94c] text-[#f2c94c]" />
              ))}
            </div>
            <span className="font-bold text-[#1a1a1a] text-sm">
              5.0 Rating • {CAMPUS_DETAILS.googleReviewsCount}+ Verified Google Reviews
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="card-level-1 flex flex-col justify-between relative bg-white group hover:border-[#f2c94c]"
            >
              <div>
                {/* Header Rating & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#f2c94c]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f2c94c] text-[#f2c94c]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1a1a1a]/60 bg-[#f8f9fa] px-2 py-0.5 rounded border border-[#e1e3e4]">
                    {review.year}
                  </span>
                </div>

                {/* Review Quote Text */}
                <p className="text-sm text-[#1a1a1a]/85 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Student Profile Footer */}
              <div className="pt-4 border-t border-[#e1e3e4] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatarUrl}
                    alt={review.studentName}
                    className="w-10 h-10 rounded-full object-cover border border-[#e1e3e4]"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#1a1a1a]">
                      {review.studentName}
                    </h4>
                    <span className="text-xs text-[#1a1a1a]/70 block">
                      {review.gradeAchieved}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#6b5400] bg-[#f2c94c]/20 px-2 py-1 rounded">
                  {review.percentage}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
