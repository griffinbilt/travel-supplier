"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ReservationDrawer from "@/components/ReservationDrawer";
import { pastReservations, type Reservation } from "@/lib/data";

const statusFilters = ["All", "Completed", "Cancelled"];

export default function PastReservations() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 10;

  const filtered = pastReservations.filter((r) => {
    const matchesFilter = activeFilter === "All" || r.status === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      r.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.rate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.roomNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header with back */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => router.push("/")}
              className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4l-6 6 6 6" />
              </svg>
            </button>
            <div>
              <h1 className="text-[24px] font-semibold">Past reservations</h1>
              <p className="text-[14px] text-[#737373]">1,564 bookings year to date</p>
            </div>
          </div>

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
                type="text"
                placeholder="Search past reservations"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-[320px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
              />
            </div>

            <div className="flex items-center gap-1.5">
              {statusFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
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
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Rate</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Check in</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Check out</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Status</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Room No.</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Commission</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Total</th>
                </tr>
              </thead>
              <tbody>
                {paged.map((r) => {
                  const isCancelled = r.status === "Cancelled";
                  return (
                    <tr
                      key={r.id}
                      onClick={() => setSelectedReservation(r)}
                      className={`border-b border-[#f5f5f5] last:border-b-0 cursor-pointer transition-colors hover:bg-[#fafafa] ${
                        isCancelled ? "text-[#c4c4c4]" : ""
                      }`}
                    >
                      <td className={`px-5 py-4 text-[14px] ${isCancelled ? "" : "font-medium"}`}>
                        <span className="flex items-center gap-2">
                          {r.guest}
                          {r.vip && <span className="vip-badge">VIP</span>}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`badge ${isCancelled ? "opacity-50" : ""}`}>{r.source}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`badge ${isCancelled ? "opacity-50" : ""}`}>{r.rate}</span>
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
            <span className="text-[13px] text-[#737373]">
              Showing {Math.min(filtered.length, (currentPage - 1) * PAGE_SIZE + 1)}–{Math.min(filtered.length, currentPage * PAGE_SIZE)} of {filtered.length}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[13px] text-[#737373]">Page {currentPage} of {totalPages}</span>
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
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ReservationDrawer
        reservation={selectedReservation}
        onClose={() => setSelectedReservation(null)}
      />
    </div>
  );
}
