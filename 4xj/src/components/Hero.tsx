import { motion } from 'motion/react';
import { Search, PlayCircle, MousePointer2 } from 'lucide-react';
import { STATS } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center pt-32 pb-20 px-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero-bg.jpg"
          alt="Misty Mountain Village"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-left flex flex-col items-start"
      >
        <h1 className="font-brush text-[18rem] leading-[0.8] mb-6 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] select-none -ml-6">
          乡见
        </h1>
        <div className="space-y-4 mb-16">
          <p className="text-4xl font-display tracking-[0.4em] text-white/95">遇见乡村的另一种可能</p>
          <p className="text-white/60 text-sm tracking-[0.6em] uppercase">探索乡村生活美学平台</p>
        </div>

        {/* Search Bar - Strictly Left Aligned */}
        <div className="relative group w-full max-w-lg mb-28">
          <input
            type="text"
            placeholder="搜索乡村 / 体验 / 活动 / 目的地"
            className="w-full bg-white/15 border border-white/20 rounded-full py-5 px-14 focus:outline-none focus:border-white/30 transition-all backdrop-blur-xl placeholder:text-white/20 text-sm text-white"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-white transition-colors" />
          <button className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-brand p-3 rounded-full hover:bg-brand/80 transition-all hover:scale-105 shadow-xl">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.div>

      {/* Bottom Content - Left Aligned */}
      <div className="relative z-10 mt-auto w-full flex justify-between items-end">
        <div className="flex items-center gap-20">
          <button className="group flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-500">
              <PlayCircle className="w-8 h-8 fill-current" />
            </div>
            <div className="flex flex-col items-start">
               <span className="text-xs font-semibold tracking-[0.2em] text-white group-hover:text-brand transition-colors text-left">观看宣传片</span>
               <span className="text-[10px] text-white/20 font-mono italic">Discovery Video</span>
            </div>
          </button>

          <div className="flex gap-16 py-6 bg-brand/10 backdrop-blur-xl border border-brand/40 rounded-2xl px-16 ml-8 shadow-[0_0_50px_rgba(150,182,108,0.1)]">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-left"
              >
                <div className="text-4xl font-bold mb-1 font-display tracking-tight text-white">{stat.value}</div>
                <div className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mb-4">
           <span className="text-[9px] text-white/30 tracking-[0.4em] uppercase font-bold [writing-mode:vertical-lr]">Scroll</span>
           <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
