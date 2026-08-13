import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { InquiryFormData, SubmissionRecord } from '../types';
import { CAMPUS_DETAILS } from '../data/mockData';

interface InquiryFormProps {
  preFilledData?: Partial<InquiryFormData>;
  onFormSubmitted: (newSubmission: SubmissionRecord) => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ preFilledData, onFormSubmitted }) => {
  const [studentName, setStudentName] = useState(preFilledData?.studentName || '');
  const [phone, setPhone] = useState(preFilledData?.phone || '');
  const [selectedGrade, setSelectedGrade] = useState(preFilledData?.selectedGrade || '10');
  const [group, setGroup] = useState(preFilledData?.group || 'Science Group');
  const [preferredShift, setPreferredShift] = useState<'Morning' | 'Evening'>(
    preFilledData?.preferredShift || 'Evening'
  );
  const [message, setMessage] = useState(preFilledData?.message || '');

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedRecord, setSubmittedRecord] = useState<SubmissionRecord | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preFilledData?.selectedGrade) setSelectedGrade(preFilledData.selectedGrade);
    if (preFilledData?.group) setGroup(preFilledData.group);
    if (preFilledData?.preferredShift) setPreferredShift(preFilledData.preferredShift);
  }, [preFilledData]);

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!studentName.trim() || studentName.trim().length < 3) {
      errs.studentName = 'Please enter student full name (minimum 3 characters)';
    }

    // Phone validation for Pakistani format (e.g., 03350237119 or +923350237119 or 03XX-XXXXXXX)
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid WhatsApp contact number (e.g. 0335 0237119)';
    }

    if (!selectedGrade) {
      errs.selectedGrade = 'Please select class / grade';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const newRecord: SubmissionRecord = {
      id: 'INQ-' + Date.now().toString().slice(-6),
      studentName: studentName.trim(),
      phone: phone.trim(),
      selectedGrade,
      group,
      preferredShift,
      message: message.trim(),
      createdAt: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
      status: 'Pending'
    };

    setTimeout(() => {
      onFormSubmitted(newRecord);
      setSubmittedRecord(newRecord);
      setIsSubmitting(false);
    }, 600);
  };

  // Generate direct WhatsApp link with pre-formatted inquiry text
  const generateWhatsAppUrl = (record: SubmissionRecord) => {
    const text = `*New Admission Inquiry - The Nexus Coaching Centre (Nazimabad Campus-1)*%0A%0A` +
      `*Student Name:* ${encodeURIComponent(record.studentName)}%0A` +
      `*WhatsApp Phone:* ${encodeURIComponent(record.phone)}%0A` +
      `*Class / Grade:* Class ${record.selectedGrade}th (${encodeURIComponent(record.group)})%0A` +
      `*Preferred Shift:* ${record.preferredShift} Shift%0A` +
      `*Ref ID:* ${record.id}%0A` +
      (record.message ? `*Notes:* ${encodeURIComponent(record.message)}%0A` : '') +
      `%0A_Sent via Official Nexus Website Portal_`;

    return `https://wa.me/${CAMPUS_DETAILS.whatsappNumber}?text=${text}`;
  };

  const handleResetForm = () => {
    setSubmittedRecord(null);
    setStudentName('');
    setPhone('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e1e3e4] shadow-md h-full flex flex-col justify-between">
      
      {/* Form Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 bg-[#f2c94c]/20 text-[#6b5400] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#1a1a1a]" />
          <span>Campus-1 Admissions</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1a1a1a]">
          Apply for Admission
        </h2>
        <p className="text-xs sm:text-sm text-[#1a1a1a]/70 mt-1">
          Fill out the inquiry form below to reserve your seat at Nazimabad Block 3.
        </p>
      </div>

      {submittedRecord ? (
        /* Success State View */
        <div className="bg-[#f8f9fa] border-2 border-[#f2c94c] rounded-xl p-6 text-center space-y-5 animate-in zoom-in-95 duration-200 my-auto">
          <div className="w-14 h-14 bg-[#f2c94c] text-[#1a1a1a] rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold text-[#6b5400] bg-[#f2c94c]/30 px-2.5 py-0.5 rounded uppercase tracking-wider">
              Inquiry Ref: {submittedRecord.id}
            </span>
            <h3 className="font-heading font-bold text-xl text-[#1a1a1a] mt-2">
              Application Submitted Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-[#1a1a1a]/80 max-w-sm mx-auto mt-2 leading-relaxed">
              Thank you, <strong className="text-[#1a1a1a]">{submittedRecord.studentName}</strong>. Our Nazimabad campus team will contact you shortly on <strong className="text-[#1a1a1a]">{submittedRecord.phone}</strong>.
            </p>
          </div>

          {/* Quick Summary Card */}
          <div className="bg-white p-4 rounded-lg border border-[#e1e3e4] text-left text-xs space-y-1.5 text-[#1a1a1a]">
            <div className="flex justify-between">
              <span className="text-[#1a1a1a]/60">Grade Selected:</span>
              <span className="font-bold">Class {submittedRecord.selectedGrade}th ({submittedRecord.group})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1a1a1a]/60">Shift:</span>
              <span className="font-bold">{submittedRecord.preferredShift} Batch</span>
            </div>
          </div>

          {/* WhatsApp Direct Connect Button */}
          <div className="space-y-2 pt-2">
            <a
              href={generateWhatsAppUrl(submittedRecord)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 text-sm font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white border-none shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Send Inquiry Directly on WhatsApp</span>
            </a>

            <button
              onClick={handleResetForm}
              className="text-xs font-bold text-[#1a1a1a] hover:underline block mx-auto pt-2"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        /* Active Inquiry Form */
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Student Name */}
          <div>
            <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">
              Student Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                if (errors.studentName) setErrors({ ...errors, studentName: '' });
              }}
              placeholder="e.g. Muhammad Ali"
              className={`input-field ${errors.studentName ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.studentName && (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.studentName}</span>
              </p>
            )}
          </div>

          {/* Contact / WhatsApp Phone */}
          <div>
            <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">
              WhatsApp / Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              placeholder="+92 3XX XXXXXXX"
              className={`input-field ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Class / Grade Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">
                Grade / Class <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="input-field cursor-pointer"
              >
                <option value="9">Class 9th (Matric)</option>
                <option value="10">Class 10th (Matric)</option>
                <option value="11">Class 11th (Inter Part I)</option>
                <option value="12">Class 12th (Inter Part II)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">
                Group / Field
              </label>
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="input-field cursor-pointer"
              >
                <option value="Science Group">Science Group</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Pre-Engineering">Pre-Engineering</option>
                <option value="Pre-Medical">Pre-Medical</option>
              </select>
            </div>
          </div>

          {/* Preferred Shift Radio Buttons */}
          <div>
            <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
              Preferred Shift
            </label>
            <div className="flex gap-4 p-2 bg-[#f8f9fa] rounded-lg border border-[#e1e3e4]">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#1a1a1a]">
                <input
                  type="radio"
                  name="shift"
                  value="Evening"
                  checked={preferredShift === 'Evening'}
                  onChange={() => setPreferredShift('Evening')}
                  className="w-4 h-4 text-[#f2c94c] focus:ring-[#f2c94c] border-gray-300"
                />
                <span>Evening Batch (3:30 PM - 7:30 PM)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#1a1a1a]">
                <input
                  type="radio"
                  name="shift"
                  value="Morning"
                  checked={preferredShift === 'Morning'}
                  onChange={() => setPreferredShift('Morning')}
                  className="w-4 h-4 text-[#f2c94c] focus:ring-[#f2c94c] border-gray-300"
                />
                <span>Morning Batch</span>
              </label>
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">
              Additional Questions / Message (Optional)
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Asking about fee discount or specific subject batch times..."
              className="input-field resize-none text-xs"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-3.5 text-sm font-bold mt-2 shadow-md"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                <span>Processing Application...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>Submit Application</span>
              </span>
            )}
          </button>

          <p className="text-[11px] text-center text-[#1a1a1a]/60 mt-2 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6b5400]" />
            <span>We respect your privacy. Direct response guaranteed within 2 hours.</span>
          </p>

        </form>
      )}

    </div>
  );
};
