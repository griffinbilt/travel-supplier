"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const tabs = ["Beneficiares", "Identifiers", "Users"];

const beneficiaries = [
  {
    id: "09KUKR8S",
    property: "King, Wolff and...",
    statement: "6KDFB31D",
    beneficiary: "High Sky Travel",
    country: "US",
    status: "Ready to pay",
    sent: "$0.00",
    sentSub: "pending",
    received: "$0.00",
    receivedSub: "pending",
  },
  {
    id: "09KUKR8S",
    property: "King, Wolff and...",
    statement: "6KDFB31D",
    beneficiary: "High Sky Travel",
    country: "US",
    status: "Received",
    sent: "$0.00",
    sentSub: "pending",
    received: "$0.00",
    receivedSub: "pending",
  },
  {
    id: "09KUKR8S",
    property: "King, Wolff and...",
    statement: "6KDFB31D",
    beneficiary: "High Sky Travel",
    country: "US",
    status: "Sent",
    sent: "$0.00",
    sentSub: "pending",
    received: "$0.00",
    receivedSub: "pending",
  },
];

const statusColors: Record<string, string> = {
  "Ready to pay": "text-[#c2910a]",
  Received: "text-[#525252]",
  Sent: "text-[#525252]",
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Beneficiares");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header */}
          <h1 className="text-[28px] font-semibold mb-6">Settings</h1>

          {/* Tabs */}
          <div className="border-b border-[#e5e5e5] mb-8">
            <div className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-[14px] font-medium transition-colors relative ${
                    activeTab === tab
                      ? "text-black"
                      : "text-[#a3a3a3] hover:text-[#525252]"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Beneficiaries Section */}
          {activeTab === "Beneficiares" && (
            <div>
              {/* Section Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="16" height="12" rx="2" />
                      <path d="M2 8h16" />
                      <path d="M6 12h3" />
                    </svg>
                    <h2 className="text-[20px] font-semibold">Beneficiaries</h2>
                  </div>
                  <p className="text-[14px] text-[#737373]">
                    Manage your beneficiaries by adding bank account details and linking the identifiers you want payable to them.
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-[14px] font-medium hover:bg-[#262626] transition-colors whitespace-nowrap">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                  New beneficiary
                </button>
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
                      <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Sent</th>
                      <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Received</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beneficiaries.map((b, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#f5f5f5] last:border-b-0 hover:bg-[#fafafa] transition-colors"
                      >
                        <td className="px-5 py-4 text-[14px] font-mono text-[#737373]">{b.id}</td>
                        <td className="px-5 py-4 text-[14px] text-[#737373]">{b.property}</td>
                        <td className="px-5 py-4 text-[14px] font-mono text-[#737373]">{b.statement}</td>
                        <td className="px-5 py-4 text-[14px]">{b.beneficiary}</td>
                        <td className="px-5 py-4 text-[14px]">{b.country}</td>
                        <td className="px-5 py-4">
                          <span className={`text-[14px] ${statusColors[b.status] || "text-[#525252]"}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px] font-mono text-[#a3a3a3]">{b.sent}</div>
                          <div className="text-[12px] text-[#a3a3a3]">{b.sentSub}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px] font-mono text-[#a3a3a3]">{b.received}</div>
                          <div className="text-[12px] text-[#a3a3a3]">{b.receivedSub}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-[13px] text-[#737373]">Showing 3 of 3</span>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-[#737373]">Page {currentPage} of 1</span>
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
                      onClick={() => setCurrentPage(Math.min(1, currentPage + 1))}
                      disabled={currentPage === 1}
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
          )}

          {/* Placeholder for other tabs */}
          {activeTab === "Identifiers" && (
            <div className="text-[14px] text-[#737373] py-12 text-center">
              Identifiers settings coming soon.
            </div>
          )}
          {activeTab === "Users" && (
            <div className="text-[14px] text-[#737373] py-12 text-center">
              Users settings coming soon.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
