"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const tabs = ["Beneficiares", "Identifiers", "Users", "Statements"];

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

const statementStatusOptions = ["Checked-Out", "Checked-In", "Confirmed", "No-Show", "Cancelled"];
const dateRangeOptions = ["Check-out Date", "Booking Date", "Check-in Date"];
const statementCycleOptions = ["Monthly", "Bi-Weekly", "Weekly"];
const consolidationOptions = ["Per Agency Profile", "Per IATA Number"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Beneficiares");
  const [currentPage, setCurrentPage] = useState(1);

  // Statements state
  const [triggerStatuses, setTriggerStatuses] = useState<string[]>(["Checked-Out"]);
  const [coolingOffHours, setCoolingOffHours] = useState(48);
  const [dateRangeField, setDateRangeField] = useState("Check-out Date");
  const [allowNoShowCommission, setAllowNoShowCommission] = useState(false);
  const [statementCycle, setStatementCycle] = useState("Monthly");
  const [consolidation, setConsolidation] = useState("Per Agency Profile");
  const [minimumThreshold, setMinimumThreshold] = useState(25);
  const [thresholdEnabled, setThresholdEnabled] = useState(true);

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

          {/* Statements Tab */}
          {activeTab === "Statements" && (
            <div className="space-y-10">
              {/* Trigger Rules */}
              <section>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v4M10 14v4M2 10h4M14 10h4" />
                    <circle cx="10" cy="10" r="3" />
                  </svg>
                  <h2 className="text-[20px] font-semibold">Trigger Rules</h2>
                </div>
                <p className="text-[14px] text-[#737373] mb-6">
                  Define when a reservation becomes statement-ready based on its lifecycle stage.
                </p>

                <div className="space-y-6">
                  {/* Status Requirements */}
                  <div className="border border-[#e5e5e5] rounded-xl p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-[15px] font-semibold mb-1">Status Requirements</h3>
                        <p className="text-[13px] text-[#737373]">
                          Reservations must reach one of these statuses before appearing on a statement.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {statementStatusOptions.map((status) => {
                        const active = triggerStatuses.includes(status);
                        return (
                          <button
                            key={status}
                            onClick={() =>
                              setTriggerStatuses(
                                active
                                  ? triggerStatuses.filter((s) => s !== status)
                                  : [...triggerStatuses, status]
                              )
                            }
                            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors border ${
                              active
                                ? "bg-black text-white border-black"
                                : "bg-white text-[#525252] border-[#e5e5e5] hover:bg-[#f5f5f5]"
                            }`}
                          >
                            {status}
                          </button>
                        );
                      })}
                    </div>
                    {/* No-Show toggle */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#f0f0f0]">
                      <div>
                        <div className="text-[14px] font-medium">Allow commission on no-shows</div>
                        <div className="text-[13px] text-[#a3a3a3]">Include cancellation fees in commission calculations</div>
                      </div>
                      <button
                        onClick={() => setAllowNoShowCommission(!allowNoShowCommission)}
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          allowNoShowCommission ? "bg-black" : "bg-[#d4d4d4]"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                            allowNoShowCommission ? "translate-x-5" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Cooling Off Period */}
                  <div className="border border-[#e5e5e5] rounded-xl p-5">
                    <h3 className="text-[15px] font-semibold mb-1">Cooling Off Period</h3>
                    <p className="text-[13px] text-[#737373] mb-4">
                      Buffer after checkout to allow folio finalization, posting corrections, or dispute handling before the reservation locks into a statement.
                    </p>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={coolingOffHours}
                        onChange={(e) => setCoolingOffHours(Number(e.target.value))}
                        min={0}
                        max={720}
                        className="w-[100px] px-3 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
                      />
                      <span className="text-[14px] text-[#737373]">hours after checkout</span>
                    </div>
                  </div>

                  {/* Date Range Alignment */}
                  <div className="border border-[#e5e5e5] rounded-xl p-5">
                    <h3 className="text-[15px] font-semibold mb-1">Date Range Alignment</h3>
                    <p className="text-[13px] text-[#737373] mb-4">
                      Determines which date field assigns a reservation to a particular statement period.
                    </p>
                    <div className="flex gap-2">
                      {dateRangeOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setDateRangeField(option)}
                          className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors border ${
                            dateRangeField === option
                              ? "bg-black text-white border-black"
                              : "bg-white text-[#525252] border-[#e5e5e5] hover:bg-[#f5f5f5]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {dateRangeField === "Check-out Date" && (
                      <div className="mt-3 px-3 py-2 bg-[#f5f5f5] rounded-lg text-[13px] text-[#737373]">
                        Recommended. Industry standard for commission statements.
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Grouping & Frequency Rules */}
              <section>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="7" height="7" rx="1.5" />
                    <rect x="11" y="2" width="7" height="7" rx="1.5" />
                    <rect x="2" y="11" width="7" height="7" rx="1.5" />
                    <rect x="11" y="11" width="7" height="7" rx="1.5" />
                  </svg>
                  <h2 className="text-[20px] font-semibold">Grouping & Frequency</h2>
                </div>
                <p className="text-[14px] text-[#737373] mb-6">
                  Configure how statement-ready reservations are grouped into individual documents.
                </p>

                <div className="space-y-6">
                  {/* Statement Cycle */}
                  <div className="border border-[#e5e5e5] rounded-xl p-5">
                    <h3 className="text-[15px] font-semibold mb-1">Statement Cycle</h3>
                    <p className="text-[13px] text-[#737373] mb-4">
                      How frequently statements are generated. Use bi-weekly for high-volume agencies like Expedia or Booking.com.
                    </p>
                    <div className="flex gap-2">
                      {statementCycleOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setStatementCycle(option)}
                          className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors border ${
                            statementCycle === option
                              ? "bg-black text-white border-black"
                              : "bg-white text-[#525252] border-[#e5e5e5] hover:bg-[#f5f5f5]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {statementCycle === "Monthly" && (
                      <div className="mt-3 text-[13px] text-[#737373]">
                        All check-outs from the 1st to the last day of the month.
                      </div>
                    )}
                    {statementCycle === "Bi-Weekly" && (
                      <div className="mt-3 text-[13px] text-[#737373]">
                        Statements generated every two weeks (1st–15th, 16th–end of month).
                      </div>
                    )}
                    {statementCycle === "Weekly" && (
                      <div className="mt-3 text-[13px] text-[#737373]">
                        Statements generated every Monday through Sunday.
                      </div>
                    )}
                  </div>

                  {/* Consolidation Level */}
                  <div className="border border-[#e5e5e5] rounded-xl p-5">
                    <h3 className="text-[15px] font-semibold mb-1">Consolidation Level</h3>
                    <p className="text-[13px] text-[#737373] mb-4">
                      Agencies may have multiple branches under one IATA number. Choose how to group them.
                    </p>
                    <div className="flex gap-2">
                      {consolidationOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setConsolidation(option)}
                          className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors border ${
                            consolidation === option
                              ? "bg-black text-white border-black"
                              : "bg-white text-[#525252] border-[#e5e5e5] hover:bg-[#f5f5f5]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Minimum Threshold */}
                  <div className="border border-[#e5e5e5] rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-[15px] font-semibold mb-1">Minimum Payout Threshold</h3>
                        <p className="text-[13px] text-[#737373]">
                          Skip generating a statement or payout when the total commission is below this amount. Saves on bank transfer fees.
                        </p>
                      </div>
                      <button
                        onClick={() => setThresholdEnabled(!thresholdEnabled)}
                        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                          thresholdEnabled ? "bg-black" : "bg-[#d4d4d4]"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                            thresholdEnabled ? "translate-x-5" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {thresholdEnabled && (
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px] text-[#a3a3a3]">$</span>
                          <input
                            type="number"
                            value={minimumThreshold}
                            onChange={(e) => setMinimumThreshold(Number(e.target.value))}
                            min={0}
                            className="w-[120px] pl-7 pr-3 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
                          />
                        </div>
                        <span className="text-[14px] text-[#737373]">minimum commission per statement</span>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Save */}
              <div className="flex justify-end pt-2 pb-4">
                <button className="bg-black text-white px-6 py-2.5 rounded-xl text-[14px] font-medium hover:bg-[#262626] transition-colors">
                  Save changes
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
