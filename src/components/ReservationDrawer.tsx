"use client";

import { useState, useEffect } from "react";
import { type Reservation, type RestaurantCredit } from "@/lib/data";

interface DrawerProps {
  reservation: Reservation | null;
  editable?: boolean;
  onClose: () => void;
}

function Field({ label, value, className, editable, onChange }: {
  label: string;
  value: string;
  className?: string;
  editable?: boolean;
  onChange?: (v: string) => void;
}) {
  return (
    <div className={`border border-[#e5e5e5] rounded-xl px-4 py-3 ${editable ? "focus-within:ring-2 focus-within:ring-black/10 focus-within:border-[#a3a3a3]" : ""} ${className || ""}`}>
      <div className="text-[11px] text-[#a3a3a3] mb-0.5">{label}</div>
      {editable ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="text-[14px] font-medium w-full outline-none bg-transparent"
        />
      ) : (
        <div className="text-[14px] font-medium">{value}</div>
      )}
    </div>
  );
}

export default function ReservationDrawer({ reservation, editable = false, onClose }: DrawerProps) {
  const [visible, setVisible] = useState(false);
  const [commissionable, setCommissionable] = useState(true);
  const [notes, setNotes] = useState("");

  // Editable field state
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("Jose");
  const [lastName, setLastName] = useState("");
  const [advisorFirst, setAdvisorFirst] = useState("Jane");
  const [advisorLast, setAdvisorLast] = useState("Doe");
  const [advisorEmail, setAdvisorEmail] = useState("jane.doe@example.com");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("Suite");
  const [baseFare, setBaseFare] = useState("$4,000.00");
  const [taxes, setTaxes] = useState("$50.00");
  const [fees, setFees] = useState("$0.00");
  const [vatAmount, setVatAmount] = useState("$4,000.00");
  const [credit, setCredit] = useState<RestaurantCredit | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (reservation) {
      setFirstName(reservation.guest.split(" ")[0]);
      setLastName(reservation.guest.split(" ").slice(1).join(" ") || "Doe");
      setCheckInDate(reservation.checkIn);
      setCheckOutDate(reservation.checkOut);
      setCredit(reservation.credit ? { ...reservation.credit } : null);
      setSaved(false);
      requestAnimationFrame(() => setVisible(true));
    }
  }, [reservation]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      handleClose();
    }, 800);
  };

  if (!reservation) return null;

  const isEdit = editable;
  const title = isEdit ? "Modify reservation" : "New reservation";
  const buttonText = saved ? "Saved!" : isEdit ? "Save changes" : "Create reservation";

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
          <span className="text-[15px] font-semibold">{title}</span>
          <div className="w-8" />
        </div>

        {/* Edit mode banner */}
        {isEdit && (
          <div className="px-6 py-3 bg-[#f0f9ff] border-b border-[#bae6fd] flex items-center gap-2 text-[13px] text-[#0369a1]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11.5 2.5l2 2M4 10l7-7 2 2-7 7H4v-2z" />
            </svg>
            Editing reservation for {reservation.guest} &middot; Room {reservation.roomNo}
          </div>
        )}

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

          <div className={`border border-[#e5e5e5] rounded-xl px-4 py-3 mb-6 flex items-center gap-3 ${isEdit ? "focus-within:ring-2 focus-within:ring-black/10" : ""}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="16" height="14" rx="2" />
              <path d="M1 7h16" />
              <path d="M5 1v4M13 1v4" />
            </svg>
            <div className="flex-1">
              <div className="text-[11px] text-[#a3a3a3]">Dates</div>
              {isEdit ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="text-[14px] font-medium outline-none bg-transparent w-20"
                  />
                  <span className="text-[14px] text-[#a3a3a3]">-</span>
                  <input
                    type="text"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="text-[14px] font-medium outline-none bg-transparent w-20"
                  />
                  <span className="text-[14px] text-[#a3a3a3]">, 2026</span>
                </div>
              ) : (
                <div className="text-[14px] font-medium">
                  {checkInDate}, 2026 - {checkOutDate}, 2026
                </div>
              )}
            </div>
          </div>

          {/* Traveler */}
          <h3 className="text-[16px] font-semibold mb-4">Traveler</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="First name" value={firstName} editable={isEdit} onChange={setFirstName} />
            <Field label="Middle name" value={middleName} editable={isEdit} onChange={setMiddleName} />
          </div>
          <Field label="Last name" value={lastName} editable={isEdit} onChange={setLastName} className="mb-6" />

          {/* Advisor */}
          <h3 className="text-[16px] font-semibold mb-4">Advisor</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="First name" value={advisorFirst} editable={isEdit} onChange={setAdvisorFirst} />
            <Field label="Last name" value={advisorLast} editable={isEdit} onChange={setAdvisorLast} />
          </div>
          <Field label="Email" value={advisorEmail} editable={isEdit} onChange={setAdvisorEmail} className="mb-6" />

          {/* Pricing */}
          <h3 className="text-[16px] font-semibold mb-4">Pricing</h3>

          <div className="mb-3">
            <div className="text-[13px] font-medium mb-2">Room type</div>
            {isEdit ? (
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-[14px] appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10"
              >
                <option>Suite</option>
                <option>Deluxe</option>
                <option>Standard</option>
                <option>Economy</option>
              </select>
            ) : (
              <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors">
                <span className="text-[14px]">{roomType}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <Field label="Base fare" value={baseFare} editable={isEdit} onChange={setBaseFare} />
            <Field label="Taxes" value={taxes} editable={isEdit} onChange={setTaxes} />
            <Field label="Fees" value={fees} editable={isEdit} onChange={setFees} />
          </div>

          {/* Restaurant Credit */}
          {credit && (
            <div className={`border rounded-xl p-4 mb-3 ${credit.applied ? "border-[#bbf7d0] bg-[#f0fdf4]" : "border-[#c4b5fd] bg-[#f5f3ff]"}`}>
              <div className="flex items-center gap-2 mb-1">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={credit.applied ? "#16a34a" : "#7c3aed"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 5h14M2 9h14M5 13h8" />
                  <circle cx="14" cy="13" r="3" />
                  <path d="M13 13h2M14 12v2" />
                </svg>
                <span className="text-[14px] font-semibold">Restaurant credit</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                  credit.applied
                    ? "bg-[#dcfce7] text-[#15803d]"
                    : "bg-[#ede9fe] text-[#6d28d9]"
                }`}>
                  {credit.applied ? "Applied" : "Available"}
                </span>
              </div>
              <p className="text-[12px] text-[#737373] mb-3">
                Booked via {reservation.source} through Bilt &mdash; guest is eligible for a ${credit.amount}.00 restaurant credit.
              </p>

              <div className="flex items-center justify-between border border-[#e5e5e5] bg-white rounded-xl px-4 py-3">
                <div>
                  <div className="text-[11px] text-[#a3a3a3]">Credit amount</div>
                  <div className="text-[18px] font-semibold">${credit.amount}.00</div>
                </div>
                {credit.applied ? (
                  <div className="flex items-center gap-1.5 text-[13px] text-[#16a34a] font-medium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5L13 5" />
                    </svg>
                    Applied to booking
                  </div>
                ) : (
                  <button
                    onClick={() => setCredit({ ...credit, applied: true })}
                    className="px-4 py-2 bg-[#7c3aed] text-white text-[13px] font-semibold rounded-xl hover:bg-[#6d28d9] transition-colors"
                  >
                    Apply to booking
                  </button>
                )}
              </div>
            </div>
          )}

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
          <Field label="Amount" value={vatAmount} editable={isEdit} onChange={setVatAmount} className="mb-2" />
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
          <button
            onClick={isEdit ? handleSave : undefined}
            className={`w-full rounded-xl py-3.5 text-[14px] font-semibold transition-colors ${
              saved
                ? "bg-[#16a34a] text-white"
                : "bg-black text-white hover:bg-[#262626]"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
