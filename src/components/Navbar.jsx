import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">N</div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              Pulse News
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-slate-700">
            <a className="hover:text-slate-900 transition-colors" href="#">Home</a>
            <a className="hover:text-slate-900 transition-colors" href="#">World</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Business</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Tech</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Sports</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Culture</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                placeholder="Search stories"
                className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white shadow-sm">
              <Menu className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
