"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { transfers } from "@/lib/data";

const statusFilters = ["All", "Ready to pay", "Received", "Sent", "Cancelled"];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    "Ready to pay": "text-[#8B7E2A] bg-[#faf6e6]",
    Received: "text-[#2D6A2E] bg-[#edf7ed]",
    Sent: "text-[#171717] bg-[#f5f5f5]",
    Cancelled: "text-[#B91C1C] bg-[#fef2f2]",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[13px] font-medium ${colors[status] || ""}`}>
      {status}
    </span>
  );
}

export default function Transfers() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = transfers.filter((t) => {
    const matchesFilter = statusFilter === "All" || t.status === statusFilter;
    const matchesSearch =
      searchQuery === "" ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.beneficiary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.property.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <h1 className="text-[28px] font-semibold mb-6">Transfers</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="border border-[#e5e5e5] rounded-xl p-5">
              <div className="text-[14px] text-[#737373] mb-1">Gross volume</div>
              <div className="text-[28px] font-semibold">$37,552</div>
              <div className="text-[13px] text-[#a3a3a3]">Year to date</div>
            </div>
            <div className="border border-[#e5e5e5] rounded-xl p-5">
              <div className="text-[14px] text-[#737373] mb-1">Commission paid</div>
              <div className="text-[28px] font-semibold">$3,552</div>
              <div className="text-[13px] text-[#a3a3a3]">Year to date</div>
            </div>
            <div className="border border-[#e5e5e5] rounded-xl p-5">
              <div className="text-[14px] text-[#737373] mb-1">Pending transfers</div>
              <div className="text-[28px] font-semibold">234</div>
              <div className="text-[13px] text-[#a3a3a3]">Year to date</div>
            </div>
          </div>

          {/* All transfers */}
          <h2 className="text-[20px] font-semibold mb-5">All transfers</h2>

          {/* Search + Status Filter */}
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
                placeholder="Search transfers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-[280px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] font-medium text-[#525252] hover:bg-[#f5f5f5] transition-colors"
              >
                Status
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6l3 3 3-3" />
                </svg>
              </button>
              {statusDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-[160px] bg-white border border-[#e5e5e5] rounded-lg shadow-lg z-10 py-1">
                  {statusFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => {
                        setStatusFilter(filter);
                        setStatusDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[14px] hover:bg-[#f5f5f5] transition-colors ${
                        statusFilter === filter ? "font-medium text-black" : "text-[#525252]"
                      }`}
                    >
                      {filter}
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
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Statement</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Beneficiary</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Country</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Status</th>
                  <th className="text-right px-5 py-3 text-[13px] font-medium text-[#737373]">Sent</th>
                  <th className="text-right px-5 py-3 text-[13px] font-medium text-[#737373]">Received</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t, i) => (
                  <tr
                    key={i}
                    onClick={() => router.push("/transfers/detail")}
                    className="border-b border-[#f5f5f5] last:border-b-0 cursor-pointer transition-colors hover:bg-[#fafafa]"
                  >
                    <td className="px-5 py-4 text-[14px] font-medium">{t.id}</td>
                    <td className="px-5 py-4 text-[14px]">{t.property}</td>
                    <td className="px-5 py-4 text-[14px]">{t.statement}</td>
                    <td className="px-5 py-4 text-[14px]">{t.beneficiary}</td>
                    <td className="px-5 py-4 text-[14px]">{t.country}</td>
                    <td className="px-5 py-4">
                      <StatusBadge status={t.status} />
                    </td>
                    <td className="px-5 py-4 text-[14px] text-right">
                      <div>{t.sent}</div>
                      <div className="text-[12px] text-[#a3a3a3]">pending</div>
                    </td>
                    <td className="px-5 py-4 text-[14px] text-right">
                      <div>{t.received}</div>
                      <div className="text-[12px] text-[#a3a3a3]">pending</div>
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
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 4l-4 4 4 4" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(13, currentPage + 1))}
                  disabled={currentPage === 13}
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
    </div>
  );
}
