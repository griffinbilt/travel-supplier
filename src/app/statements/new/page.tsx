"use client";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function NewStatement() {
  const router = useRouter();

  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-white">
        {/* Top bar */}
        <div className="sticky top-0 bg-white border-b border-[#e5e5e5] z-10">
          <div className="max-w-[680px] mx-auto flex items-center justify-between px-6 py-4">
            <button
              onClick={() => router.push("/statements")}
              className="p-2 hover:bg-[#f5f5f5] rounded-full transition-colors border border-[#e5e5e5]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 4l-4 4 4 4" />
              </svg>
            </button>
            <span className="text-[15px] font-semibold">New statement</span>
            <div className="w-10" />
          </div>
        </div>

        <div className="max-w-[680px] mx-auto px-6 py-10">
          <h3 className="text-[18px] font-semibold mb-6">New statement details</h3>

          {/* Date range */}
          <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 mb-6 flex items-center gap-3 bg-[#fafafa]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="16" height="14" rx="2" />
              <path d="M1 7h16" />
              <path d="M5 1v4M13 1v4" />
            </svg>
            <div>
              <div className="text-[11px] text-[#a3a3a3]">Date range</div>
              <div className="text-[14px] font-medium">May 1, 2026 - May 28, 2026</div>
            </div>
          </div>

          {/* Supplier */}
          <div className="mb-6">
            <div className="text-[14px] font-semibold mb-2">Supplier</div>
            <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors">
              <span className="text-[14px]">King, Wolff and Gibson Group</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </div>
          </div>

          {/* Business account */}
          <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 mb-6 bg-[#fafafa]">
            <div className="text-[11px] text-[#a3a3a3] mb-0.5">Business account or sender</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-medium">King, Wolff and Gibson Group</div>
                <div className="text-[13px] text-[#a3a3a3]">admin@kingwolffandgibsongroup.com</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#16a34a] font-medium bg-[#dcfce7] px-2 py-0.5 rounded-md">Active</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Funding source */}
          <div className="border border-[#e5e5e5] rounded-xl px-4 py-3 mb-10 bg-[#fafafa]">
            <div className="text-[11px] text-[#a3a3a3] mb-0.5">Funding source</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-medium">USD ($) - United States Dollar</div>
                <div className="text-[13px] text-[#a3a3a3]">United States</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#525252] font-medium bg-[#f5f5f5] px-2 py-0.5 rounded-md">Local</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Create */}
          <button className="w-full bg-[#262626] text-white rounded-2xl py-4 text-[15px] font-semibold hover:bg-black transition-colors">
            Create statement
          </button>
        </div>
      </main>
    </div>
  );
}
