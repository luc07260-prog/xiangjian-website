import { Send, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
        <div className="lg:col-span-2">
          <div className="font-brush text-4xl mb-8">乡见</div>
          <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-12">
            乡村生活美学平台.<br />
            致力于发现、传播、重塑乡村之美, 为城市与乡村架起一座灵感的桥梁.
          </p>
          <div className="flex gap-6">
            <button className="text-white/20 hover:text-white transition-colors cursor-pointer"><Instagram className="w-5 h-5" /></button>
            <button className="text-white/20 hover:text-white transition-colors cursor-pointer"><Twitter className="w-5 h-5" /></button>
            <button className="text-white/20 hover:text-white transition-colors cursor-pointer"><Facebook className="w-5 h-5" /></button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-8 tracking-widest uppercase">探索</h4>
          <ul className="space-y-4 text-sm text-white/40">
             <li className="hover:text-white transition-colors cursor-pointer">乡村地图</li>
             <li className="hover:text-white transition-colors cursor-pointer">特色体验</li>
             <li className="hover:text-white transition-colors cursor-pointer">在地体验</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-8 tracking-widest uppercase">发现</h4>
          <ul className="space-y-4 text-sm text-white/40">
             <li className="hover:text-white transition-colors cursor-pointer">非遗文化</li>
             <li className="hover:text-white transition-colors cursor-pointer">乡村摄影</li>
             <li className="hover:text-white transition-colors cursor-pointer">灵感社区</li>
          </ul>
        </div>

        <div>
           <h4 className="text-sm font-semibold mb-8 tracking-widest uppercase">订阅乡见资讯</h4>
           <div className="relative group mb-4">
              <input 
                type="text" 
                placeholder="输入你的邮箱"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-white/30"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
                <Send className="w-4 h-4" />
              </button>
           </div>
           <p className="text-[10px] text-white/20">我们将每周为你推送精选的乡村灵感内容.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5">
        <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 XIANGJIAN ALL RIGHTS RESERVED.</p>
        <button 
          onClick={scrollToTop}
          className="mt-8 md:mt-0 flex items-center gap-4 group"
        >
          <span className="text-[10px] tracking-widest uppercase group-hover:text-brand transition-colors">回到顶部</span>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand transition-colors">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  );
}
