import { motion } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';
import { VILLAGES, EXPLORE_CATEGORIES } from '../constants';

export default function Explore() {
  return (
    <section id="explore" className="py-32 px-8 overflow-hidden bg-bg-dark">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Section: Info & Categories */}
        <div className="md:w-1/3 flex flex-col pt-4">
          <div className="mb-16">
            <h2 className="text-5xl font-display mb-6 tracking-tight text-white/90">探索乡村</h2>
            <p className="text-white/60 text-sm tracking-[0.4em] uppercase font-medium">发现不一样的乡村之美</p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none">
              {EXPLORE_CATEGORIES.map((cat, i) => (
                <button
                  key={cat.label}
                  className="flex flex-col items-center gap-4 group min-w-fit"
                >
                  <div className={`w-18 h-18 rounded-full overflow-hidden border-2 transition-all duration-500 scale-90 group-hover:scale-100 ${
                    i === 0 ? 'border-brand shadow-[0_0_20px_rgba(150,182,108,0.3)]' : 'border-white/10 group-hover:border-white/60'
                  }`}>
                    <img 
                      src={cat.image} 
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span className={`text-xs tracking-[0.2em] transition-colors whitespace-nowrap ${
                    i === 0 ? 'text-white font-bold' : 'text-white/30 group-hover:text-white/60'
                  }`}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>

            {/* View More Button - Positioned Below Categories */}
            <button className="flex items-center justify-between w-40 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-brand/70 transition-all group shadow-xl">
              <span className="text-xs font-semibold tracking-widest text-white/60 group-hover:text-white transition-colors">查看更多</span>
              <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-brand transition-all transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Section: Horizontal Scroll Gallery */}
        <div className="md:w-2/3 -mr-8 md:-mr-32">
          <div className="flex gap-8 overflow-x-auto pr-8 md:pr-32 pb-8 scrollbar-none snap-x snap-mandatory">
            {VILLAGES.map((village, i) => (
              <motion.div
                key={village.title}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-[300px] md:w-[400px] h-[560px] rounded-[2.5rem] overflow-hidden cursor-pointer snap-start flex-shrink-0 border border-white/5"
              >
                <img
                  src={village.image}
                  alt={village.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand/10" />
                
                <div className="absolute bottom-0 left-0 w-full p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="text-sm font-semibold mb-3 text-white/80 tracking-[0.2em] uppercase">{village.location}</div>
                  <h3 className="text-3xl font-display mb-4 text-white group-hover:text-brand transition-colors">{village.title}</h3>
                  <p className="text-white/60 text-sm mb-8 line-clamp-2 font-light tracking-wide leading-relaxed">{village.desc}</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/40 group-hover:bg-brand/20 group-hover:border-brand/30 transition-all">
                      <Heart className="w-4 h-4 text-white/60 group-hover:text-white" />
                    </div>
                    <span className="text-sm font-mono text-white/40 group-hover:text-white transition-colors tracking-tighter">{village.likes}</span>
                  </div>
                </div>

                {/* Hover Details Button */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

