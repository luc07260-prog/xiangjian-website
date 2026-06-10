import { motion } from 'motion/react';
import { Heart, MessageSquare, ArrowRight } from 'lucide-react';
import { COMMUNITY_POSTS } from '../constants';

const CATEGORIES = ['全部', '旅游日记', '摄影作品', '乡村美食', '手工工艺'];

export default function Community() {
  return (
    <section id="community" className="py-32 px-8 bg-[#f8f9f8] w-full max-w-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl font-display mb-4 text-gray-900">灵感社区</h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase">分享你的乡村生活灵感</p>
          </div>
          <div className="flex items-center gap-3 px-8 py-3 rounded-full bg-brand text-sm text-white hover:bg-brand/90 shadow-lg shadow-brand/20 transition-all cursor-pointer group font-semibold">
             发布灵感 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="flex gap-8 mb-12 border-b border-gray-200 pb-4">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`text-base tracking-widest transition-colors relative ${
                i === 0 ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat}
              {i === 0 && <div className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-brand" />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMMUNITY_POSTS.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] text-gray-900 font-bold border border-gray-100">
                   <Heart className="w-3 h-3 fill-brand text-brand" /> {post.likes}
                </div>
              </div>
              
              <h4 className="text-sm font-semibold line-clamp-2 leading-relaxed mb-6 group-hover:text-brand transition-colors text-gray-800">
                {post.title}
              </h4>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                 <div className="flex items-center gap-2">
                   <img src={post.avatar} className="w-6 h-6 rounded-full object-cover border border-gray-100" />
                   <span className="text-[10px] text-gray-400 font-medium">{post.author}</span>
                 </div>
                 <button className="text-gray-300 hover:text-brand transition-colors">
                   <MessageSquare className="w-4 h-4" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
