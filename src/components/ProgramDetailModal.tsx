import React from 'react';
import { X, CheckCircle2, BookOpen, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Course } from '../types';

interface ProgramDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollClick: (gradeValue: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  course,
  onClose,
  onEnrollClick,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-[#e1e3e4] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black hover:bg-[#f3f4f5] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-[#e1e3e4]">
          <span className="text-xs font-bold text-[#6b5400] bg-[#f2c94c]/20 px-2.5 py-0.5 rounded uppercase tracking-wider">
            {course.board}
          </span>
          <h2 className="font-heading font-extrabold text-2xl text-[#1a1a1a] mt-2">
            {course.title}
          </h2>
          <p className="text-xs text-[#1a1a1a]/70 mt-1 font-semibold">
            Target Grade: {course.grade}
          </p>
        </div>

        {/* Modal Content */}
        <div className="space-y-6">
          
          <p className="text-sm text-[#1a1a1a]/85 leading-relaxed">
            {course.description}
          </p>

          {/* Groups & Timings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#f8f9fa] rounded-xl border border-[#e1e3e4]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1a1a1a] uppercase mb-1">
                <Clock className="w-4 h-4 text-[#745b00]" />
                <span>Shift Timings</span>
              </div>
              <p className="text-xs text-[#1a1a1a]/80 font-medium">{course.timing}</p>
            </div>

            <div className="p-4 bg-[#f8f9fa] rounded-xl border border-[#e1e3e4]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1a1a1a] uppercase mb-1">
                <Calendar className="w-4 h-4 text-[#745b00]" />
                <span>Estimated Tuition</span>
              </div>
              <p className="text-xs font-bold text-[#1a1a1a]">
                Rs. {course.estimatedFee.toLocaleString()} / month
              </p>
            </div>
          </div>

          {/* Subjects Included */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-2">
              Subjects Included in Batch Syllabus:
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.subjects.map((subj) => (
                <span
                  key={subj}
                  className="bg-[#f2c94c]/20 text-[#1a1a1a] font-semibold text-xs px-3 py-1 rounded-md border border-[#f2c94c]/40"
                >
                  {subj}
                </span>
              ))}
            </div>
          </div>

          {/* Key Program Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-2">
              Key Academic Features:
            </h3>
            <ul className="space-y-2">
              {course.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#1a1a1a]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#f2c94c] fill-[#1a1a1a] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#e1e3e4] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-bold text-[#1a1a1a] hover:underline"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              const gradeNum = course.id.includes('inter') ? '11' : '9';
              onEnrollClick(gradeNum);
            }}
            className="btn-primary py-2.5 px-5 text-xs font-bold"
          >
            <span>Proceed to Admission Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
