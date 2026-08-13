import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface FeeCalculatorProps {
  onPreFillInquiry: (grade: string, group: string, shift: 'Morning' | 'Evening') => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onPreFillInquiry }) => {
  const [grade, setGrade] = useState('10');
  const [group, setGroup] = useState('Science');
  const [shift, setShift] = useState<'Morning' | 'Evening'>('Evening');
  const [includeTransportNote, setIncludeTransportNote] = useState(false);

  // Fee calculation logic
  const calculateFee = () => {
    let baseFee = 4500;
    if (grade === '11' || grade === '12') baseFee = 5500;
    if (group === 'Pre-Engineering' || group === 'Pre-Medical') baseFee += 500;
    if (shift === 'Morning') baseFee -= 200; // Morning discount incentive
    return baseFee;
  };

  const currentFee = calculateFee();
  const discountAmount = 500; // Early registration discount
  const finalFee = currentFee - discountAmount;

  const handleApplyNow = () => {
    onPreFillInquiry(grade, group, shift);
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="fee-estimator" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#e1e3e4]">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b] text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Ribbon Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2c94c]/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#f2c94c] text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Batch & Fee Estimator</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                  Transparent Monthly Fee Structure
                </h2>
                <p className="text-sm text-gray-300">
                  Select your grade and group to estimate monthly tuition fee at Nazimabad Campus-1. No hidden registration charges.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Grade Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Select Grade / Class
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f2c94c]"
                  >
                    <option value="9">Class 9th (Matric Part 1)</option>
                    <option value="10">Class 10th (Matric Part 2)</option>
                    <option value="11">Class 11th (Inter Part 1)</option>
                    <option value="12">Class 12th (Inter Part 2)</option>
                  </select>
                </div>

                {/* Group Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Discipline / Group
                  </label>
                  <select
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f2c94c]"
                  >
                    <option value="Science">Science Group</option>
                    <option value="Computer Science">Computer Science (ICS)</option>
                    <option value="Pre-Engineering">Pre-Engineering</option>
                    <option value="Pre-Medical">Pre-Medical</option>
                  </select>
                </div>

              </div>

              {/* Shift Options */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Preferred Batch Shift
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setShift('Evening')}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      shift === 'Evening'
                        ? 'bg-[#f2c94c] border-[#f2c94c] text-[#1a1a1a] font-bold'
                        : 'bg-[#2a2a2a] border-gray-700 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div>
                      <div className="text-sm">Evening Shift</div>
                      <div className="text-[11px] opacity-80">3:30 PM - 7:30 PM</div>
                    </div>
                    {shift === 'Evening' && <CheckCircle2 className="w-5 h-5 text-[#1a1a1a]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShift('Morning')}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      shift === 'Morning'
                        ? 'bg-[#f2c94c] border-[#f2c94c] text-[#1a1a1a] font-bold'
                        : 'bg-[#2a2a2a] border-gray-700 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div>
                      <div className="text-sm">Morning Shift</div>
                      <div className="text-[11px] opacity-80">8:00 AM - 12:00 PM</div>
                    </div>
                    {shift === 'Morning' && <CheckCircle2 className="w-5 h-5 text-[#1a1a1a]" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Calculated Fee Box */}
            <div className="lg:col-span-5 bg-white text-[#1a1a1a] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#e1e3e4] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#e1e3e4]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6b5400]">
                      Estimated Monthly Fee
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-[#1a1a1a]">
                      Class {grade}th • {group}
                    </h3>
                  </div>
                  <Tag className="w-6 h-6 text-[#745b00]" />
                </div>

                {/* Price Breakdown */}
                <div className="py-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#1a1a1a]/70">Standard Tuition Fee:</span>
                    <span className="font-semibold text-[#1a1a1a]">Rs. {currentFee.toLocaleString()} / mo</span>
                  </div>

                  <div className="flex justify-between text-sm text-green-700 font-semibold bg-green-50 p-2 rounded-lg border border-green-200">
                    <span>Early Registration Concession:</span>
                    <span>- Rs. {discountAmount} / mo</span>
                  </div>

                  <div className="pt-3 border-t border-[#e1e3e4] flex justify-between items-baseline">
                    <span className="font-bold text-base text-[#1a1a1a]">Net Fee Payable:</span>
                    <div className="text-right">
                      <span className="font-heading font-extrabold text-3xl text-[#1a1a1a]">
                        Rs. {finalFee.toLocaleString()}
                      </span>
                      <span className="text-xs text-[#1a1a1a]/60 block font-normal">per month</span>
                    </div>
                  </div>
                </div>

                {/* Included Package Features */}
                <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-[#e1e3e4] space-y-1.5 mb-6 text-xs text-[#1a1a1a]">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#745b00]" />
                    <span>Includes full subject printed target notes</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#745b00]" />
                    <span>Weekly test series & Sindh board past papers</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyNow}
                className="btn-primary w-full py-3.5 text-sm font-bold"
              >
                <span>Reserve Seat with Concession</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
