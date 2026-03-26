"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ReservationDrawer from "@/components/ReservationDrawer";
import CheckInOutDrawer from "@/components/CheckInOutDrawer";
import { reservations, type Reservation } from "@/lib/data";

const statusFilters = ["All", "Confirmed", "Pending", "Checked in", "Cancelled"];

export default function Home() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkInOutOpen, setCheckInOutOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = reservations.filter((r) => {
    const matchesFilter = activeFilter === "All" || r.status === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      r.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.roomNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Action Cards */}
          <div className="grid grid-cols-4 gap-4 mb-10">
            <ActionCard
              icon={
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="22" height="20" rx="3" />
                  <path d="M3 11h22" />
                  <path d="M8 3v4M20 3v4" />
                  <path d="M10 16h2v2h-2zM16 16h2v2h-2z" />
                </svg>
              }
              title="Check in / check out"
              subtitle="24 checking in today"
              onClick={() => setCheckInOutOpen(true)}
            />
            <ActionCard
              icon={
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M18.5 18.5L25 25" />
                </svg>
              }
              title="Search reservations"
              subtitle="195 rooms occupied"
              onClick={() => {
                searchRef.current?.focus();
                searchRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            />
            <ActionCard
              icon={
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="20" height="22" rx="3" />
                  <path d="M9 8h10M9 13h10M9 18h6" />
                </svg>
              }
              title="View past reservations"
              subtitle="1,564 bookings YTD"
              highlight
              onClick={() => router.push("/past-reservations")}
            />
            <ActionCard
              icon={
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 6v16M6 14h16" />
                </svg>
              }
              title="Add new reservation"
              onClick={() => router.push("/new-reservation")}
            />
          </div>

          {/* Active reservations */}
          <h2 className="text-[20px] font-semibold mb-5">Active reservations</h2>

          {/* Search + Filters */}
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11l3.5 3.5" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-[280px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
              />
            </div>

            <div className="flex items-center gap-1.5">
              {statusFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors border ${
                    activeFilter === filter
                      ? "bg-black text-white border-black"
                      : "bg-white text-[#525252] border-[#e5e5e5] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e5e5] bg-white">
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Guest</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Source</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Check in</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Check out</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Status</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Room No.</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Commission</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Total</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => {
                  const isCancelled = r.status === "Cancelled";
                  return (
                    <tr
                      key={r.id}
                      onClick={() => setSelectedReservation(r)}
                      className={`border-b border-[#f5f5f5] last:border-b-0 cursor-pointer transition-colors hover:bg-[#fafafa] ${
                        isCancelled ? "text-[#c4c4c4]" : ""
                      }`}
                    >
                      <td className={`px-5 py-4 text-[14px] ${isCancelled ? "" : "font-medium"}`}>{r.guest}</td>
                      <td className="px-5 py-4">
                        <span className={`badge ${isCancelled ? "opacity-50" : ""}`}>{r.source}</span>
                      </td>
                      <td className={`px-5 py-4 text-[14px] ${!isCancelled ? "font-medium" : ""}`}>{r.checkIn}</td>
                      <td className="px-5 py-4 text-[14px]">{r.checkOut}</td>
                      <td className="px-5 py-4 text-[14px]">{r.status}</td>
                      <td className="px-5 py-4 text-[14px]">{r.roomNo}</td>
                      <td className="px-5 py-4 text-[14px]">{r.commission}</td>
                      <td className="px-5 py-4 text-[14px]">{r.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-[13px] text-[#737373]">Page {currentPage} of 10</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 4l-4 4 4 4" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
                disabled={currentPage === 10}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <ReservationDrawer
        reservation={selectedReservation}
        onClose={() => setSelectedReservation(null)}
      />

      <CheckInOutDrawer
        open={checkInOutOpen}
        onClose={() => setCheckInOutOpen(false)}
      />
    </div>
  );
}

function ActionCard({
  icon,
  title,
  subtitle,
  highlight,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  highlight?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-6 rounded-2xl border text-center transition-colors ${
        highlight
          ? "bg-[#f9f8f0] border-[#e8e5d4] hover:bg-[#f5f3e8]"
          : "bg-white border-[#e5e5e5] hover:bg-[#fafafa]"
      }`}
    >
      <div className="mb-3 text-[#525252]">{icon}</div>
      <div className="text-[14px] font-semibold mb-0.5">{title}</div>
      {subtitle && <div className="text-[12px] text-[#a3a3a3]">{subtitle}</div>}
    </button>
  );
}
