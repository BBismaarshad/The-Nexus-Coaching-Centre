import React, { useState } from 'react';
import { X, Search, Phone, MessageCircle, CheckCircle, Clock, Trash2, ShieldCheck, Download } from 'lucide-react';
import { SubmissionRecord } from '../types';
import { CAMPUS_DETAILS } from '../data/mockData';

interface InquiryAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: SubmissionRecord[];
  onUpdateStatus: (id: string, newStatus: 'Pending' | 'Contacted' | 'Enrolled') => void;
  onClearSubmissions: () => void;
}

export const InquiryAdminModal: React.FC<InquiryAdminModalProps> = ({
  isOpen,
  onClose,
  submissions,
  onUpdateStatus,
  onClearSubmissions,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('all');

  if (!isOpen) return null;

  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.phone.includes(searchTerm) ||
      sub.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGrade = filterGrade === 'all' || sub.selectedGrade === filterGrade;

    return matchesSearch && matchesGrade;
  });

  const generateWhatsAppReplyUrl = (sub: SubmissionRecord) => {
    const text = `Assalamu Alaikum ${sub.studentName}!%0A%0A` +
      `This is regarding your admission inquiry (${sub.id}) at *The Nexus Coaching Centre (Nazimabad Campus-1)* for Class ${sub.selectedGrade}th (${sub.group}).%0A%0A` +
      `We would love to invite you for a free trial class and campus visit at Sharah-e-Sher Shah Suri. What time works best for you?`;

    return `https://wa.me/${sub.phone.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  const exportCSV = () => {
    const headers = ['Ref ID', 'Student Name', 'Phone', 'Grade', 'Group', 'Shift', 'Created At', 'Status'];
    const rows = submissions.map((s) => [
      s.id,
      `"${s.studentName}"`,
      `"${s.phone}"`,
      s.selectedGrade,
      `"${s.group || ''}"`,
      s.preferredShift,
      `"${s.createdAt}"`,
      s.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Nexus_Inquiries_Campus1_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-[#e1e3e4] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col p-6 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e1e3e4]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f2c94c]" />
              <h2 className="font-heading font-extrabold text-xl text-[#1a1a1a]">
                Student Admissions Inquiry Desk
              </h2>
            </div>
            <p className="text-xs text-[#1a1a1a]/70 mt-0.5">
              The Nexus Coaching Centre • Nazimabad Campus-1 Portal ({submissions.length} Total Applications)
            </p>
          </div>

          <div className="flex items-center gap-2">
            {submissions.length > 0 && (
              <button
                onClick={exportCSV}
                className="btn-secondary py-1.5 px-3 text-xs flex items-center gap-1.5"
                title="Export Inquiry Records as CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-black hover:bg-[#f3f4f5] rounded-full transition-colors"
              aria-label="Close inquiries window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="py-4 border-b border-[#e1e3e4] flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by student name, phone, or Ref ID..."
              className="w-full bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg pl-9 pr-4 py-2 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#f2c94c]"
            />
          </div>

          <select
            value={filterGrade}
            onChange={(e) => setFilterGrade(e.target.value)}
            className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg px-3 py-2 text-xs text-[#1a1a1a] font-semibold focus:outline-none"
          >
            <option value="all">All Grades</option>
            <option value="9">Class 9th</option>
            <option value="10">Class 10th</option>
            <option value="11">Class 11th</option>
            <option value="12">Class 12th</option>
          </select>
        </div>

        {/* Submissions List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12 text-[#1a1a1a]/60">
              <p className="text-sm font-semibold">No admission inquiries found.</p>
              <p className="text-xs text-gray-400 mt-1">
                When prospective students fill out the online admission form, their applications will appear here.
              </p>
            </div>
          ) : (
            filteredSubmissions.map((sub) => (
              <div
                key={sub.id}
                className="p-4 bg-[#f8f9fa] border border-[#e1e3e4] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#f2c94c] transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#1a1a1a]">{sub.studentName}</span>
                    <span className="text-[10px] font-bold text-[#6b5400] bg-[#f2c94c]/30 px-2 py-0.2 rounded">
                      {sub.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.2 rounded ${
                      sub.status === 'Enrolled' 
                        ? 'bg-green-100 text-green-800' 
                        : sub.status === 'Contacted' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {sub.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#1a1a1a]/70">
                    <span><strong>Phone:</strong> {sub.phone}</span>
                    <span><strong>Class:</strong> {sub.selectedGrade}th ({sub.group})</span>
                    <span><strong>Shift:</strong> {sub.preferredShift}</span>
                    <span className="text-gray-400">{sub.createdAt}</span>
                  </div>

                  {sub.message && (
                    <p className="text-xs text-[#1a1a1a]/80 bg-white p-2 rounded border border-[#e1e3e4] mt-2 italic">
                      "{sub.message}"
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={generateWhatsAppReplyUrl(sub)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-1.5 px-3 text-xs bg-[#25D366] hover:bg-[#20ba5a] text-white border-none shadow-xs"
                    title="Reply to student on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>

                  <select
                    value={sub.status}
                    onChange={(e) => onUpdateStatus(sub.id, e.target.value as any)}
                    className="bg-white border border-[#e1e3e4] rounded px-2 py-1 text-xs text-[#1a1a1a]"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Enrolled">Enrolled</option>
                  </select>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#e1e3e4] flex items-center justify-between text-xs text-[#1a1a1a]/70">
          <span>Nazimabad Campus-1 Desk Storage</span>
          {submissions.length > 0 && (
            <button
              onClick={onClearSubmissions}
              className="text-red-600 hover:underline flex items-center gap-1 font-semibold"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Local Submissions</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
