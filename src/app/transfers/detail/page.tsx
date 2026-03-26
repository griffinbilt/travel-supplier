"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { transferDetail } from "@/lib/data";

function StatusBadge({ status }: { status: string }) {
  const isReceived = status === "Received";
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-medium ${
      isReceived ? "text-[#2D6A2E] bg-[#edf7ed]" : "text-[#8B7E2A] bg-[#faf6e6]"
    }`}>
      {status}
      {isReceived && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7l3 3 5-5" />
        </svg>
      )}
    </span>
  );
}

export default function TransferDetailPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const detail = transferDetail;

  const filteredReservations = detail.reservations.filter((r) => {
    if (searchQuery === "") return true;
    const q = searchQuery.toLowerCase();
    return (
      r.traveler.toLowerCase().includes(q) ||
      r.identifierValue.toLowerCase().includes(q) ||
      r.travelerCode.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Back link */}
          <button
            onClick={() => router.push("/transfers")}
            className="flex items-center gap-1.5 text-[14px] text-[#525252] hover:text-black transition-colors mb-4"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 4l-4 4 4 4" />
            </svg>
            Back to transfers
          </button>

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-[24px] font-semibold mb-3">Transfer {detail.id}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <StatusBadge status={detail.status} />
                <span className="text-[14px] text-[#737373]">|</span>
                <span className="flex items-center gap-1.5 text-[14px] text-[#525252]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7" cy="7" r="6" />
                    <path d="M7 4v3h3" />
                  </svg>
                  Payable to: <span className="font-medium text-black">{detail.payableTo}</span>
                </span>
                <span className="text-[14px] text-[#737373]">|</span>
                <span className="flex items-center gap-1.5 text-[14px] text-[#525252]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="1" width="10" height="12" rx="1.5" />
                    <path d="M5 4h4M5 7h4M5 10h2" />
                  </svg>
                  From statement: <span className="font-medium text-black">{detail.fromStatement}</span>
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] font-medium hover:bg-[#f5f5f5] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 12v-8" />
                <path d="M4 8l4 4 4-4" />
                <path d="M2 14h12" />
              </svg>
              Download
            </button>
          </div>

          {/* Content: Table + Sidebar */}
          <div className="flex gap-6">
            {/* Left: Reservations table */}
            <div className="flex-1 min-w-0">
              <h2 className="text-[18px] font-semibold mb-4">Reservations</h2>

              {/* Search */}
              <div className="relative mb-4">
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
                  placeholder="Search reservations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2.5 border border-[#e5e5e5] rounded-xl text-[14px] w-[280px] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#a3a3a3] transition-all"
                />
              </div>

              {/* Table */}
              <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e5e5e5] bg-white">
                      <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Traveler</th>
                      <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Identifier</th>
                      <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Dates</th>
                      <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Comm. fare</th>
                      <th className="text-left px-5 py-3 text-[13px] font-medium text-[#737373]">Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReservations.map((r) => (
                      <tr
                        key={r.id}
                        className="border-b border-[#f5f5f5] last:border-b-0 hover:bg-[#fafafa] transition-colors"
                      >
                        <td className="px-5 py-4">
                          <div className="text-[14px] font-medium">{r.traveler}</div>
                          {r.travelerCode && (
                            <div className="text-[12px] text-[#a3a3a3]">{r.travelerCode}</div>
                          )}
                        </td>
                        <td className="px-5 py-4 text-[14px]">
                          {r.identifierType}: {r.identifierValue}
                        </td>
                        <td className="px-5 py-4 text-[14px]">
                          {r.dateStart} - {r.dateEnd}
                        </td>
                        <td className="px-5 py-4 text-[14px]">{r.commFare}</td>
                        <td className="px-5 py-4 text-[14px]">{r.due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <span className="text-[13px] text-[#737373]">Showing 25 of 1,234</span>
              </div>
            </div>

            {/* Right: Detail sidebar */}
            <div className="w-[320px] min-w-[320px] flex flex-col gap-4">
              {/* Transfer info card */}
              <div className="border border-[#e5e5e5] rounded-xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[16px] font-semibold">{detail.id}</span>
                  <StatusBadge status={detail.status} />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Total sent</div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[12px] text-[#a3a3a3]">({detail.totalSentDate})</span>
                      <span className="text-[16px] font-semibold">{detail.totalSent}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Total received</div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[12px] text-[#a3a3a3]">({detail.totalReceivedDate})</span>
                      <span className="text-[16px] font-semibold">{detail.totalReceived}</span>
                    </div>
                    <div className="text-[12px] text-[#a3a3a3] text-right">{detail.exchangeRate}</div>
                  </div>

                  <div className="border-t border-[#f0f0f0] pt-3">
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Payable to</div>
                    <div className="text-[14px] font-medium">{detail.payableTo}</div>
                  </div>

                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Commissionable fare</div>
                    <div className="text-[16px] font-semibold">{detail.commissionableFare}</div>
                  </div>

                  <div className="border-t border-[#f0f0f0] pt-3">
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Reference ID</div>
                    <div className="text-[13px] font-mono break-all">{detail.referenceId}</div>
                  </div>

                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Airwallex ID</div>
                    <div className="text-[13px] font-mono break-all">{detail.airwallexId}</div>
                  </div>
                </div>
              </div>

              {/* Recipient card */}
              <div className="border border-[#e5e5e5] rounded-xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[16px] font-semibold">Recipient</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[13px] font-medium text-[#2D6A2E] bg-[#edf7ed]">
                    Payable
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Beneficiary</div>
                    <div className="text-[14px] font-medium">{detail.beneficiary}</div>
                  </div>

                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Agency</div>
                    <div className="text-[14px] font-medium">{detail.agency}</div>
                  </div>

                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Email</div>
                    <div className="text-[14px] font-medium">{detail.email}</div>
                  </div>

                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Country</div>
                    <div className="text-[14px] font-medium">{detail.recipientCountry}</div>
                  </div>

                  <div>
                    <div className="text-[12px] text-[#a3a3a3] mb-0.5">Currency</div>
                    <div className="text-[14px] font-medium">{detail.currency}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
