import { motion } from 'motion/react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        <span className="font-brush text-4xl text-white">乡见</span>
      </div>

      <div className="hidden md:flex items-center gap-10 pointer-events-auto">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-base font-medium text-white/70 hover:text-white transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="pointer-events-auto">
        <button className="px-6 py-2 rounded-full bg-brand text-white text-sm font-semibold hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(150,182,108,0.3)] border border-white/10">
          加入乡见
        </button>
      </div>
    </nav>
  );
}
