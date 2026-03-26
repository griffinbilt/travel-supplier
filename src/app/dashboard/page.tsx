"use client";

import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <h1 className="text-[28px] font-semibold mb-8">Dashboard</h1>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <StatCard label="Total revenue" value="$142,580" change="+12.3%" up />
            <StatCard label="Active reservations" value="195" change="+8" up />
            <StatCard label="Pending statements" value="14" change="-3" up={false} />
            <StatCard label="Occupancy rate" value="87%" change="+2.1%" up />
          </div>

          {/* Charts placeholder row */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="border border-[#e5e5e5] rounded-2xl p-6">
              <h3 className="text-[16px] font-semibold mb-1">Revenue overview</h3>
              <p className="text-[13px] text-[#a3a3a3] mb-6">Monthly revenue for 2026</p>
              <div className="h-[200px] flex items-end gap-2">
                {[40, 55, 45, 60, 52, 70, 65, 80, 75, 90, 85, 68].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-[#171717] rounded-t-md transition-all hover:bg-[#404040]"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] text-[#a3a3a3]">
                      {["J","F","M","A","M","J","J","A","S","O","N","D"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#e5e5e5] rounded-2xl p-6">
              <h3 className="text-[16px] font-semibold mb-1">Booking sources</h3>
              <p className="text-[13px] text-[#a3a3a3] mb-6">Distribution by channel</p>
              <div className="space-y-4">
                <SourceBar label="Direct" value={35} color="#171717" />
                <SourceBar label="Expedia" value={28} color="#525252" />
                <SourceBar label="HAFH" value={18} color="#737373" />
                <SourceBar label="Bilt rate" value={12} color="#a3a3a3" />
                <SourceBar label="Other" value={7} color="#d4d4d4" />
              </div>
            </div>
          </div>

          {/* Recent activity + Quick actions */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 border border-[#e5e5e5] rounded-2xl p-6">
              <h3 className="text-[16px] font-semibold mb-4">Recent activity</h3>
              <div className="space-y-4">
                {[
                  { action: "New reservation", detail: "Aisha Moreno — Room #101, Mar 20–24", time: "2m ago" },
                  { action: "Statement reviewed", detail: "R1FLWQ2U — King, Wolff and Gibson Group", time: "15m ago" },
                  { action: "Check-in completed", detail: "Diego Kim — Room #303", time: "32m ago" },
                  { action: "Transfer received", detail: "High Sky Travel — $2,125.00", time: "1h ago" },
                  { action: "Reservation cancelled", detail: "Isabel Flores — Room #404", time: "2h ago" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#f5f5f5] last:border-b-0">
                    <div>
                      <div className="text-[14px] font-medium">{item.action}</div>
                      <div className="text-[13px] text-[#a3a3a3]">{item.detail}</div>
                    </div>
                    <span className="text-[12px] text-[#a3a3a3] shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#e5e5e5] rounded-2xl p-6">
              <h3 className="text-[16px] font-semibold mb-4">Quick actions</h3>
              <div className="space-y-2">
                {[
                  { label: "Add reservation", icon: "plus" },
                  { label: "Create statement", icon: "doc" },
                  { label: "Check in guests", icon: "check" },
                  { label: "View transfers", icon: "arrow" },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-[#e5e5e5] text-[14px] hover:bg-[#fafafa] transition-colors text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#525252" strokeWidth="1.5" strokeLinecap="round">
                        {item.icon === "plus" && <path d="M7 3v8M3 7h8" />}
                        {item.icon === "doc" && <><rect x="2" y="1" width="10" height="12" rx="1.5" /><path d="M5 4h4M5 7h4" /></>}
                        {item.icon === "check" && <path d="M3 7l3 3 5-5" />}
                        {item.icon === "arrow" && <path d="M1 5h10l-3-3M13 9H3l3 3" />}
                      </svg>
                    </div>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, change, up }: { label: string; value: string; change: string; up: boolean }) {
  return (
    <div className="border border-[#e5e5e5] rounded-2xl px-5 py-4">
      <div className="text-[13px] text-[#737373] mb-1">{label}</div>
      <div className="text-[26px] font-semibold mb-1">{value}</div>
      <div className={`text-[12px] font-medium ${up ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
        {change} vs last month
      </div>
    </div>
  );
}

function SourceBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[13px]">{label}</span>
        <span className="text-[13px] text-[#737373]">{value}%</span>
      </div>
      <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}
