"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", icon: "chart", href: "#" },
  { name: "Reservations", icon: "calendar", href: "/" },
  { name: "Transfers", icon: "transfer", href: "#" },
  { name: "Agencies", icon: "globe", href: "#" },
];

function NavIcon({ type }: { type: string }) {
  switch (type) {
    case "chart":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="10" width="4" height="7" rx="0.5" />
          <rect x="7" y="6" width="4" height="11" rx="0.5" />
          <rect x="13" y="1" width="4" height="16" rx="0.5" />
        </svg>
      );
    case "calendar":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="16" height="14" rx="2" />
          <path d="M1 7h16" />
          <path d="M5 1v4M13 1v4" />
        </svg>
      );
    case "transfer":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 6h14l-4-4" />
          <path d="M17 12H3l4 4" />
        </svg>
      );
    case "globe":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="8" />
          <path d="M1 9h16" />
          <path d="M9 1c2.2 2.6 3.4 5.6 3.4 8s-1.2 5.4-3.4 8c-2.2-2.6-3.4-5.6-3.4-8s1.2-5.4 3.4-8z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname.startsWith("/new-reservation") || pathname.startsWith("/past-reservations");
    return pathname === href;
  };

  return (
    <aside className="w-[220px] min-w-[220px] h-full bg-[#fafafa] border-r border-[#e5e5e5] flex flex-col">
      {/* Logo */}
      <div className="px-5 pt-5 pb-6">
        <div className="font-mono text-[15px] font-bold tracking-[0.3em]">BILT <span className="text-[12px]">&#9638;</span></div>
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#737373] mt-0.5">TRAVEL SUPPLIER</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
              isActive(item.href)
                ? "bg-white text-black shadow-sm"
                : "text-[#525252] hover:bg-white/60"
            }`}
          >
            <NavIcon type={item.icon} />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-3">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] text-[#525252] hover:bg-white/60 transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="3" />
            <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.2 3.2l1.4 1.4M13.4 13.4l1.4 1.4M3.2 14.8l1.4-1.4M13.4 4.6l1.4-1.4" />
          </svg>
          Settings
        </button>
      </div>

      {/* User */}
      <div className="border-t border-[#e5e5e5] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#e5e5e5] flex items-center justify-center text-[11px] font-semibold text-[#525252]">
          TM
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-medium truncate">Theo Mason</div>
          <div className="text-[11px] text-[#a3a3a3] truncate">theo@gmail.com</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5l3 3 3-3" />
          <path d="M4 9l3-3 3 3" />
        </svg>
      </div>
    </aside>
  );
}
