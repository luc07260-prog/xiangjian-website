import planImg from '../assets/images/plan.jpg';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function JoinPlan() {
  return (
    <section id="youth" className="relative py-40 px-8 w-full min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={planImg}
          className="w-full h-full object-cover"
          alt="Joining Plan Background"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-display mb-8 text-white">加入乡见计划</h2>
          <p className="text-white/80 text-xl leading-relaxed mb-16 font-light">
            一起为乡村的未来助力.<br />
            我们正在寻找热爱乡村、有创意、有情怀的你.
          </p>
          
          <div className="grid grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-4xl font-bold mb-2 text-brand">1,256+</div>
              <div className="text-[12px] text-white/60 tracking-[0.3em] uppercase font-bold">青年共创者</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-brand">326+</div>
              <div className="text-[12px] text-white/60 tracking-[0.3em] uppercase font-bold">乡村合作伙伴</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-brand">86+</div>
              <div className="text-[12px] text-white/60 tracking-[0.3em] uppercase font-bold">正在运行项目</div>
            </div>
          </div>
          
          <button className="flex items-center gap-4 px-10 py-5 rounded-full bg-brand text-white font-bold hover:brightness-110 transition-all group shadow-2xl shadow-brand/20">
            了解计划详情 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Floaties */}
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-brand/30 blur-[100px]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-40 w-80 h-80 bg-emerald-500/20 blur-[120px]" 
      />
    </section>
  );
}
