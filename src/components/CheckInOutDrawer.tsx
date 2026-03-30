"use client";

import { useState, useEffect } from "react";
import { type Reservation, checkingInToday, checkingOutToday } from "@/lib/data";

interface Props {
  open: boolean;
  onClose: () => void;
  onModify?: (reservation: Reservation) => void;
}

export default function CheckInOutDrawer({ open, onClose, onModify }: Props) {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<"in" | "out">("in");
  const [checkedIn, setCheckedIn] = useState<Set<number>>(new Set());
  const [checkedOut, setCheckedOut] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const toggleCheckIn = (id: number) => {
    setCheckedIn((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCheckOut = (id: number) => {
    setCheckedOut((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (!open) return null;

  const guests = tab === "in" ? checkingInToday : checkingOutToday;
  const processed = tab === "in" ? checkedIn : checkedOut;
  const toggle = tab === "in" ? toggleCheckIn : toggleCheckOut;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 z-40 drawer-overlay ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[560px] max-w-full bg-white z-50 shadow-2xl drawer-panel flex flex-col ${
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
          <span className="text-[15px] font-semibold">Check in / check out</span>
          <div className="w-8" />
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4 flex gap-1 border-b border-[#e5e5e5]">
          <button
            onClick={() => setTab("in")}
            className={`px-4 py-2.5 text-[14px] font-medium border-b-2 transition-colors -mb-px ${
              tab === "in"
                ? "border-black text-black"
                : "border-transparent text-[#737373] hover:text-[#525252]"
            }`}
          >
            Checking in ({checkingInToday.length})
          </button>
          <button
            onClick={() => setTab("out")}
            className={`px-4 py-2.5 text-[14px] font-medium border-b-2 transition-colors -mb-px ${
              tab === "out"
                ? "border-black text-black"
                : "border-transparent text-[#737373] hover:text-[#525252]"
            }`}
          >
            Checking out ({checkingOutToday.length})
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto drawer-scroll">
          <div className="px-6 py-2">
            {guests.map((guest) => {
              const isDone = processed.has(guest.id);
              return (
                <div
                  key={guest.id}
                  className={`flex items-center justify-between py-4 border-b border-[#f5f5f5] last:border-b-0 ${
                    isDone ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[14px] font-medium">{guest.guest}</span>
                      {guest.vip && <span className="vip-badge">VIP</span>}
                      <span className="badge">{guest.source}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[13px] text-[#737373]">
                      <span>Room {guest.roomNo}</span>
                      <span>{guest.checkIn} - {guest.checkOut}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        handleClose();
                        setTimeout(() => onModify?.(guest), 350);
                      }}
                      className="px-3 py-2 rounded-xl text-[13px] font-medium text-[#525252] border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors"
                    >
                      Modify
                    </button>
                    <button
                      onClick={() => toggle(guest.id)}
                      className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all ${
                        isDone
                          ? "bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0]"
                          : tab === "in"
                          ? "bg-black text-white hover:bg-[#262626]"
                          : "bg-white text-black border border-[#e5e5e5] hover:bg-[#f5f5f5]"
                      }`}
                    >
                      {isDone
                        ? tab === "in"
                          ? "Checked in"
                          : "Checked out"
                        : tab === "in"
                        ? "Check in"
                        : "Check out"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary footer */}
        <div className="px-6 py-4 border-t border-[#e5e5e5] bg-[#fafafa]">
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-[#737373]">
              {processed.size} of {guests.length} {tab === "in" ? "checked in" : "checked out"}
            </span>
            {processed.size > 0 && (
              <button
                onClick={() => (tab === "in" ? setCheckedIn(new Set()) : setCheckedOut(new Set()))}
                className="text-[#525252] hover:text-black underline transition-colors"
              >
                Reset all
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
