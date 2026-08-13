import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Programs } from './components/Programs';
import { Faculty } from './components/Faculty';
import { FeeCalculator } from './components/FeeCalculator';
import { InquiryForm } from './components/InquiryForm';
import { LocationSection } from './components/LocationSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { InquiryAdminModal } from './components/InquiryAdminModal';
import { Course, InquiryFormData, SubmissionRecord } from './types';
import { CAMPUS_DETAILS } from './data/mockData';

export default function App() {
  // Local storage inquiry management
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>(() => {
    try {
      const saved = localStorage.getItem('nexus_inquiries_campus1');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load local inquiries', e);
    }
    // Seed initial demo inquiry for easy interaction preview
    return [
      {
        id: 'INQ-982314',
        studentName: 'Zain Ul Abidin',
        phone: '03350237119',
        selectedGrade: '10',
        group: 'Science Group',
        preferredShift: 'Evening',
        message: 'Asking about physics past paper grand test schedule in Nazimabad Block 3.',
        createdAt: '2026-08-12, 05:30 PM',
        status: 'Pending'
      }
    ];
  });

  const [selectedCourseModal, setSelectedCourseModal] = useState<Course | null>(null);
  const [isInquiriesModalOpen, setIsInquiriesModalOpen] = useState(false);
  const [preFilledForm, setPreFilledForm] = useState<Partial<InquiryFormData>>({
    selectedGrade: '10',
    group: 'Science Group',
    preferredShift: 'Evening'
  });

  // Save to localStorage when submissions change
  useEffect(() => {
    try {
      localStorage.setItem('nexus_inquiries_campus1', JSON.stringify(submissions));
    } catch (e) {
      console.error('Failed to save inquiries to local storage', e);
    }
  }, [submissions]);

  const handleNewSubmission = (newRecord: SubmissionRecord) => {
    setSubmissions((prev) => [newRecord, ...prev]);
  };

  const handleUpdateStatus = (id: string, newStatus: 'Pending' | 'Contacted' | 'Enrolled') => {
    setSubmissions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleClearSubmissions = () => {
    if (window.confirm('Are you sure you want to clear all local student inquiry records?')) {
      setSubmissions([]);
    }
  };

  const handlePreFillFromCalculator = (grade: string, group: string, shift: 'Morning' | 'Evening') => {
    setPreFilledForm({
      selectedGrade: grade,
      group: group,
      preferredShift: shift
    });
  };

  const handleSelectGradeForForm = (gradeValue: string) => {
    setPreFilledForm((prev) => ({
      ...prev,
      selectedGrade: gradeValue
    }));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] flex flex-col selection:bg-[#f2c94c] selection:text-black">
      
      {/* Top Banner Notice */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2 border-b border-[#f2c94c]/30">
        <span className="w-2 h-2 rounded-full bg-[#f2c94c] animate-pulse" />
        <span>Admissions Open for New Session (Classes IX, X, XI, XII) • Nazimabad Campus-1</span>
        <a 
          href="#inquiry" 
          className="underline text-[#f2c94c] hover:text-white font-bold ml-1 hidden sm:inline"
        >
          Secure Seat Now &rarr;
        </a>
      </div>

      {/* Main Navbar */}
      <Navbar
        onOpenInquiriesModal={() => setIsInquiriesModalOpen(true)}
        inquiryCount={submissions.length}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Key Metrics & Why Us Pillars */}
        <WhyUs />

        {/* 3. Academic Programs Offered */}
        <Programs
          onSelectCourseForModal={(course) => setSelectedCourseModal(course)}
          onSelectCourseForForm={handleSelectGradeForForm}
        />

        {/* 4. Faculty Specialists */}
        <Faculty />

        {/* 5. Interactive Batch & Fee Calculator */}
        <FeeCalculator onPreFillInquiry={handlePreFillFromCalculator} />

        {/* 6. Admission & Inquiry Form Split Section */}
        <section id="inquiry" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#e1e3e4]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Side: Admission Inquiry Form */}
              <div className="lg:col-span-6">
                <InquiryForm
                  preFilledData={preFilledForm}
                  onFormSubmitted={handleNewSubmission}
                />
              </div>

              {/* Right Side: Quick Highlights & Direct Call Desk Card */}
              <div className="lg:col-span-6 bg-[#f8f9fa] p-6 sm:p-8 rounded-2xl border border-[#e1e3e4] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#6b5400] bg-[#f2c94c]/20 px-2.5 py-1 rounded uppercase tracking-wider">
                    Instant Admission Support
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#1a1a1a] mt-3 mb-2">
                    Direct Nazimabad Campus Desk
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/80 leading-relaxed mb-6">
                    Prefer talking directly with our academic counselor? Visit our Nazimabad Block 3 campus or call us for immediate seat status and trial class schedules.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-[#e1e3e4] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#1a1a1a]/60 uppercase block">Inquiry Hotline</span>
                        <a href={`tel:${CAMPUS_DETAILS.phone}`} className="font-heading font-extrabold text-lg text-[#1a1a1a] hover:text-[#745b00]">
                          {CAMPUS_DETAILS.phoneDisplay}
                        </a>
                      </div>
                      <a href={`tel:${CAMPUS_DETAILS.phone}`} className="btn-primary py-2 px-4 text-xs font-bold">
                        Call Now
                      </a>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-[#e1e3e4] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#1a1a1a]/60 uppercase block">WhatsApp Desk</span>
                        <span className="font-heading font-bold text-sm text-[#1a1a1a]">Instant 1-Click Message</span>
                      </div>
                      <a
                        href={`https://wa.me/${CAMPUS_DETAILS.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary py-2 px-4 text-xs font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white border-none"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#e1e3e4] mt-6 text-xs text-[#1a1a1a]/70">
                  <p className="font-semibold text-[#1a1a1a]">Address & Timings:</p>
                  <p>{CAMPUS_DETAILS.address}</p>
                  <p className="mt-1 font-bold text-[#745b00]">{CAMPUS_DETAILS.operatingHours}</p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 7. Location & Google Maps Section */}
        <LocationSection />

        {/* 8. Google 5-Star Reviews & Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Program Detail Modal */}
      <ProgramDetailModal
        course={selectedCourseModal}
        onClose={() => setSelectedCourseModal(null)}
        onEnrollClick={(gradeVal) => {
          handleSelectGradeForForm(gradeVal);
          const el = document.getElementById('inquiry');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Submitted Inquiries Admin Drawer/Modal */}
      <InquiryAdminModal
        isOpen={isInquiriesModalOpen}
        onClose={() => setIsInquiriesModalOpen(false)}
        submissions={submissions}
        onUpdateStatus={handleUpdateStatus}
        onClearSubmissions={handleClearSubmissions}
      />

    </div>
  );
}
