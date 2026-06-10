import lanlingImg from '../assets/images/lanling.jpg';
import huizhouImg from '../assets/images/huizhou.jpg';
import { motion } from 'motion/react';
import { Send, MapPin, Sparkles, Cpu, Target, Layers } from 'lucide-react';

export default function AIRecommend() {
  return (
    <section id="ai" className="relative py-40 px-8 w-full overflow-hidden bg-[#1a1c20]">
      {/* Background Layer with Digital Mesh */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-[0.08] grayscale mix-blend-screen"
          alt="Deep Tech Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608] via-transparent to-[#050608]" />
        
        {/* Animated Digital Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-[1px] bg-brand/50" />
               <span className="text-brand text-xs font-bold tracking-[0.5em] uppercase">Intelligence Engine</span>
            </div>
            <h2 className="text-6xl font-display text-white/95 leading-tight mb-4">
              AI 智能推荐<span className="text-brand text-2xl ml-4 font-mono font-normal opacity-50">/v2.5</span>
            </h2>
            <p className="text-white/60 text-lg font-light tracking-wide max-w-xl">
              深度学习您的旅行偏好，跨时空算法构建全球最懂您的乡村美学体验坐标。
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6 p-1 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-3xl"
          >
            <div className="flex flex-col items-end px-6">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">Status</span>
              <span className="flex items-center gap-2 text-xs text-brand font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Active Optimization
              </span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="px-6 py-3">
              <Sparkles className="w-6 h-6 text-brand" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Chat Interface - HUD Style */}
          <div className="lg:col-span-5 relative group">
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-brand/40" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-brand/40" />

            <div className="glass-panel border-white/10 rounded-[2rem] p-10 relative overflow-hidden backdrop-blur-4xl shadow-2xl shadow-brand/5">
              <div className="flex flex-col gap-8 mb-12 h-[400px] overflow-y-auto no-scrollbar">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-2 max-w-[85%]">
                    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-[15px] leading-relaxed text-white/80">
                      系统已就绪。正在分析当前的地理气候数据与季节性非遗分布... 
                      <br/><br/>
                      请问今天想要前往哪种类型的村落？
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-14">
                  {['深山隐世', '滨水而居', '古镇探幽', '民俗非遗', '周末速达'].map(tag => (
                    <button key={tag} className="px-4 py-2 rounded-lg border border-white/10 text-[11px] text-white/50 hover:bg-brand/20 hover:border-brand/40 hover:text-white transition-all transform hover:-translate-y-0.5">
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="flex items-start gap-5 flex-row-reverse">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white/40">
                    USR
                  </div>
                  <div className="bg-brand/20 border border-brand/30 rounded-2xl p-5 text-[15px] max-w-[85%] leading-relaxed text-white/90">
                    我想找一个适合 Weekend 自驾, 且有传统非遗体验的静谧村庄。
                  </div>
                </div>
              </div>

              <div className="relative pt-6 border-t border-white/10">
                <input 
                  type="text" 
                  placeholder="输入您的探险需求..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-7 pr-20 text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all text-white placeholder:text-white/20"
                />
                <button className="absolute right-3 top-[calc(50%+12px)] -translate-y-1/2 bg-brand p-3.5 rounded-xl hover:scale-105 transition-all shadow-lg shadow-brand/20">
                  <Send className="w-5 h-5 text-bg-dark fill-current" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Visualization */}
          <div className="lg:col-span-7 relative min-h-[600px]">
            {/* Map Background with Scanning Line */}
            <div className="absolute inset-0 bg-[#2d3540] rounded-[3rem] overflow-hidden border border-white/30 shadow-inner">
               <img 
                 src="/src/assets/images/background.jpg" 
                 className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                 alt="Tactical Map"
               />
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050608_80%)]" />
               <div className="absolute inset-0 bg-[radial-gradient(rgba(150,182,108,0.2)_1px,transparent_1px)] [background-size:20px_20px]" />
               
               {/* Animated Scanning Line */}
               <motion.div 
                 animate={{ y: [0, 600, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-brand/10 to-transparent pointer-events-none z-[1]"
               />
               
               {/* Map Data Labels */}
               <div className="absolute top-8 left-8 flex flex-col gap-2 z-10">
                 <div className="flex items-center gap-2 text-[10px] text-brand font-mono">
                   <Target className="w-3 h-3" /> TRACKING: ACTIVE
                 </div>
                 <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                   <Layers className="w-3 h-3" /> LAYERS: 128_VILLAGE_MESH
                 </div>
               </div>
            </div>

            <div className="relative z-10 h-full flex items-center justify-center -ml-12 lg:ml-0 gap-12 flex-wrap lg:flex-nowrap p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                whileHover={{ y: -10 }}
                className="group w-[540px] glass-panel-dark rounded-[2.5rem] border border-white/10 overflow-hidden backdrop-blur-4xl shadow-2xl lg:-mt-40"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={lanlingImg} className="w-full h-64 object-cover rounded-xl mb-4" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-brand rounded-lg text-bg-dark text-[10px] font-bold">MATCH 98%</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-display text-white">蔓源山岭</h4>
                    <MapPin className="w-4 h-4 text-brand" />
                  </div>
                  <p className="text-white/80 text-xs mb-6 font-light">距离您 128km · 预计自驾 2.5h</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['苏派非遗', '深山古树', '云雾梯田'].map(t => (
                       <span key={t} className="text-[9px] px-3 py-1 bg-white/5 border border-white/5 rounded-md text-white/60">#{t}</span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-white text-bg-dark rounded-xl text-sm font-bold hover:bg-brand transition-colors">开启导航</button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: 0.2 }}
                className="group w-[480px] glass-panel-dark rounded-[2.5rem] border border-white/10 overflow-hidden backdrop-blur-4xl shadow-2xl lg:mt-40"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={huizhouImg} className="w-full h-64 object-cover rounded-xl mb-4" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-brand rounded-lg text-bg-dark text-[10px] font-bold">MATCH 92%</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-display text-white">藏于山村</h4>
                    <MapPin className="w-4 h-4 text-brand" />
                  </div>
                  <p className="text-white/80 text-xs mb-6 font-light">距离您 156km · 预计自驾 3.1h</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['徽砚文化', '千年银杏', '手工扎染'].map(t => (
                       <span key={t} className="text-[9px] px-3 py-1 bg-white/5 border border-white/5 rounded-md text-white/60">#{t}</span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-white text-bg-dark rounded-xl text-sm font-bold hover:bg-brand transition-colors">详细测评</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
