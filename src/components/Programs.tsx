import React, { useState } from 'react';
import { BookOpen, FlaskConical, Zap, CheckCircle2, ArrowRight, FileText, Calendar, Clock, DollarSign } from 'lucide-react';
import { COURSES } from '../data/mockData';
import { Course } from '../types';

interface ProgramsProps {
  onSelectCourseForModal: (course: Course) => void;
  onSelectCourseForForm: (gradeValue: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({
  onSelectCourseForModal,
  onSelectCourseForForm,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'matric' | 'inter' | 'crash'>('all');

  const filteredCourses = COURSES.filter((c) => {
    if (activeTab === 'matric') return c.id.includes('matric');
    if (activeTab === 'inter') return c.id.includes('inter');
    if (activeTab === 'crash') return c.id.includes('crash');
    return true;
  });

  return (
    <section id="programs" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#e1e3e4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#f2c94c]/20 text-[#6b5400] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Sindh Board Preparation
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1a1a1a] tracking-tight mb-4">
            Academic Programs Offered
          </h2>
          <p className="text-base text-[#1a1a1a]/80 leading-relaxed">
            Comprehensive coaching structures tailored for board examination success across all major secondary and higher secondary levels in Karachi.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#f8f9fa] rounded-xl border border-[#e1e3e4] w-fit mx-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#1a1a1a] text-[#f2c94c] shadow-xs'
                  : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveTab('matric')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'matric'
                  ? 'bg-[#1a1a1a] text-[#f2c94c] shadow-xs'
                  : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
              }`}
            >
              Matriculation (IX & X)
            </button>
            <button
              onClick={() => setActiveTab('inter')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'inter'
                  ? 'bg-[#1a1a1a] text-[#f2c94c] shadow-xs'
                  : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
              }`}
            >
              Intermediate (XI & XII)
            </button>
            <button
              onClick={() => setActiveTab('crash')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'crash'
                  ? 'bg-[#1a1a1a] text-[#f2c94c] shadow-xs'
                  : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
              }`}
            >
              Crash Courses
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured 1: Matriculation (Spans 7 cols on Desktop) */}
          {filteredCourses.find((c) => c.id === 'matric-9-10') && (
            <div className="lg:col-span-7 card-level-1 border-t-4 border-t-[#f2c94c] flex flex-col justify-between group relative overflow-hidden bg-white">
              
              {/* Background Book Icon Effect */}
              <div className="absolute right-[-20px] top-[-20px] text-[#f2c94c]/10 group-hover:text-[#f2c94c]/20 transition-colors pointer-events-none">
                <BookOpen className="w-[200px] h-[200px]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#f8f9fa] border border-[#e1e3e4] text-[#1a1a1a] font-bold text-xs px-3 py-1 rounded-full">
                    BSEK Sindh Board
                  </span>
                  <span className="text-xs font-semibold text-[#6b5400] bg-[#f2c94c]/20 px-2.5 py-1 rounded-md">
                    Science & Computer Groups
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1a1a1a] mb-3">
                  Matriculation
                </h3>

                <p className="text-sm sm:text-base text-[#1a1a1a]/80 mb-6 max-w-xl leading-relaxed">
                  Complete preparation for Class IX and X. Focus on core concepts, physics & chemistry numericals, mathematical theorems, and past paper rigorous practice.
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1a1a1a]">
                    <CheckCircle2 className="w-4 h-4 text-[#f2c94c] fill-[#1a1a1a] shrink-0" />
                    <span>Daily Physics, Chemistry, Math & Computer classes</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1a1a1a]">
                    <CheckCircle2 className="w-4 h-4 text-[#f2c94c] fill-[#1a1a1a] shrink-0" />
                    <span>Weekly chapter quizzes & monthly progress reports for parents</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1a1a1a]">
                    <CheckCircle2 className="w-4 h-4 text-[#f2c94c] fill-[#1a1a1a] shrink-0" />
                    <span>Grand Test Series & 10-year past paper solved handbooks</span>
                  </li>
                </ul>

                {/* Subjects Badges */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a1a1a]/60 block mb-2">
                    Key Subjects Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Physics', 'Chemistry', 'Maths', 'Computer', 'Biology', 'English'].map((subj) => (
                      <span key={subj} className="bg-[#f3f4f5] border border-[#e1e3e4] text-[#1a1a1a] text-xs font-semibold px-2.5 py-1 rounded-md">
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-[#e1e3e4] flex flex-wrap items-center justify-between gap-4 relative z-10">
                <button
                  onClick={() => onSelectCourseForModal(COURSES[0])}
                  className="text-xs font-bold text-[#1a1a1a] hover:text-[#745b00] underline inline-flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Syllabus & Fee</span>
                </button>

                <a
                  href="#inquiry"
                  onClick={() => onSelectCourseForForm('9')}
                  className="btn-primary py-2.5 px-5 text-xs font-bold"
                >
                  <span>Enroll for Matric</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          )}

          {/* Featured 2: Intermediate (Spans 5 cols on Desktop) */}
          {filteredCourses.find((c) => c.id === 'inter-11-12') && (
            <div className="lg:col-span-5 card-level-1 border-t-4 border-t-[#1a1a1a] flex flex-col justify-between group relative overflow-hidden bg-white">
              
              {/* Background Lab Icon Effect */}
              <div className="absolute right-[-20px] bottom-[-20px] text-[#1a1a1a]/5 group-hover:text-[#1a1a1a]/10 transition-colors pointer-events-none">
                <FlaskConical className="w-[180px] h-[180px]" />
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-[#f8f9fa] border border-[#e1e3e4] text-[#1a1a1a] font-bold text-xs px-3 py-1 rounded-full mb-4">
                  BIEK Sindh Board
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1a1a1a] mb-3">
                  Intermediate
                </h3>

                <p className="text-sm text-[#1a1a1a]/80 mb-6 leading-relaxed">
                  Specialized coaching for XI & XII. Master deep concepts with subject professors for Pre-Medical, Pre-Engineering, and Computer Science streams.
                </p>

                {/* Groups Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#f2c94c]/20 border border-[#f2c94c]/50 text-[#1a1a1a] font-bold text-xs px-3 py-1.5 rounded-lg">
                    Pre-Engineering
                  </span>
                  <span className="bg-[#f2c94c]/20 border border-[#f2c94c]/50 text-[#1a1a1a] font-bold text-xs px-3 py-1.5 rounded-lg">
                    Pre-Medical
                  </span>
                  <span className="bg-[#f2c94c]/20 border border-[#f2c94c]/50 text-[#1a1a1a] font-bold text-xs px-3 py-1.5 rounded-lg">
                    Computer Science
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-[#1a1a1a]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f2c94c] fill-[#1a1a1a] shrink-0" />
                    <span>College Professors with 15+ years experience</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-[#1a1a1a]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f2c94c] fill-[#1a1a1a] shrink-0" />
                    <span>Printed formula sheets & past paper practice</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-[#e1e3e4] flex flex-wrap items-center justify-between gap-3 relative z-10">
                <button
                  onClick={() => onSelectCourseForModal(COURSES[1])}
                  className="text-xs font-bold text-[#1a1a1a] hover:text-[#745b00] underline inline-flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Syllabus Details</span>
                </button>

                <a
                  href="#inquiry"
                  onClick={() => onSelectCourseForForm('11')}
                  className="btn-primary py-2.5 px-5 text-xs font-bold"
                >
                  <span>Enroll for Inter</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          )}

          {/* Full-width Card 3: Special Batches & Crash Courses */}
          {filteredCourses.find((c) => c.id === 'crash-course') && (
            <div className="lg:col-span-12 bg-[#f8f9fa] border border-[#e1e3e4] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-[#f2c94c] text-[#1a1a1a] flex items-center justify-center shrink-0 shadow-xs">
                  <Zap className="w-6 h-6 fill-[#1a1a1a]" />
                </div>
                <div>
                  <div className="inline-block bg-[#1a1a1a] text-[#f2c94c] font-bold text-[11px] px-2.5 py-0.5 rounded uppercase tracking-wider mb-2">
                    Fast-Track Board Prep
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1a1a1a] mb-2">
                    Special Batches & Crash Courses
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/80 max-w-2xl leading-relaxed">
                    Intensive 2-month revision programs designed for students aiming to maximize their board exam scores in minimal time through targeted practice and 10-year past paper drill.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onSelectCourseForModal(COURSES[2])}
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-5 bg-white"
                >
                  <Calendar className="w-4 h-4" />
                  <span>View Schedule</span>
                </button>

                <a
                  href="#inquiry"
                  onClick={() => onSelectCourseForForm('10')}
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5"
                >
                  <span>Join Crash Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
