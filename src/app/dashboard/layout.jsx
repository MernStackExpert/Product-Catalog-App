import Link from "next/link";
import { dashboardItems } from "@/constants/dashboardItems";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar Section */}
      <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col border-r border-base-300">
        <div className="p-8 border-b border-base-300">
          <Link href="/" className="text-2xl font-black italic">
            Fresh<span className="text-primary">Up</span> Dashboard
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {dashboardItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-gray-500 hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-base-300">
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Logged in as</p>
           <p className="text-xs font-bold text-primary truncate">mdnirob30k@gmail.com</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
           {children}
        </div>
      </main>
    </div>
  );
}