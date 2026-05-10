import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LINKEDIN_POSTS, LinkedInPost } from "../data";
import { Linkedin, ChevronLeft, ChevronRight, ExternalLink, MessageSquare, ThumbsUp } from "lucide-react";

export function LinkedInFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % LINKEDIN_POSTS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + LINKEDIN_POSTS.length) % LINKEDIN_POSTS.length);
  };

  return (
    <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 overflow-hidden">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#0077b5] flex items-center justify-center rounded-sm">
            <Linkedin className="text-white" size={20} />
          </div>
          <div>
            <h4 className="text-white font-serif italic text-xl">LinkedIn Activity</h4>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">Latest from the feed</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prev}
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div className="order-2 lg:order-1">
              <div className="text-primary font-mono text-[10px] uppercase tracking-widest mb-4">
                {LINKEDIN_POSTS[currentIndex].date}
              </div>
              <h5 className="text-2xl font-serif italic text-white mb-6 leading-tight">
                "{LINKEDIN_POSTS[currentIndex].title}"
              </h5>
              <p className="text-slate-400 text-sm font-light italic leading-relaxed mb-8">
                {LINKEDIN_POSTS[currentIndex].content}
              </p>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/40">
                  <ThumbsUp size={12} className="text-primary/60" />
                  {LINKEDIN_POSTS[currentIndex].engagement.split(' • ')[0]}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/40">
                  <MessageSquare size={12} className="text-primary/60" />
                  {LINKEDIN_POSTS[currentIndex].engagement.split(' • ')[1]}
                </div>
              </div>

              <a 
                href={LINKEDIN_POSTS[currentIndex].url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:text-primary transition-colors group"
              >
                VIEW FULL POST <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {LINKEDIN_POSTS[currentIndex].image && (
              <div className="order-1 lg:order-2 relative aspect-video lg:aspect-auto overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={LINKEDIN_POSTS[currentIndex].image} 
                  alt="LinkedIn post visual" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20 pointer-events-none" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
        {LINKEDIN_POSTS.map((_, i) => (
          <div 
            key={i} 
            className={`w-1 h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary w-4' : 'bg-white/20'}`} 
          />
        ))}
      </div>
    </div>
  );
}
