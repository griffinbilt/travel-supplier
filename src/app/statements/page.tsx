"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { statements } from "@/lib/data";

const statusColors: Record<string, string> = {
  Opened: "bg-[#f5f5f5] text-[#525252]",
  Reviewed: "bg-[#f5f5f5] text-[#525252]",
  Approved: "bg-[#dcfce7] text-[#166534]",
  "Payment in progress": "bg-[#fef3c7] text-[#92400e]",
  Processed: "bg-[#dcfce7] text-[#166534]",
  Cancelled: "bg-[#fee2e2] text-[#991b1b]",
};

export default function StatementsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const statuses = ["All", "Opened", "Reviewed", "Approved", "Payment in progress", "Processed", "Cancelled"];

  const filtered = statements.filter((s) => {
    const matchesSearch =
      searchQuery === "" ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.property.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-[28px] font-semibold">Statements</h1>
            <button
              onClick={() => router.push("/statements/new")}
              className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-[14px] font-medium hover:bg-[#262626] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
              New statement
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="border border-[#e5e5e5] rounded-2xl px-6 py-5">
              <div className="text-[13px] text-[#737373] mb-1">Gross volume</div>
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] font-semibold">$37,552</span>
                <span className="text-[13px] text-[#a3a3a3]">Year to date</span>
              </div>
            </div>
            <div className="border border-[#e5e5e5] rounded-2xl px-6 py-5">
              <div className="text-[13px] text-[#737373] mb-1">Commission paid</div>
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] font-semibold">$3,552</span>
                <span className="text-[13px] text-[#a3a3a3]">Year to date</span>
              </div>
            </div>
            <div className="border border-[#e5e5e5] rounded-2xl px-6 py-5">
              <div className="text-[13px] text-[#737373] mb-1">Pending commission</div>
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] font-semibold">$1,552</span>
                <span className="text-[13px] text-[#a3a3a3]">Year to date</span>
              </div>
            </div>
          </div>

          {/* All statements */}
          <h2 className="text-[20px] font-semibold mb-5">All statements</h2>

          {/* Search + Filter */}
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11l3.5 3.5" />
              </svg>
              <input
                type="text"
                placeholder="Search by ID or supplier name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-[340px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="flex items-center gap-2 px-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] hover:bg-[#fafafa] transition-colors"
              >
                Status{statusFilter !== "All" ? `: ${statusFilter}` : ""}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 5.5l3 3 3-3" />
                </svg>
              </button>
              {showStatusDropdown && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-[#e5e5e5] rounded-xl shadow-lg z-10 py-1 min-w-[180px]">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setStatusFilter(s); setShowStatusDropdown(false); }}
                      className={`w-full text-left px-4 py-2 text-[13px] hover:bg-[#f5f5f5] transition-colors ${statusFilter === s ? "font-medium" : ""}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e5e5] bg-white">
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">ID</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Property</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Date range</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Status</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Reservations</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Commission due</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr
                    key={i}
                    onClick={() => router.push(`/statements/detail?id=${s.id}&status=${encodeURIComponent(s.status)}`)}
                    className="border-b border-[#f5f5f5] last:border-b-0 cursor-pointer hover:bg-[#fafafa] transition-colors"
                  >
                    <td className="px-5 py-4 text-[14px] font-medium font-mono">{s.id}</td>
                    <td className="px-5 py-4 text-[14px]">{s.property}</td>
                    <td className="px-5 py-4 text-[14px]">{s.dateRange}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-md text-[12px] font-medium ${statusColors[s.status] || ""}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[14px]">{s.reservations}</td>
                    <td className="px-5 py-4 text-[14px] font-mono">{s.commissionDue}</td>
                    <td className="px-5 py-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M6 4l4 4-4 4" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-[13px] text-[#737373]">Showing 25 of 1,234</span>
            <div className="flex items-center gap-3">
              <span className="text-[13px] text-[#737373]">Page {currentPage} of 13</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M10 4l-4 4 4 4" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(13, currentPage + 1))}
                  disabled={currentPage === 13}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
