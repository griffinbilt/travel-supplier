"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { statementReservations, statementTransfers } from "@/lib/data";

const progressSteps = ["Statement created", "Review statement", "Approve for payment", "Initiate payment", "Processed"];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Opened: "bg-[#f5f5f5] text-[#525252]",
    Reviewed: "bg-[#f5f5f5] text-[#525252]",
    Approved: "bg-[#dcfce7] text-[#166534]",
    "Payment in progress": "bg-[#fef3c7] text-[#92400e]",
    Processed: "bg-[#dcfce7] text-[#166534]",
  };
  return (
    <span className={`inline-flex px-2.5 py-1 rounded-md text-[12px] font-medium ${colors[status] || "bg-[#f5f5f5] text-[#525252]"}`}>
      {status}
    </span>
  );
}

function getProgressIndex(status: string) {
  switch (status) {
    case "Opened": return 0;
    case "Reviewed": return 1;
    case "Approved": return 2;
    case "Payment in progress": return 3;
    case "Processed": return 4;
    default: return 0;
  }
}

function TransferStatusBadge({ status }: { status: string }) {
  if (status === "Received") return <span className="text-[#16a34a] text-[14px] font-medium">{status}</span>;
  if (status === "Cancelled") return <span className="text-[#dc2626] text-[14px] font-medium">{status}</span>;
  return <span className="text-[14px] font-medium">{status}</span>;
}

function StatementDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const statementId = searchParams.get("id") || "R1FLWQ2U";
  const status = searchParams.get("status") || "Opened";
  const [tab, setTab] = useState<"reservations" | "transfers">("reservations");

  const progressIdx = getProgressIndex(status);
  const isPaymentPhase = progressIdx >= 3;

  // Pick action buttons based on status
  const actionButton = (() => {
    switch (status) {
      case "Opened": return "Mark as reviewed";
      case "Reviewed": return "Approve for payment";
      case "Approved": return "Initiate payment";
      default: return null;
    }
  })();

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          {/* Back link */}
          <button
            onClick={() => router.push("/statements")}
            className="flex items-center gap-2 text-[14px] text-[#525252] hover:text-black mb-4 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M10 4l-4 4 4 4" />
            </svg>
            Back to reservations
          </button>

          {/* Header row */}
          <div className="flex items-start justify-between mb-1">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-[24px] font-semibold font-mono">{statementId}</h1>
                <span className="text-[14px] text-[#737373]">(King, Wolff and Gibson Group)</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#737373]">
                <StatusBadge status={status} />
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="2" width="12" height="11" rx="1.5" />
                    <path d="M1 5.5h12M4 1v2.5M10 1v2.5" />
                  </svg>
                  May 1, 2026 - May 28, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="7" cy="7" r="6" />
                    <path d="M7 4v3h3" />
                  </svg>
                  $37,912.00
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!isPaymentPhase && (
                <button className="flex items-center gap-2 px-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] hover:bg-[#fafafa] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                  Add reservations
                </button>
              )}
              {isPaymentPhase && (
                <button className="flex items-center gap-2 px-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] hover:bg-[#fafafa] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M8 2v8M4 6l4 4 4-4M2 12h12" />
                  </svg>
                  Download
                </button>
              )}
              {actionButton && (
                <button className="px-5 py-2.5 bg-black text-white rounded-xl text-[14px] font-medium hover:bg-[#262626] transition-colors">
                  {actionButton}
                </button>
              )}
              <button className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] rounded-xl hover:bg-[#fafafa] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="3" r="1.5" />
                  <circle cx="8" cy="8" r="1.5" />
                  <circle cx="8" cy="13" r="1.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main content + sidebar */}
          <div className="flex gap-6 mt-6">
            {/* Left content */}
            <div className="flex-1 min-w-0">
              {/* Tabs */}
              <div className="flex gap-1 border-b border-[#e5e5e5] mb-6">
                <button
                  onClick={() => setTab("reservations")}
                  className={`px-4 py-2.5 text-[14px] font-medium border-b-2 -mb-px transition-colors ${
                    tab === "reservations" ? "border-black text-black" : "border-transparent text-[#737373] hover:text-[#525252]"
                  }`}
                >
                  Reservations
                </button>
                <button
                  onClick={() => setTab("transfers")}
                  className={`px-4 py-2.5 text-[14px] font-medium border-b-2 -mb-px transition-colors ${
                    tab === "transfers" ? "border-black text-black" : "border-transparent text-[#737373] hover:text-[#525252]"
                  }`}
                >
                  Transfers
                </button>
              </div>

              {tab === "reservations" ? (
                <>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-[#e5e5e5] rounded-xl px-5 py-4">
                      <div className="text-[13px] text-[#737373] mb-1">Total due</div>
                      <div className="text-[24px] font-semibold">$37,912.00</div>
                    </div>
                    <div className="border border-[#e5e5e5] rounded-xl px-5 py-4">
                      <div className="text-[13px] text-[#737373] mb-1">Total reservations</div>
                      <div className="text-[24px] font-semibold">11</div>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative flex-1">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <circle cx="7" cy="7" r="5" />
                        <path d="M11 11l3.5 3.5" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search reservations..."
                        className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-full focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                      />
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] rounded-xl hover:bg-[#fafafa] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M2 4h12M4 8h8M6 12h4" />
                      </svg>
                    </button>
                  </div>

                  {/* Reservations table */}
                  <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#e5e5e5]">
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Traveler</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Agency</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Dates</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Comm. fare</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Due</th>
                        </tr>
                      </thead>
                      <tbody>
                        {statementReservations.map((r, i) => (
                          <tr key={i} className="border-b border-[#f5f5f5] last:border-b-0 hover:bg-[#fafafa] transition-colors cursor-pointer">
                            <td className="px-4 py-3.5">
                              <div className="text-[14px] font-medium">{r.traveler}</div>
                              <div className="text-[12px] text-[#a3a3a3]">{r.statementId}</div>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="text-[14px]">{r.agency}</div>
                              <div className="text-[12px] text-[#a3a3a3]">{r.agencyId}</div>
                            </td>
                            <td className="px-4 py-3.5 text-[14px]">{r.dates}</td>
                            <td className="px-4 py-3.5 text-[14px] font-mono">{r.commFare}</td>
                            <td className="px-4 py-3.5 text-[14px] font-mono">{r.due}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-[13px] text-[#737373]">Showing 25 of 1,234</div>
                </>
              ) : (
                <>
                  {/* Transfers stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-[#e5e5e5] rounded-xl px-5 py-4">
                      <div className="text-[13px] text-[#737373] mb-1">Total received</div>
                      <div className="text-[24px] font-semibold">$15,500.00</div>
                    </div>
                    <div className="border border-[#e5e5e5] rounded-xl px-5 py-4">
                      <div className="text-[13px] text-[#737373] mb-1">Total pending</div>
                      <div className="text-[24px] font-semibold">$22,412.00</div>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative flex-1">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <circle cx="7" cy="7" r="5" />
                        <path d="M11 11l3.5 3.5" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search transfers..."
                        className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-full focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                      />
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] rounded-xl hover:bg-[#fafafa] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M2 4h12M4 8h8M6 12h4" />
                      </svg>
                    </button>
                  </div>

                  {/* Transfers table */}
                  <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#e5e5e5]">
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">ID</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Beneficiary</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Status</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Sent</th>
                          <th className="text-left px-4 py-3 text-[13px] font-medium text-[#737373]">Received</th>
                        </tr>
                      </thead>
                      <tbody>
                        {statementTransfers.map((t, i) => (
                          <tr key={i} className="border-b border-[#f5f5f5] last:border-b-0 hover:bg-[#fafafa] transition-colors cursor-pointer">
                            <td className="px-4 py-3.5 text-[14px] font-mono font-medium">{t.id}</td>
                            <td className="px-4 py-3.5 text-[14px]">{t.beneficiary}</td>
                            <td className="px-4 py-3.5"><TransferStatusBadge status={t.status} /></td>
                            <td className="px-4 py-3.5">
                              <div className="text-[14px] font-mono">{t.sent}</div>
                              <div className="text-[12px] text-[#a3a3a3]">{t.sentDate}</div>
                            </td>
                            <td className="px-4 py-3.5">
                              {t.status === "Cancelled" ? (
                                <div className="text-[14px] text-[#a3a3a3]">
                                  <div>$0.00</div>
                                  <div className="text-[12px] text-[#dc2626]">Cancelled</div>
                                </div>
                              ) : (
                                <div>
                                  <div className="text-[14px] font-mono">{t.received}</div>
                                  {t.receivedDate && <div className="text-[12px] text-[#a3a3a3]">{t.receivedDate}</div>}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-[13px] text-[#737373]">Showing 25 of 1,234</div>
                </>
              )}
            </div>

            {/* Right sidebar */}
            <div className="w-[300px] shrink-0 space-y-4">
              {/* Progress */}
              <div className="border border-[#e5e5e5] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[16px] font-semibold">Progress</h3>
                  <StatusBadge status={status} />
                </div>
                <div className="space-y-0">
                  {progressSteps.map((step, i) => {
                    const isCompleted = i <= progressIdx;
                    const isCurrent = i === progressIdx;
                    const isLast = i === progressSteps.length - 1;
                    return (
                      <div key={step} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          {isCompleted ? (
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isCurrent && progressIdx < 4 ? "bg-white border-2 border-[#171717]" : "bg-[#171717]"}`}>
                              {!isCurrent || progressIdx === 4 ? (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M2 6l3 3 5-5" />
                                </svg>
                              ) : null}
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-[#d4d4d4] shrink-0" />
                          )}
                          {!isLast && (
                            <div className={`w-0.5 h-6 ${i < progressIdx ? "bg-[#171717]" : "bg-[#e5e5e5]"}`} />
                          )}
                        </div>
                        <div className={`text-[14px] pt-0.5 ${isCompleted ? "font-medium" : "text-[#a3a3a3]"}`}>
                          {step}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent activity */}
              <div className="border border-[#e5e5e5] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[16px] font-semibold">Recent activity</h3>
                  <button className="text-[13px] text-[#525252] hover:text-black transition-colors">View all</button>
                </div>
                <div className="space-y-4">
                  {tab === "reservations" ? (
                    <>
                      <ActivityItem
                        icon="import"
                        title="Reservations imported"
                        desc="9 reservations imported from file by Theo Mason."
                        time="5m ago"
                      />
                      <ActivityItem
                        icon="add"
                        title="Reservation added"
                        desc="Manual reservation added for Flying Squirrels Experiences..."
                        time="18m ago"
                      />
                      <ActivityItem
                        icon="create"
                        title="Statement created"
                        desc="Created by Theo Mason"
                        time="25m ago"
                      />
                    </>
                  ) : (
                    <>
                      <ActivityItem
                        icon="received"
                        title="Transfer received"
                        desc="High Sky Travel received $2,125.00"
                        time="5m ago"
                      />
                      <ActivityItem
                        icon="cancelled"
                        title="Transfer canceled"
                        desc="Transfer MMASF12 was cancelled"
                        time="17m ago"
                      />
                      <ActivityItem
                        icon="initiated"
                        title="Payment initiated"
                        desc="Initiated by Theo Mason"
                        time="25m ago"
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Notes */}
              <div className="border border-[#e5e5e5] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[16px] font-semibold">Notes</h3>
                  <button className="text-[13px] text-[#525252] hover:text-black transition-colors">View all</button>
                </div>

                <div className="text-[12px] text-[#737373] mb-2">Your private notes</div>
                <NoteCard />

                <div className="text-[12px] text-[#737373] mb-2 mt-4">Shared notes</div>
                <NoteCard />
                <NoteCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ActivityItem({ icon, title, desc, time }: { icon: string; title: string; desc: string; time: string }) {
  const iconColors: Record<string, string> = {
    import: "bg-[#ede9fe] text-[#7c3aed]",
    add: "bg-[#ede9fe] text-[#7c3aed]",
    create: "bg-[#dcfce7] text-[#16a34a]",
    received: "bg-[#dcfce7] text-[#16a34a]",
    cancelled: "bg-[#fee2e2] text-[#dc2626]",
    initiated: "bg-[#dcfce7] text-[#16a34a]",
  };

  return (
    <div className="flex gap-3">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconColors[icon] || "bg-[#f5f5f5]"}`}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          {icon === "import" || icon === "add" ? <path d="M7 3v8M3 7h8" /> :
           icon === "create" || icon === "initiated" ? <path d="M3 7l3 3 5-5" /> :
           icon === "received" ? <path d="M7 3v8M4 8l3 3 3-3" /> :
           <path d="M4 4l6 6M10 4l-6 6" />}
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-medium">{title}</div>
        <div className="text-[12px] text-[#a3a3a3] leading-snug">{desc}</div>
      </div>
      <div className="text-[12px] text-[#a3a3a3] shrink-0">{time}</div>
    </div>
  );
}

function NoteCard() {
  return (
    <div className="border border-[#e5e5e5] rounded-xl p-3.5 mb-2 bg-[#fffbeb]">
      <p className="text-[13px] leading-relaxed mb-3">
        Client mentioned interest in culinary experiences for future trips. Vegetarian, prefers wine tastings over cocktail bars.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-[#a3a3a3]">Janet Richardson &middot; Nov 12, 23</span>
        <button className="text-[#a3a3a3] hover:text-[#525252] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="4" cy="8" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="12" cy="8" r="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function StatementDetail() {
  return (
    <Suspense>
      <StatementDetailContent />
    </Suspense>
  );
}
