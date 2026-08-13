import React from 'react';
import { Award, BookOpen, GraduationCap, Star } from 'lucide-react';
import { FACULTY } from '../data/mockData';

export const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-b border-[#e1e3e4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#f2c94c]/20 text-[#6b5400] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Experienced Subject Specialists
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1a1a1a] tracking-tight mb-4">
            Learn From Karachi’s Top Board Educators
          </h2>
          <p className="text-base text-[#1a1a1a]/80 leading-relaxed">
            Our faculty brings decades of combined teaching and board exam marking experience, ensuring students grasp concepts thoroughly and master exam techniques.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl border border-[#e1e3e4] overflow-hidden flex flex-col justify-between group hover:border-[#f2c94c] hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-56 w-full bg-[#1a1a1a] overflow-hidden">
                  <img
                    src={teacher.photoUrl}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
                  
                  {/* Subject Tag */}
                  <div className="absolute bottom-3 left-3 bg-[#f2c94c] text-[#1a1a1a] font-bold text-xs px-2.5 py-1 rounded-md shadow-xs">
                    {teacher.subject}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-1 group-hover:text-[#6b5400] transition-colors">
                    {teacher.name}
                  </h3>

                  <div className="text-xs font-semibold text-[#745b00] mb-3 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{teacher.qualification}</span>
                  </div>

                  <p className="text-xs text-[#1a1a1a]/70 mb-4 line-clamp-2">
                    {teacher.experience}
                  </p>

                  <div className="p-3 bg-[#f8f9fa] rounded-xl border border-[#e1e3e4] text-xs text-[#1a1a1a]/80 italic">
                    "{teacher.tagline}"
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="p-4 bg-[#f8f9fa] border-t border-[#e1e3e4] flex items-center justify-between text-xs text-[#1a1a1a]">
                <span className="font-semibold text-[#6b5400]">Campus-1 Faculty</span>
                <span className="flex items-center gap-1 font-bold text-[#1a1a1a]">
                  <Star className="w-3.5 h-3.5 text-[#f2c94c] fill-[#f2c94c]" />
                  <span>5.0 Expert</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
