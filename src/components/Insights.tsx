import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BLOG_POSTS, BlogPost } from "../data";
import { Section, Button } from "./UI";
import { Clock, ArrowRight, X } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-surface border border-border-subtle rounded-3xl overflow-hidden flex flex-col h-full hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-all" />
      
      <div className="p-10 flex flex-col h-full relative z-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl font-display font-light text-text-primary mb-6 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
          {post.title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed mb-10 line-clamp-3 font-light text-sm italic border-l border-border-subtle pl-6">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-8 border-t border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-text-secondary/40">
            <Clock size={12} className="text-primary/60" />
            {post.readingTime}
          </div>
          
          <button 
            onClick={onClick}
            className="group/btn text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-text-primary hover:text-primary transition-colors flex items-center gap-3"
          >
            DECRYPT <ArrowRight size={12} className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function BlogModal({ post, isOpen, onClose }: { post: BlogPost | null; isOpen: boolean; onClose: () => void }) {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-5xl bg-surface/80 border border-border-subtle max-h-[90vh] overflow-hidden flex flex-col shadow-2xl rounded-3xl backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-8 md:p-12 border-b border-border-subtle flex items-center justify-between sticky top-0 bg-surface/50 backdrop-blur-md z-10">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Clock size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary font-bold">Thought Ledger</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary/60">{post.date} · {post.readingTime} READ</div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 bg-background border border-border-subtle hover:border-primary/40 rounded-xl text-text-secondary hover:text-primary transition-all group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-24 custom-scrollbar">
              <div className="max-w-3xl mx-auto">
                <div className="mb-12 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-widest text-primary/60 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-12 leading-[1.1] tracking-tight">
                  {post.title}
                </h2>
                
                <div 
                  className="prose prose-slate dark:prose-invert max-w-none 
                    prose-p:text-text-secondary/90 prose-p:font-light prose-p:leading-relaxed prose-p:text-lg prose-p:italic prose-p:mb-10
                    prose-h3:text-text-primary prose-h3:font-display prose-h3:font-bold prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-8
                    prose-strong:text-text-primary prose-strong:font-bold prose-headings:text-text-primary prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:rounded-r-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-10 md:p-14 bg-background/50 border-t border-border-subtle">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
                <div className="text-left">
                  <div className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.2em] mb-2 text-center md:text-left">Next Action Protocol</div>
                  <p className="text-text-secondary text-sm font-light italic text-center md:text-left">
                    Architecting high-performance growth engines requires specific intelligence. Let's discuss your deployment.
                  </p>
                </div>
                <Button 
                  href="#contact" 
                  onClick={onClose}
                  className="px-12 h-14 whitespace-nowrap"
                >
                  INITIALIZE DIALOGUE
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function Insights() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePost = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Section id="insights" className="border-t border-border-subtle bg-surface/5">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="max-w-2xl">
          <span className="editorial-label">// INTEL_LEDGER</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-8 tracking-tightest leading-none">
            Strategic <br/> <span className="font-bold text-primary italic">Intelligence.</span>
          </h2>
          <p className="text-text-secondary font-light text-lg italic border-l-2 border-primary/20 pl-8">
            Decoded thoughts on growth marketing ecosystems, CRM architecture, and the future of AI-enabled demand generation.
          </p>
        </div>
        <div className="hidden lg:block">
           <div className="p-6 bg-surface border border-border-subtle rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                 <ArrowRight />
              </div>
              <div>
                 <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Active Archives</div>
                 <div className="text-lg font-display font-bold text-text-primary">003 POSTS</div>
              </div>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <BlogCard post={post} onClick={() => openPost(post)} />
          </motion.div>
        ))}
      </div>

      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={closePost} 
      />
    </Section>
  );
}
