import { motion } from 'motion/react';
import { Map, Palette, Home, Utensils, Rocket, ArrowRight } from 'lucide-react';
import { EXPERIENCE_CATEGORIES } from '../constants';

const ICONS = { Map, Palette, Home, Utensils, Rocket };

export default function VillageLife() {
  return (
    <section className="py-24 px-8 bg-bg-[#1c222a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl font-display mb-4">乡村生活</h2>
            <p className="text-white/60 text-sm tracking-widest uppercase">五大体验场景</p>
          </div>
          <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group">
            了解更多 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {EXPERIENCE_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={(cat as any).image} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 border border-white/5 group-hover:border-brand/40 transition-all rounded-[2rem]" />
                
                <div className="relative h-full flex flex-col items-center justify-end p-8 pb-12 text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all shadow-xl">
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-display mb-3 text-white">{cat.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed tracking-wider font-light">{cat.desc}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.05] group-hover:opacity-20 transition-opacity translate-x-8 -translate-y-8 rotate-12">
                   <Icon className="w-full h-full text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
