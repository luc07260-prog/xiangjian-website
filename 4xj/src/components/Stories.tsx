import wangpoImg from '../assets/images/wangpo.jpg';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

export default function Stories() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-5xl font-display mb-4">乡见故事</h2>
          <p className="text-white/40 text-sm tracking-widest uppercase">听见乡村里的真实人生</p>
        </div>
      </div>

      <div className="relative h-[600px] rounded-[40px] overflow-hidden group">
        < img src={wangpoImg} alt="Main Story" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center p-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <h3 className="text-4xl font-display mb-6">王阿婆·竹编传承人</h3>
            <p className="text-white/60 leading-relaxed mb-8">
              “一根竹子, 编出一辈子的坚守. 这些手艺不应该只留在博物馆里, 更应该活在当下的生活里.”
            </p>
            
            <button className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="text-sm tracking-widest uppercase font-medium group-hover:text-brand transition-colors">观看故事 →</span>
            </button>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-2xl font-display">01 / 04</span>
            <div className="w-24 h-[1px] bg-white/20 mt-2 relative">
               <div className="absolute top-0 left-0 h-full w-1/4 bg-brand" />
            </div>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
