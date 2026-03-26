"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { agencies, type Agency } from "@/lib/data";

const statusFilters = ["All", "Active", "Pending"];

export default function AgenciesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = agencies.filter((a) => {
    const matchesFilter = activeFilter === "All" || a.status === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.identifiers.some((id) => id.toLowerCase().includes(searchQuery.toLowerCase())) ||
      a.regions.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / 10));
  const paginated = filtered.slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <h2 className="text-[20px] font-semibold mb-5">Agencies</h2>

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
                placeholder="Search by name, identifier, region..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-[340px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
              />
            </div>

            <div className="flex items-center gap-1.5">
              {statusFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setCurrentPage(1);
                  }}
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
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373] w-[52px]">Status</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Agency</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Identifiers</th>
                  <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Regions</th>
                  <th className="w-[44px]"></th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((agency) => (
                  <AgencyRow key={agency.id} agency={agency} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
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
      </main>
    </div>
  );
}

function AgencyRow({ agency }: { agency: Agency }) {
  const maxIdentifiers = 4;
  const visibleIds = agency.identifiers.slice(0, maxIdentifiers);
  const remainingIds = agency.identifiers.length - maxIdentifiers;

  return (
    <tr className="border-b border-[#f5f5f5] last:border-b-0 cursor-pointer transition-colors hover:bg-[#fafafa]">
      <td className="px-5 py-4">
        {agency.status === "Active" ? (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f0fdf4]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 7l2.5 2.5 4.5-4.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ) : (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fffbeb]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#f59e0b" strokeWidth="1.5" />
              <path d="M7 5v2.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="7" cy="10" r="0.75" fill="#f59e0b" />
            </svg>
          </span>
        )}
      </td>
      <td className="px-5 py-4 text-[14px] font-medium min-w-[180px]">{agency.name}</td>
      <td className="px-5 py-4 text-[14px] text-[#525252] min-w-[300px]">
        <span>
          {visibleIds.join(" \u00B7 ")}
          {remainingIds > 0 && (
            <>
              {" \u2014 "}
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] bg-[#f5f5f5] text-[#737373]">
                +{remainingIds} more
              </span>
            </>
          )}
        </span>
      </td>
      <td className="px-5 py-4">
        <div className="flex items-center gap-1.5">
          {agency.regions.map((region) => (
            <span
              key={region}
              className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[12px] font-medium bg-[#f5f5f5] text-[#525252]"
            >
              {region}
            </span>
          ))}
        </div>
      </td>
      <td className="px-3 py-4 text-[#a3a3a3]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4l4 4-4 4" />
        </svg>
      </td>
    </tr>
  );
}
