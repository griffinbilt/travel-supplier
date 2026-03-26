"use client";

import { useState, useEffect } from "react";
import { type Reservation } from "@/lib/data";

interface DrawerProps {
  reservation: Reservation | null;
  onClose: () => void;
}

function Field({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={`border border-[#e5e5e5] rounded-xl px-4 py-3 ${className || ""}`}>
      <div className="text-[11px] text-[#a3a3a3] mb-0.5">{label}</div>
      <div className="text-[14px] font-medium">{value}</div>
    </div>
  );
}

export default function ReservationDrawer({ reservation, onClose }: DrawerProps) {
  const [visible, setVisible] = useState(false);
  const [commissionable, setCommissionable] = useState(true);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (reservation) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [reservation]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  if (!reservation) return null;

  const firstName = reservation.guest.split(" ")[0];
  const lastName = reservation.guest.split(" ").slice(1).join(" ");

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 drawer-overlay ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[680px] max-w-full bg-white z-50 shadow-2xl drawer-panel flex flex-col ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5]">
          <button onClick={handleClose} className="p-1 hover:bg-[#f5f5f5] rounded-lg transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4l-6 6 6 6" />
            </svg>
          </button>
          <span className="text-[15px] font-semibold">New reservation</span>
          <div className="w-8" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto drawer-scroll px-6 py-6">
          {/* Base details */}
          <h3 className="text-[16px] font-semibold mb-4">Base details</h3>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="Statement ID" value="L84RTL" />
            <Field label="Currency" value="USD ($) - United States Dollar" />
          </div>

          <Field label="Supplier" value="King, Wolff and Gibson Group" className="mb-3" />

          <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 mb-3 bg-[#fafdf6]">
            <div className="text-[11px] text-[#a3a3a3] mb-0.5">Agency</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-medium">Flying Squirrels Experiences (IATA 32472345)</div>
                <div className="text-[12px] text-[#a3a3a3]">Agency: Internova</div>
                <div className="text-[12px] text-[#a3a3a3]">Beneficiary: Global Travel Connection</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[#2563eb] font-medium">Payable</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="Confirmation number" value="FDGKJSN11" />
            <Field label="External ID" value="AA2754" />
          </div>

          <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 mb-6 flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="16" height="14" rx="2" />
              <path d="M1 7h16" />
              <path d="M5 1v4M13 1v4" />
            </svg>
            <div>
              <div className="text-[11px] text-[#a3a3a3]">Dates</div>
              <div className="text-[14px] font-medium">
                {reservation.checkIn}, 2026 - {reservation.checkOut}, 2026
              </div>
            </div>
          </div>

          {/* Traveler */}
          <h3 className="text-[16px] font-semibold mb-4">Traveler</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="First name" value={firstName} />
            <Field label="Middle name" value="Jose" />
          </div>
          <Field label="Last name" value={lastName || "Doe"} className="mb-6" />

          {/* Advisor */}
          <h3 className="text-[16px] font-semibold mb-4">Advisor</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="First name" value="Jane" />
            <Field label="Last name" value="Doe" />
          </div>
          <Field label="Email" value="jane.doe@example.com" className="mb-6" />

          {/* Pricing */}
          <h3 className="text-[16px] font-semibold mb-4">Pricing</h3>

          <div className="mb-3">
            <div className="text-[13px] font-medium mb-2">Room type</div>
            <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors">
              <span className="text-[14px]">Suite</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <Field label="Base fare" value="$4,000.00" />
            <Field label="Taxes" value="$50.00" />
            <Field label="Fees" value="$0.00" />
          </div>

          {/* Commissionable */}
          <div className="border border-[#e5e5e5] rounded-xl p-4 mb-3">
            <div className="flex items-center justify-between mb-1">
              <div>
                <div className="text-[14px] font-semibold">Commissionable</div>
                <div className="text-[12px] text-[#a3a3a3]">Allow commissions to be earned on this reservation.</div>
              </div>
              <button
                onClick={() => setCommissionable(!commissionable)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  commissionable ? "bg-black" : "bg-[#d4d4d4]"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    commissionable ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            {commissionable && (
              <div className="mt-4">
                <div className="text-[12px] text-[#a3a3a3] mb-3">Commission rates</div>

                <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 mb-2 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-[#a3a3a3]">On Base fare</div>
                    <div className="text-[14px]">10% commissionable</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#171717] text-white text-[11px] px-2 py-0.5 rounded-full font-medium">FLAT10</span>
                    <button className="p-1 text-[#a3a3a3] hover:text-[#525252]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="10" height="10" rx="1" />
                        <path d="M5 5V3a1 1 0 011-1h4a1 1 0 011 1v2" />
                      </svg>
                    </button>
                    <button className="p-1 text-[#a3a3a3] hover:text-[#525252]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.5 2.5l2 2M4 10l7-7 2 2-7 7H4v-2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-[#a3a3a3]">On Taxes</div>
                    <div className="text-[14px]">$20.00 commissionable</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#171717] text-white text-[11px] px-2 py-0.5 rounded-full font-medium">F&F</span>
                    <button className="p-1 text-[#a3a3a3] hover:text-[#525252]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="10" height="10" rx="1" />
                        <path d="M5 5V3a1 1 0 011-1h4a1 1 0 011 1v2" />
                      </svg>
                    </button>
                    <button className="p-1 text-[#a3a3a3] hover:text-[#525252]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.5 2.5l2 2M4 10l7-7 2 2-7 7H4v-2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-[13px] text-[#525252] hover:text-black transition-colors w-full border border-[#e5e5e5] rounded-xl px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="8" r="6" />
                    <path d="M6 8h4M8 6v4" />
                  </svg>
                  <span className="flex-1 text-left">Add commission rate</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h8M8 4v8" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Value Add Tax */}
          <h3 className="text-[16px] font-semibold mb-4 mt-6">Value Add Tax</h3>
          <Field label="Amount" value="$4,000.00" className="mb-2" />
          <p className="text-[12px] text-[#a3a3a3] mb-6">100% of VAT will be passed on to the agency.</p>

          {/* Notes */}
          <h3 className="text-[16px] font-semibold mb-4">Notes</h3>
          <div className="mb-2">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value.slice(0, 200))}
              placeholder="Add any details or context about this reservation..."
              className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-[14px] resize-none h-24 focus:outline-none focus:ring-2 focus:ring-black/10"
            />
            <div className="text-[12px] text-[#a3a3a3] text-right">{notes.length}/200 characters</div>
          </div>

          {/* Warning */}
          <div className="border border-[#fbbf24] bg-[#fffbeb] rounded-xl px-4 py-3 mb-6 flex items-center gap-2 text-[13px] text-[#92400e]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="8" r="7" />
              <path d="M8 5v3M8 10.5v.5" />
            </svg>
            Do not include personal or payment details (e.g., credit card numbers, passport info).
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#e5e5e5]">
          <button className="w-full bg-black text-white rounded-xl py-3.5 text-[14px] font-semibold hover:bg-[#262626] transition-colors">
            Create reservation
          </button>
        </div>
      </div>
    </>
  );
}
